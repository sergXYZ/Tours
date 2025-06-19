import React from 'react'

const Tour = ({ id, image, info, name, price }) => {
  return (
    <article>
      <img src={image} alt={name} />
      <span>{price}</span>
      <h2>{name}</h2>
      <p>{info}</p>
      <p>popa</p>
    </article>
  )
}

export default Tour
