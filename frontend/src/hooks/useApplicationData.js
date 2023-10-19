import { useEffect, useReducer } from "react";
import photos from "mocks/photos";
//import apiTopics from "mocks/topics"


export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  //ASK MENTOR ABOUT THIS ONE
  UPDATE_MODAL: 'UPDATE MODAL',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

function useApplicationData() {


  //JN: I think you reference/call dispatch in the components
  //dispatch = reducer function?
  const initialState = {
    modal: 0,
    photo: {},
    favouritedList: [],
    photoIsFavorited: false,
    photoData: [], //was originally from above photos. Compass exercise said to set it blank array []
    topicData: []
  };


  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_REMOVED:
        //..state is copying/retrieving the object, and favourited list is the key (to the right of the ":"" it is setting/updating the value)
        return { ...state, favouritedList: state.favouritedList.filter(item => item !== action.id) };
      case ACTIONS.FAV_PHOTO_ADDED:
        return { ...state, favouritedList: [...state.favouritedList, action.id] };
      //is the state the selected photo or...the state of it being selected or not? 
      case ACTIONS.SELECT_PHOTO:
        //modal is...0 or a photo id//modal is set here...action id must be wrong...
        return { ...state, modal: action.photo.id, photo: action.photo };
      case ACTIONS.UPDATE_MODAL:
        //THIS IS USED TO CLOSE THE MODAL PRIMARILY
        return { ...state, modal: 0 };
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
      //sent photo data...photo data is the state?
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };
      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topicData: action.payload };
      // return {...state, photoData: action.photoData};
      default:

        return state;
      // throw new Error(
      //   `Tried to reduce with unsupported action type: ${action.type}`
    }

  }


  //retreive photo data 

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  const setPhotoData = (photoData) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, photoData: photoData });
  };

  //retreive and set topic data from api
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  //SET TOPIC DATA BY ID
    
  //retreive and set topic data from api
  // let topic_id = 1
  // let pass = 'http://localhost:8001/api/topics/photos/' + topic_id
  // useEffect(() => {
  //   fetch(pass)
  //   //fetch('http://localhost:8001/api/topics/photos/1')
  //   //console.log(res)
  //     .then((res) => {console.log(res.body)})
  // }, []);

  //SET TOPIC DATA BY ID
  // useEffect(()=>{
  //   fetch()
  // })



  // const setPhotoData = (photoData) => {
  //   dispatch({ type: ACTIONS.SET_PHOTO_DATA, photoData: photoData });
  // };

  //remember to wrap toggle handler in a call back like favourites so we can control the argument
  const toggleHandler = (photo) => {

    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
    // setModal(id)
    // console.log("Id toggle handler",id)
    // console.log("toggle handler triggered")

  };

  // const [modal, setModal] = useState(0);
  // const [favouritedList, setFavouritedList] = useState([])
  // const [photoIsFavorited, setPhotoIsFavourited] = useState(false);


  // helpers
  const closeHandler = () => {

    dispatch({ type: ACTIONS.UPDATE_MODAL });

  };



  //might need to refactor this state...?
  //const [photoIsFavorited, setPhotoIsFavourited] = useState(false);
  const clickFavoritePhoto = (id) => {
    let newFavouriteList;

    if (state.favouritedList.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, id: id });
      // newFavouriteList = favouritedList.filter(item => item !== id)

    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, id: id });
      // newFavouriteList = [...favouritedList, id]

    }
    // setFavouritedList(newFavouriteList)
    // console.log("props id: ", id)
    // console.log("modal state", props.modal)
  };



  return {
    modal: state.modal,
    setModal: state.setModal,//wait, there is no set modal state in the state object....whaaat....
    favouritedList: state.favouritedList,
    photoData: state.photoData,
    setPhotoData,
    photo: state.photo,
    //setFavouritedList: state,
    closeHandler,
    toggleHandler,
    clickFavoritePhoto,
    apiTopics: state.topicData
    // photoIsFavorited,
    // setPhotoIsFavourited,

  };
}


export default useApplicationData;