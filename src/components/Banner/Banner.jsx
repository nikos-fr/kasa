import React from 'react'
import "./banner.css"

function Banner({pictureIndex,bannerTitle}) {
  return (
    <div className='banner'>
        <img className='img2' src={pictureIndex} alt="imageBanner" />
        <h2>{bannerTitle}</h2>
    </div>
  )
}

export default Banner