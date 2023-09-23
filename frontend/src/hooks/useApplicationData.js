import React, { useReducer, useEffect } from "react";
import axios from "axios";

import ReactDOM from "react-dom";



const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC"


}

const initialState = {
  fevPhoto: [],
  isModalOpen: false,
  selectedPhoto: null,
  photos: [],
  topics: []
}


function reducer(state, action) {
  console.log("action", action)
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isModalOpen: !state.isModalOpen
      }
    case 'SELECT_PHOTO':
      return {
        ...state,
        selectedPhoto: action.payload
      }
    case 'FAV_PHOTO_ADDED':
      return {
        ...state,
        fevPhoto: [...state.fevPhoto, action.payload]
      }
    case 'FAV_PHOTO_REMOVED':
      return {
        ...state,
        fevPhoto: state.fevPhoto.filter(id => id !== action.payload)
      };
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };

    case "SET_TOPIC_DATA":
      console.log(" settopicData")
      return {
        ...state,
            topics: action.payload,
          };
    case ACTIONS.GET_PHOTOS_BY_TOPIC: 
      return { ...state, photoData:
            action.payload };

    default:
      return state
  }

}

function useApplicationData() {
  const photos = new Array(3).fill({});
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log("statetopics",state.topics)

  useEffect(() => {
    axios("http://localhost:8001/api/photos")
      .then((response) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data })
      })
      axios("http://localhost:8001/api/topics")
      .then((response) => {
        console.log("data",response.data)
        dispatch({ type : ACTIONS.SET_TOPIC_DATA, payload: response.data})
      })
  }, []);





  const setSelectedPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const toggleModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL })
  }

  const handleFevPhoto = (photoId) => {

    if (!state.fevPhoto.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId })
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId })

    };

    

  };


  return {
    handleFevPhoto,
    setSelectedPhoto,
    toggleModal,
    state,
    photoData: state.photos,
    topicData: state.topics
  }


}

export default useApplicationData
