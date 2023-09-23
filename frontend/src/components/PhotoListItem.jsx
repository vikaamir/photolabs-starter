import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';
//returning the photoFaeButton in thephotoListitem then we can have the button in every photo 


const PhotoListItem = (props) => {
  const { setSelectedPhoto, toggleModal, handleFevPhoto, photo, fevPhoto } = props;

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo)
    toggleModal()
  };
  console.log("photo", photo)
  return (
    <div className="photo-list__item" >
      <PhotoFavButton fevPhoto={fevPhoto} handleFevPhoto={handleFevPhoto} id={photo.id} />
      <img onClick={() => handlePhotoClick(photo)} className="photo-list__image" src={photo.urls.regular} alt="Image photo" />
      <section className="photo-list__user-details" >
        <img className="photo-list__user-profile" src={photo.user.profile} alt="Profile image" />
        <div className="photo-list__user-info">
          <p>{photo.user.username}</p>
          <span className="photo-list__user-location">{photo.location.city},{photo.location.country}</span>
        </div>
      </section>
    </div>
  );

};

export default PhotoListItem;
