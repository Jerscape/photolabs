import React, {useState} from 'react';

//

import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';

//import photos from 'mocks/photos';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {
  //any number besides 0 ie an id number will make modal === true
  const {modal, photo, setModal, favouritedList, setFavouritedList, photoIsFavorited, closeHandler, clickFavoritePhoto, toggleHandler, photoData} = useApplicationData()
// console.log("APP, photo is favourited", photoIsFavorited)
    console.log("modal from app:", modal)
    //console.log("APP PHOTOS: ", photoData)
    return(
    <>
      <HomeRoute
        modal={modal}
        setModal={setModal}
        favouritedList={favouritedList}
        setFavouritedList={setFavouritedList}
        photoIsFavorited={photoIsFavorited}
        // setPhotoIsFavourited={setPhotoIsFavourited}
        clickFavoritePhoto={clickFavoritePhoto}
        toggleHandler={toggleHandler}
        closeHandler={closeHandler}
        photos={photoData}
      />
      {modal && <PhotoDetailsModal 
        //how to access favourites list
         photos={photoData}
         //the value of model should be the photo id
         modal={modal}
         photo={photo} //whole photo object
         setModal={setModal}
         favouritedList={favouritedList}
         setFavouritedList={setFavouritedList}
         photoIsFavorited={photoIsFavorited}
        //  setPhotoIsFavourited={setPhotoIsFavourited}
        //  photoIsFavourited={photoIsFavourited}
        //  setPhotoIsFavourited={setPhotoIsFavourited}
         clickFavoritePhoto={clickFavoritePhoto}
         toggleHandler={toggleHandler}
         closeHandler={closeHandler}
      />}

    </>
    )
 




};

export default App;

  // const photoItems = photos.map((photo)=> {
  //   return(
  //     //would I just return photoitem 

  //     <PhotoList
  //     //when I try and remove this is errors
  //     key={photo.id}
  //     id={photo.id}
  //     favouritedList={favouritedList}
  //     setFavouritedList={setFavouritedList}
  //     ></PhotoList>

      // <PhotoListItem 
      // //when I try and delete key I get a massive error 
      // key={photo.id}
      // id={photo.id}
      // // imageSource={photo.imageSource}
      // // profile={photo.profile}
      // // username={photo.username}
      // // city={photo.location['city']}
      // // country={photo.location['country']}
      // photoList={sampleDataForPhotoList}
      // favouritedList={favouritedList}
      // setFavouritedList={setFavouritedList}
      
      // />
  //   )
  // }) 

  // return(
  //   <div className='App'>
  //     {photoItems}
  //   </div>
  // )

  // return (
  //   <div className="App">

  //     <PhotoListItem 
  //     photoID={sampleDataForPhotoListItem.id}
  //     imageSource={sampleDataForPhotoListItem.imageSource}
  //     profile={sampleDataForPhotoListItem.profile}
  //     username={sampleDataForPhotoListItem.username}
  //     city={sampleDataForPhotoListItem.location['city']}
  //     country={sampleDataForPhotoListItem.location['country']}
      
  //     />
  //   </div>
  // );
