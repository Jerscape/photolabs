import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import useApplicationData from "hooks/useApplicationData";
//import photos from "mocks/photos";

//console.log("id? ", photos[1].id)

const PhotoList = (props) => {
  // console.log('PHOTOLIST photoisfavourited:', props.photoIsFavorited)
  //const {modal, setModal, toggleHandler} = useApplicationData()

//   const toggleHandler = (id) => {

//   setModal(id)
//   console.log("Id toggle handler",id)
//   console.log("toggle handler triggered")

// }
  //console.log("PHOTO LIST toggle handler: ", props.toggleHandler)

  const photos = props.photos

  const photoItems = photos.map((item) =>{

    const [urls, user] = photos
   
    // console.log("PHOTOLIST PROPS:", props)
    return(
      <li key={item.id}>
      <PhotoListItem
      
      key={item.id}
      //I think this is breaking it because when I click on a photo
      //it is set up to save state (but in photolist it sets id via interatino
      //through the array)
      id={item.id}
      favouritedList={props.favouritedList}
      setFavouritedList={props.setFavouritedList}
      photoIsFavorited={props.photoIsFavorited}
      // setPhotoIsFavourited={props.setPhotoIsFavourited}
     
      imageSource={item.urls.regular}

      username={item.user.username}
      name={item.user.name}
      profile={item.user.profile}

      city={item.location.city}
      country={item.location.country}
      
      clickFavoritePhoto={props.clickFavoritePhoto}
      toggleHandler={props.toggleHandler}

      
      />
      </li>


    )
  })

  return (
    <ul className="photo-list">

    {photoItems}
    </ul>
  );
};

export default PhotoList;
