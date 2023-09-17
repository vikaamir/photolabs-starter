import React from 'react';
import { useState } from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import FavIcon from 'components/FavIcon';



const PhotoDetailsModal = (props) => {
  const { photo, closeModal, fevPhoto, handleFevPhoto } = props;
  console.log('photoDatails Photo:', photo);


console.log("we here", fevPhoto)

  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem photo={photo} isEnlarged={true} handleFevPhoto = {handleFevPhoto} fevPhoto ={fevPhoto} />
      <PhotoList />
      <FavIcon  />


  
    </div>
  );
};

export default PhotoDetailsModal;