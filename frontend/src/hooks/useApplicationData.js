import { useEffect, useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  UPDATE_MODAL: 'UPDATE MODAL',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

function useApplicationData() {

  const initialState = {
    modal: 0,
    photo: {},
    favouritedList: [],
    photoIsFavorited: false,
    photoData: [],
    topicData: []
  };


  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_REMOVED:
        return { ...state, favouritedList: state.favouritedList.filter(item => item !== action.id) };
      case ACTIONS.FAV_PHOTO_ADDED:
        return { ...state, favouritedList: [...state.favouritedList, action.id] };
      case ACTIONS.SELECT_PHOTO:
        return { ...state, modal: action.photo.id, photo: action.photo };
      case ACTIONS.UPDATE_MODAL:
        return { ...state, modal: 0 };
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };
      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topicData: action.payload };
      default:
        return state;
    }

  }

  //retreive initial photo data 
  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  const setPhotoData = (photoData) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, photoData: payload });
  };

  //retreive and set topic data from api
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  //"click topic by id" function
  const clickTopicById = (topic_id) => {

    let url = `http://localhost:8001/api/topics/photos/${topic_id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  };

  //this function selects specific photos
  const toggleHandler = (photo) => {

    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });

  };

  //this function closes the modal
  const closeHandler = () => {

    dispatch({ type: ACTIONS.UPDATE_MODAL });

  };

  //this function runs the processes for when someone clicks a favourite photo
  const clickFavoritePhoto = (id) => {
    let newFavouriteList;

    if (state.favouritedList.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, id: id });

    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, id: id });
    }
  };

  return {

    modal: state.modal,
    favouritedList: state.favouritedList,
    photoData: state.photoData,
    photo: state.photo,
    apiTopics: state.topicData,

    setPhotoData,
    closeHandler,
    toggleHandler,
    clickFavoritePhoto,
    clickTopicById

  };
}

export default useApplicationData;