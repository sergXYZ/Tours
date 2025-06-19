import { useEffect } from 'react'
import { useState } from 'react'
import Tours from './Tours'

const url = 'https://www.course-api.com/react-tours-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setIsLoading(false)
      setTours(tours)
      console.log(tours)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return <h2>Loading</h2>
  }
  return (
    <main>
      <Tours tours={tours} />
    </main>
  )
}
export default App
