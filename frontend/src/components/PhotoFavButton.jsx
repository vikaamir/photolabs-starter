import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {
  // We are checking to see if the photo id exists in the array of favourites
  const handleLike = () => {
    props.handleFevPhoto(props.id)
  };

  // Check if the id exists in the array, and if it does, it will return true and make the heart fill red

  const liked = Array.isArray(props.fevPhoto) && props.fevPhoto.includes(props.id);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleLike} >
        <FavIcon selected={liked} />
      </div>


    </div>

  );
}

export default PhotoFavButton;