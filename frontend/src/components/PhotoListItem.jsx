import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';
//returning the photoFaeButton in thephotoListitem then we can have the button in every photo 


const PhotoListItem = (props) => {
  const { handleFevPhoto, onPhotoClick ,photo, fevPhoto} = props;

  return (
    <div className="photo-list__item" >
      <PhotoFavButton fevPhoto = {fevPhoto} handleFevPhoto={handleFevPhoto} id ={photo.id}/> 
      <img  onClick={() => onPhotoClick(photo)}  className = "photo-list__image" src={photo.urls.regular} alt="Image photo" />
      <section className="photo-list__user-details" >
        <img className = "photo-list__user-profile"src={photo.user.profile} alt="Profile image"/>
        <div className="photo-list__user-info">
          <p>{photo.user.username}</p>
          <span className="photo-list__user-location">{photo.location.city},{photo.location.country}</span>
        </div>
      </section>
      
    </div>
  );
  
};

export default PhotoListItem;
