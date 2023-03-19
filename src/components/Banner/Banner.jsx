import React from 'react'
import image1 from "../../assets/img1.png"
import "./banner.css"

function Banner() {
  return (
    <div className='banner'>
        <img src={image1} alt="imageBanner" />
        <h2>chez vous partout et ailleurs</h2>
    </div>
  )
}

export default Banner