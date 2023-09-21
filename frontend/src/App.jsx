import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';

import './App.scss';

const App = (props) => {
const { 
  handleFevPhoto,
  setSelectedPhoto,
  toggleModal,
  photos,
  state } = useApplicationData()

  const{  
    fevPhoto,
    isModalOpen,
    selectedPhoto} = state
  console.log("im here",state)

  return ( // using index as parmeter in to give uniqe key for every photo
  <div className="App">
  <HomeRoute
    toggleModal = {toggleModal}
    fevPhoto = {fevPhoto}
    handleFevPhoto ={handleFevPhoto}
    photos={photos}
    selectedPhoto={selectedPhoto} // Pass selectedPhoto as a prop to HomeRoute
    setSelectedPhoto={setSelectedPhoto} // Pass the setter function
  />
  
  {isModalOpen && (
    <PhotoDetailsModal
      selectedPhoto={selectedPhoto}
      toggleModal={toggleModal}
      fevPhoto = {fevPhoto}
      handleFevPhoto = {handleFevPhoto}
      setSelectedPhoto ={setSelectedPhoto}

      
    />
  )}
</div>
  );
};

export default App;

