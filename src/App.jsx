import { useEffect } from 'react'
import { useState } from 'react'
import Tours from './Tours'
import Loading from './Loading'

const url = 'https://www.course-api.com/react-tours-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)

    setTours(newTours)
  }

  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setIsLoading(false)
      setTours(tours)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>There are no tours left</h2>
          <button className="btn" type="button" onClick={() => fetchTours()}>
            Re-render tours
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
export default App
