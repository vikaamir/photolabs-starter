import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const[liked, setLike] = useState(false);
  const handleLike = () => {
    setLike(!liked
      )
    props.handlePhoto(props.id)
  }

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick = {handleLike} >
          <FavIcon  selected = {liked}  />
      </div>
    
 
    </div>
       
  );
}

export default PhotoFavButton;