import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"

function Card({appartCover , appartTitle, appartId}) {
  return (
    <Link to={`../logement/${appartId}`} className='card'>
        <img src={appartCover} alt={appartTitle} />
        <h4>{appartTitle}</h4>
    </Link>
  )
}

export default Card