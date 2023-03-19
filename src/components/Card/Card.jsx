import React from 'react'
import "./card.css"

function Card({appartCover , appartTitle}) {
  return (
    <div className='card'>
        <img src={appartCover} alt={appartTitle} />
        <h4>{appartTitle}</h4>
    </div>
  )
}

export default Card