import React, { useState } from 'react';
import '../styles/HomeRoute.scss'
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from 'components/PhotoList';



const HomeRoute = (props) => {
  const [fevPhoto, setFevPhoto] = useState([])
  const handlePhoto = (photoId) => {
    setFevPhoto((proveState) => {
      if (!proveState.includes(photoId)) {
       return  [...proveState, photoId]
      } else { 
        const removeLike = fevPhoto.filter(id => {
           return id !== photoId
        }) 
         return [...removeLike]
      }

    })
  }
  console.log(fevPhoto)
//passing the data to TopNavifation components via  
  return (
    <div className='home-route'>
      <TopNavigation  hasFavourites={fevPhoto.length > 0}/>
      <PhotoList handlePhoto={handlePhoto} onPhotoClick = {props.onPhotoClick} />

    </div>

  )

}



export default HomeRoute;

