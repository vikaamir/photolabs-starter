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
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC'
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
    case ACTIONS.TOGGLE_MODAL:
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

  useEffect(() => {
    axios.get('http://localhost:8001/api/photos')
      .then((response) => {
        console.log("response photo", response)
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });

    axios.get('http://localhost:8001/api/topics')
      .then((response) => {
        console.log('data', response.data);
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data });
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
      });
  }, []);

  const getPhotosByTopic = (topic_id) => {
    return axios.get(`http://localhost:8001/api/topics/photos/${topic_id}`)
      .then((response) => {
        console.log("respons", response.data)
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

  return {
    selectedPhoto: state.selectedPhoto,
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
