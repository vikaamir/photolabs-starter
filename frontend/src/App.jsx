import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

const App = () => {
  const {
    getFevPhotos,
    getPhotosByTopic,
    handleFevPhoto,
    setSelectedPhoto,
    toggleModal,
    state,
    photoData,
    topicData,
  } = useApplicationData()

  const {
    fevPhoto,
    isModalOpen,
    selectedPhoto
  } = state

  return (
    <div className="App">
      <HomeRoute
        getFevPhotos={getFevPhotos}
        toggleModal={toggleModal}
        fevPhoto={fevPhoto}
        handleFevPhoto={handleFevPhoto}
        photos={photoData}
        selectedPhoto={selectedPhoto} // Pass selectedPhoto as a prop to HomeRoute
        setSelectedPhoto={setSelectedPhoto}
        photoData={photoData}
        topicData={topicData}
        handleFetch={getPhotosByTopic}
      />

      {isModalOpen && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          toggleModal={toggleModal}
          fevPhoto={fevPhoto}
          handleFevPhoto={handleFevPhoto}
          setSelectedPhoto={setSelectedPhoto}


        />
      )}
    </div>
  );
};

export default App;

