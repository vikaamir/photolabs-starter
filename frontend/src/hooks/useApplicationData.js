import { useReducer, useEffect } from 'react';
import axios from "axios";


const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC',
  GET_LIKED_PHOTOS: 'GET_LIKED_PHOTOS'
};

const initialState = {
  fevPhoto: [],
  isModalOpen: false,
  selectedPhoto: null,
  photos: [],
  topics: [],
  topicData: null
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_MODAL:// to open model photos
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        fevPhoto: [...state.fevPhoto, action.payload],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        fevPhoto: state.fevPhoto.filter(id => id !== action.payload),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state, photos: action.payload
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload,
      };
    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        photos: action.payload,
      };  

    default:
      return state;
  }
}

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // replaces every single lifecycle function that you may run into. 
  useEffect(() => {
    const photoApiUrl = 'http://localhost:8001/api/photos';
    const topicApiUrl = 'http://localhost:8001/api/topics';
    // Use Promise.all to fetch data from both endpoints concurrently
    Promise.all([axios.get(photoApiUrl), axios.get(topicApiUrl)])
      .then(([photoResponse, topicResponse]) => {
        // Destructure the responses
        const photoData = photoResponse.data;
        const topicData = topicResponse.data;

        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const getPhotosByTopic = (topic_id) => {
    return axios.get(`http://localhost:8001/api/topics/photos/${topic_id}`)
      .then((response) => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: response.data });
      })
      .catch((error) => {
        console.error('Error fetching photos by topic:', error);
      });
  };

  const setSelectedPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const toggleModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
  };

  const handleFevPhoto = (photoId) => {
    if (!state.fevPhoto.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    }
  };

  const getFevPhotos = () => {
    const fevPhotosObjs = state.fevPhoto.map(p_id => state.photos.find(p => p.id === p_id))
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: fevPhotosObjs})
  };


  return {
    selectedPhoto: state.selectedPhoto,
    getFevPhotos,
    getPhotosByTopic,
    handleFevPhoto,
    setSelectedPhoto,
    toggleModal,
    state,
    photoData: state.photos,
    topicData: state.topics, // Use state.topicData for topic data
  };
};


export default useApplicationData
