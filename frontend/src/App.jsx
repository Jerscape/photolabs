//IMPORT STATEMENTS

import React, {useState} from 'react';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';


//APP COMPONENT
const App = () => {
  
  //DESTRUCTURING PROPS
  const {state, modal, photo, apiTopics, setModal, favouritedList, setFavouritedList, photoIsFavorited, closeHandler, clickFavoritePhoto, toggleHandler, photoData, clickTopicById} = useApplicationData()

    return(
    <>
      <HomeRoute
        modal={modal}
        setModal={setModal}
        favouritedList={favouritedList}
        setFavouritedList={setFavouritedList}
        photoIsFavorited={photoIsFavorited}
        clickFavoritePhoto={clickFavoritePhoto}
        toggleHandler={toggleHandler}
        closeHandler={closeHandler}
        photos={photoData}
        apiTopics={apiTopics}
        clickTopicById={clickTopicById}
      />

      {/* modal visibility depedent on modal state being 0 (hidden), or greater than 0 (visible) */}
      {modal && <PhotoDetailsModal 
       
         photos={photoData}
         modal={modal}
         photo={photo} 
         setModal={setModal}
         favouritedList={favouritedList}
         setFavouritedList={setFavouritedList}
         photoIsFavorited={photoIsFavorited}

         clickFavoritePhoto={clickFavoritePhoto}
         toggleHandler={toggleHandler}
         closeHandler={closeHandler}
      />}

    </>
    )
 




};

export default App;
