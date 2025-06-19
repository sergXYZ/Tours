import React from 'react'
import Tour from './Tour'

const Tours = ({ tours }) => {
  return (
    <section>
      {tours.name}
      {tours.map((tour) => {
        return (
          <>
            <Tour key={tour.id} {...tour} />
          </>
        )
      })}
    </section>
  )
}

export default Tours
