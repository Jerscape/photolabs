import { useEffect, useReducer } from "react";
import photos from "mocks/photos";


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
    favouritedList: [],
    photoIsFavorited: false,
    photoData: photos
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
        //modal is...0 or a photo id
        return { ...state, modal: action.id};
      case ACTIONS.UPDATE_MODAL:
        //THIS IS USED TO CLOSE THE MODAL PRIMARILY
        return {...state, modal: 0}
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        //sent photo data...photo data is the state?
      case ACTIONS.SET_PHOTO_DATA:
        return {...state, photoData: action.photoData};
      default:

        return state;
      // throw new Error(
      //   `Tried to reduce with unsupported action type: ${action.type}`
    }

  }

  //remember to wrap toggle handler in a call back like favourites so we can control the argument
  const toggleHandler = (id) => {

    dispatch({ type: ACTIONS.SELECT_PHOTO, id:id });
    // setModal(id)
    // console.log("Id toggle handler",id)
    // console.log("toggle handler triggered")

  };

  // const [modal, setModal] = useState(0);
  // const [favouritedList, setFavouritedList] = useState([])
  // const [photoIsFavorited, setPhotoIsFavourited] = useState(false);


  // helpers
  const closeHandler = () => {
    console.log("close handler triggered");
    dispatch({type: ACTIONS.UPDATE_MODAL})

  };

  const setPhotoData = (photoData) => {
    dispatch({type: ACTIONS.SET_PHOTO_DATA, photoData: photoData})
  }

  //might need to refactor this state...?
  //const [photoIsFavorited, setPhotoIsFavourited] = useState(false);
  const clickFavoritePhoto = (id) => {
    let newFavouriteList;
    console.log("ARG:", id);
    console.log("PHOTOFAV BUTTON PRESSED!");
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

console.log("UAD state.modal: ", state.modal)

  return {
    modal: state.modal,
    setModal: state.setModal,
    favouritedList: state.favouritedList,
    photoData: state.photoData,
    setPhotoData,
    //setFavouritedList: state,
    closeHandler,
    toggleHandler,
    clickFavoritePhoto,
    // photoIsFavorited,
    // setPhotoIsFavourited,

  };
}


export default useApplicationData;