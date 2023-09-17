import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';
//returning the photoFaeButton in thephotoListitem then we can have the button in every photo 


const PhotoListItem = (props) => {
  const {id, username, profile, handlePhoto, onPhotoClick ,photo, isEnlarged, selectedPhoto, setSelectedPhoto } = props;

  const style = isEnlarged ? { width: '100%', height: 'auto'} : { width: '200px', height: 'auto' };

  const handleUpdata = () => {
    onPhotoClick(photo);
    setSelectedPhoto(photo); // Update selectedPhoto when the item is clicked
  };


  return (
    <div className="photo-list__item" >
      <PhotoFavButton handleUpdata = {handleUpdata}selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}   handlePhoto={handlePhoto} id={id}/> 
      <img  style={style} onClick={() => onPhotoClick(photo)}  className = "photo-list__image" src={photo.urls.regular} alt="Image photo" />
      <section className="photo-list__user-details" >
        <img className = "photo-list__user-profile"src={profile} alt="Profile image"/>
        <div className="photo-list__user-info">
          <span>{username}</span>
          <span className="photo-list__user-location">{photo.location.city},{photo.location.country}</span>
        </div>
      </section>
      
    </div>
  );
};

export default PhotoListItem;
