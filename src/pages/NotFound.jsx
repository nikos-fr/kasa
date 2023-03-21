import React from 'react'
import { NavLink } from "react-router-dom";
import "./notfound.css"

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h3 className='txterror'>Oups! La page que vous demandez n'existe pas.</h3>
      <ul className='backacceuil'>
        <li className='active-link'>
        <NavLink to="/" className={({isActive}) => (isActive ? "active-link" : undefined)}>
            Retourner sur la page d'acceuil
          </NavLink>
        </li>          
      </ul>
    </div>
  )
}

export default NotFound