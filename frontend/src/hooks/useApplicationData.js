import React, { useReducer, useEffect } from "react";
import ReactDOM from "react-dom";


const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  TOGGLE_MODAL:'TOGGLE_MODAL'


}

const initialState = {
  fevPhoto: [],
  isModalOpen: false,
  selectedPhoto: null,
  photoData: [],
  topicData: []
}


function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      console.log("fsftg")
      return { 
        ...state,
        isModalOpen: !state.isModalOpen
      }
    case 'SET_PHOTO_DATA':
      return {
        ...state,
        selectedPhoto: action.payload
      }
    case 'FAV_PHOTO_ADDED':
      return {
        ...state,
        fevPhoto:[...state.fevPhoto, action.payload]
      }
    case 'FAV_PHOTO_REMOVED':
      return {
        ...state,
        fevPhoto:state.fevPhoto.filter(id => id !== action.payload)
      }

      default:
        return state
    }
   
  }

 function useApplicationData() {
  const photos = new Array(3).fill({});
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);


  const setSelectedPhoto = (photo) => {
    dispatch({type:ACTIONS.SET_PHOTO_DATA, payload:photo});
   };

   const toggleModal = () => {
    dispatch({type:ACTIONS.TOGGLE_MODAL})
   }

 const handleFevPhoto = (photoId) => {
   
     if (!state.fevPhoto.includes(photoId)) {
        dispatch({type:ACTIONS.FAV_PHOTO_ADDED, payload:photoId})
     } else {
      dispatch({type:ACTIONS.FAV_PHOTO_REMOVED, payload:photoId})
   
       };
 
 };

 
 return {
   handleFevPhoto,
   setSelectedPhoto,
   toggleModal,
   photos,
   state,


 
 }


}


 





export default useApplicationData