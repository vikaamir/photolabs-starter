import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import FavIcon from 'components/FavIcon';
import photos from 'mocks/photos';
import PhotoFavButton from 'components/PhotoFavButton';



const PhotoDetailsModal = (props) => {
  const { closeModal, selectedPhoto, user, profile, handleFevPhoto, onPhotoClick ,photo, isEnlarged, fevPhoto} = props;

  const style = isEnlarged ? { width: '100%', height: 'auto'} : { width: '200px', height: 'auto' };
  
  const GetsimilarPho = photos.find(photo => photo.id === selectedPhoto?.id)?.similar_photos;
  const similarPhotosArr = Object.values(GetsimilarPho);

  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modalclose-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-list__item" >
      <PhotoFavButton fevPhoto = {fevPhoto} handleFevPhoto={handleFevPhoto} id ={photo.id}/> 
      <img className = "photo-details-modalimage" src={photo.urls.regular} alt="Image photo" />
      <section className="photo-details-modaltop-bar" >
        <img className = "photo-list__user-profile"src={photo.user.profile} alt="Profile image"/>
        <div className="photo-details-modalheader">
          <p>{photo.user.username}</p>
          <span className="photo-details-modalphotographer-location">{photo.location.city},{photo.location.country}</span>
        </div>
      </section>
    
    </div>
    <div className='photo-details-modalimages'>
    <PhotoList similiarPhotos = {similarPhotosArr}/>
    </div>
     
    </div>
    
  );
};

export default PhotoDetailsModal;