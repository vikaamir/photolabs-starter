import React from 'react';
import '../styles/HomeRoute.scss'
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {getFevPhotos, toggleModal, handleFevPhoto, photos, selectedPhoto, setSelectedPhoto, fevPhoto, topicData, handleFetch  } = props;
  //passing the data to TopNavifation components via  
  return (
    <div className='home-route'>
      <TopNavigation getFevPhotos={getFevPhotos}  handleFetch={handleFetch} topicData={topicData} hasFavourites={fevPhoto.length > 0} />
      <PhotoList
        toggleModal={toggleModal}
        handleFevPhoto={handleFevPhoto}
        photos={photos}
        selectedPhoto={selectedPhoto} // Pass selectedPhoto to PhotoList
        setSelectedPhoto={setSelectedPhoto}
        fevPhoto={fevPhoto}

      />
    </div>

  )

};



export default HomeRoute;

