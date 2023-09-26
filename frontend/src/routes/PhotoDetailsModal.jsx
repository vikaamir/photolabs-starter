import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';



const PhotoDetailsModal = (props) => {
  const { setSelectedPhoto, toggleModal, selectedPhoto, handleFevPhoto, fevPhoto } = props;

  function closeModal() {
    toggleModal()
    setSelectedPhoto(null)

  };

  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modalclose-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-list__item" >
        <PhotoFavButton fevPhoto={fevPhoto} handleFevPhoto={handleFevPhoto} id={selectedPhoto.id} />
        <img className="photo-details-modalimage" src={selectedPhoto.urls.regular} alt="Image photo" />
        <section className="photo-details-modaltop-bar" >
          <img className="photo-list__user-profile" src={selectedPhoto.user.profile} alt="Profile image" />
          <div className="photo-details-modalheader">
            <p>{selectedPhoto.user.username}</p>
            <span className="photo-details-modalphotographer-location">{selectedPhoto.location.city},{selectedPhoto.location.country}</span>
          </div>
        </section>

      </div>
      <div className='photo-details-modalimages'>
        <PhotoList   fevPhoto={fevPhoto} handleFevPhoto={handleFevPhoto} photos={selectedPhoto.similar_photos} />
      </div>

    </div>

  );
};

export default PhotoDetailsModal;