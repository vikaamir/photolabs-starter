import React from 'react';
// import PhotoList from 'components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
// import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';

import './App.scss';

const App = (props) => {

  const photos = new Array(3).fill({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);//track which photo item the user clicks on
  const onPhotoClick = (photo) => {
    setIsModalOpen(true);
    setSelectedPhoto(photo);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };
  

  return ( // using index as parmeter in to give uniqe key for every photo
  <div className="App">
  <HomeRoute
    onPhotoClick={onPhotoClick}
    photos={photos}
    selectedPhoto={selectedPhoto} // Pass selectedPhoto as a prop to HomeRoute
    setSelectedPhoto={setSelectedPhoto} // Pass the setter function
  />
  {isModalOpen && (
    <PhotoDetailsModal
      photo={selectedPhoto}
      closeModal={closeModal}
    />
  )}
</div>
  );
};


export default App;
