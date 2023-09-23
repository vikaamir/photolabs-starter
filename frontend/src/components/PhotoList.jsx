import React from "react";
import PhotoListItem from './PhotoListItem';
// import photos from "mocks/photos";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  // const similiarPhotos = props.similiarPhotos;
  // let dispayPhotos = props.photos
  // if (similiarPhotos) {
  //   dispayPhotos = similiarPhotos;
  // }

  return (
    <ul className="photo-list">
      {props.photos.map((photoData) => (
        <PhotoListItem
          key={photoData.id}
          urls={photoData.urls}
          user={photoData.user}
          imageSource={photoData.urls.regular}
          profile={photoData.user.profile}
          handleFevPhoto={props.handleFevPhoto}
          id={photoData.id}
          photo={photoData}
          isEnlarged={false}
          selectedPhoto={props.selectedPhoto}
          setSelectedPhoto={props.setSelectedPhoto}
          fevPhoto={props.fevPhoto}
          toggleModal={props.toggleModal}
        />
      ))};
    </ul>
  );
};

export default PhotoList;
