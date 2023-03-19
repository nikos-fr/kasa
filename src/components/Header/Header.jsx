import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/LOGO.png'
import "./header.css"


function Header() {
  return (
    <header>
      <div className="logo">
      <img src={logo} alt= "kasa"/>
      </div>
      
      <ul>
        <li>
        <NavLink to="/" className={({isActive}) => (isActive ? "active-link" : undefined)}>
            Acceuil
          </NavLink>
        </li>
        <li>
        <NavLink to="/about" className={({isActive}) => (isActive ? "active-link" : undefined)}>
            A Propos
          </NavLink>

        </li>
          
          
      </ul>
    </header>
  );
}

export default Header
