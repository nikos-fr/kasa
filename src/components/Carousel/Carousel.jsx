import React from 'react'

function Carousel({carouselPictures}) {
    
  return (
    <div className='carousel'>
      <button>prev</button>
       <img src={carouselPictures[0]} alt="" />
       <button>next</button>
    </div>
  )
}

export default Carousel