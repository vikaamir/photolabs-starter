import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import FavIcon from 'components/FavIcon';
import photos from 'mocks/photos';
import PhotoFavButton from 'components/PhotoFavButton';



const PhotoDetailsModal = (props) => {
  const {  closeModal, selectedPhoto, username, profile, handleFevPhoto, onPhotoClick ,photo, isEnlarged, fevPhoto} = props;

  const style = isEnlarged ? { width: '100%', height: 'auto'} : { width: '200px', height: 'auto' };
  
  const GetsimilarPho = photos.find(photo => photo.id === selectedPhoto?.id)?.similar_photos;
  const similarPhotosArr = Object.values(GetsimilarPho);

  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem photo={photo} isEnlarged={true} handleFevPhoto = {handleFevPhoto} fevPhoto ={fevPhoto} />
      <PhotoList  similiarPhotos = {similarPhotosArr}/>
      <FavIcon  />
      <div className="photo-list__item" >
      <PhotoFavButton fevPhoto = {fevPhoto} handleFevPhoto={handleFevPhoto} id ={photo.id}/> 
      <img  style={style} onClick={() => onPhotoClick(photo)}  className = "photo-list__image" src={photo.urls.regular} alt="Image photo" />
      <section className="photo-list__user-details" >
        <img className = "photo-list__user-profile"src={profile} alt="Profile image"/>
        <div className="photo-list__user-info">
          <span>{username}</span>
          <span className="photo-list__user-location">{photo.location.city},{photo.location.country}</span>
        </div>
      </section>
      
    </div>
    </div>
    
  );
};

export default PhotoDetailsModal;