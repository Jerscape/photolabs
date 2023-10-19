import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
//import photos from 'mocks/photos';
import useApplicationData from 'hooks/useApplicationData';
import { click } from '@testing-library/user-event/dist/click';


const HomeRoute = (props) => {
  // const [favouritedList, setFavouritedList] = useState([])
  const {modal, setModal, favouritedList, setFavouritedList, photoIsFavorited, clickFavoritePhoto, toggleHandler, photos, apiTopics} = props
  //const {} = props
  // console.log("HOMEROUTE photo is favorited:", photoIsFavorited, 
  // // "set photo is favourited: ", setPhotoIsFavourited, 
  // // "favoritedList", favouritedList, "setFavouritedList: ", setFavouritedList,
  // // "modal: ", modal, "setModal: ", setModal, 
  // "toggle handler: ", toggleHandler, "clickFavoritePhoto: ", clickFavoritePhoto)
  //console.log("homeroute toggle handler:", toggleHandler)

  return (
    <div className="home-route" >
      <TopNavigation
        favouritedList={favouritedList}
        setFavouritedList={setFavouritedList}
        apiTopics={apiTopics}
      />
      <PhotoList 
         favouritedList={favouritedList}
         setFavouritedList={setFavouritedList}
         photoIsFavorited={photoIsFavorited}
        //  setPhotoIsFavourited={setPhotoIsFavourited}
         modal={modal}
         setModal={setModal}
         photos={photos}

         clickFavoritePhoto={clickFavoritePhoto}
         toggleHandler={toggleHandler}
        
      
         //add photos as prop?
      
      />
    </div>
  );
};

export default HomeRoute;
