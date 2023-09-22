import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

const App = (props) => {
  const {
    handleFevPhoto,
    setSelectedPhoto,
    toggleModal,
    photos,
    state,
    photoData,
    topicData
  } = useApplicationData()

  const {
    fevPhoto,
    isModalOpen,
    selectedPhoto
  } = state

  return ( // using index as parmeter in to give uniqe key for every photo
    <div className="App">
      <HomeRoute
        toggleModal={toggleModal}
        fevPhoto={fevPhoto}
        handleFevPhoto={handleFevPhoto}
        photos={photos}
        selectedPhoto={selectedPhoto} // Pass selectedPhoto as a prop to HomeRoute
        setSelectedPhoto={setSelectedPhoto}
        photoData={photoData}
        topicData = {topicData}
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

