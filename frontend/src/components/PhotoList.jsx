import React from "react";
import PhotoListItem from './PhotoListItem';
import photos from "mocks/photos";
import { useState } from "react";
import "../styles/PhotoList.scss";


const PhotoList = (props) => { 
 
  return (
    <ul className="photo-list">
    {photos.map((photoData) => (
      <PhotoListItem className ="photo-list:after"
        key={photoData.id} 
        urls={photoData.urls}
        user={photoData.user}
        imageSource ={photoData.urls.regular} 
        profile = {photoData.user.profile}
        handleClick = {props.handlePhoto} 
        id = {photoData.id}
        onPhotoClick = {props.onPhotoClick}
        photo = {photoData}
        isEnlarged ={false}
        selectedPhoto={props.selectedPhoto} // Pass selectedPhoto to PhotoListItem
        setSelectedPhoto={props.setSelectedPhoto} // Pass setSelectedPhoto to PhotoListItem
      />
    ))}
  </ul>
  );
};

export default PhotoList;
