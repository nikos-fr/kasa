import React from 'react'
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className='notfound'>
    <h1>404</h1>
    <h3 className='txterror'>Oups! La page que vous demandez n'existe pas.</h3>
    <ul className='backacceuil'>
      <li>
      <NavLink to="/" className={"active-link"}>
          Retourner sur la page d'acceuil
        </NavLink>
      </li>          
    </ul>
  </div>
  )
}

export default NotFound