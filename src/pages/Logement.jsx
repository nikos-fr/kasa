import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import AppartTitle from '../components/AppartTitle/AppartTitle';
import Carousel from '../components/Carousel/Carousel';
import Location from '../components/Location/Location';
import NotFound from '../pages/NotFound';
import "./logement.css"

function Lodging({apparts}) {
  const {logementId} = useParams()
  const appart = apparts.find((appart) => appart.id === logementId)
 
  return appart ? (
    <div className='lodging'>
      <Carousel carouselPictures={appart.pictures} />
      <AppartTitle title={appart.title} />
      <Location location={appart.location} />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  ) : (
    <Navigate to='/error' replace={<NotFound />} />
  )
}

export default Lodging