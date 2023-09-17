import React, { useState } from 'react';
import '../styles/HomeRoute.scss'
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';




const HomeRoute = (props) => {
  const {handleFevPhoto, onPhotoClick, photos, selectedPhoto, setSelectedPhoto ,isModalOpen, fevPhoto} = props;
  // const [fevPhoto, setFevPhoto] = useState([])
  // const handleFevPhoto = (photoId) => {
  //   setFevPhoto((proveState) => {
  //     if (!proveState.includes(photoId)) {
  //      return  [...proveState, photoId]
  //     } else { 
  //       const removeLike = fevPhoto.filter(id => {
  //          return id !== photoId
  //       }) 
  //        return [...removeLike]
  //     }

  //   })
  // }
  console.log("liked",fevPhoto)
//passing the data to TopNavifation components via  
  return (
    <div className='home-route'>
      <TopNavigation  hasFavourites={fevPhoto.length > 0}/>
      <PhotoList
      handleFevPhoto = {handleFevPhoto}
        photos={photos}
        onPhotoClick={onPhotoClick}
        selectedPhoto={selectedPhoto} // Pass selectedPhoto to PhotoList
        setSelectedPhoto={setSelectedPhoto} 
        fevPhoto = {fevPhoto}
      />
    </div>

  )

}



export default HomeRoute;

