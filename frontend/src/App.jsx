import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';

import './App.scss';

const App = (props) => {
const { handleFevPhoto,
  closeModal,
  onPhotoClick,
  photos,
  selectedPhoto,
  fevPhoto,
  setSelectedPhoto,
isModalOpen } = useApplicationData()
  

  return ( // using index as parmeter in to give uniqe key for every photo
  <div className="App">
  <HomeRoute
  fevPhoto = {fevPhoto}
  handleFevPhoto ={handleFevPhoto}
    onPhotoClick={onPhotoClick}
    photos={photos}
    selectedPhoto={selectedPhoto} // Pass selectedPhoto as a prop to HomeRoute
    setSelectedPhoto={setSelectedPhoto} // Pass the setter function
  />
  
  {isModalOpen && (
    <PhotoDetailsModal
      selectedPhoto={selectedPhoto}
      closeModal={closeModal}
      fevPhoto = {fevPhoto}
      handleFevPhoto = {handleFevPhoto}
    />
  )}
</div>
  );
};

export default App;

