import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
//import photos from "mocks/photos";

//console.log("id? ", photos[1].id)

const PhotoList = (props) => {

  const toggleHandler = (id) => {

  props.setModal(id)
  console.log("toggle handler triggered")

}
  const photos = props.photos

  const photoItems = photos.map((item) =>{

    const [urls, user] = photos
   
    console.log("PHOTOLIST PROPS:", props)
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
     
      imageSource={item.urls.regular}

      username={item.user.username}
      name={item.user.name}
      profile={item.user.profile}

      city={item.location.city}
      country={item.location.country}

      toggleHandler={toggleHandler}

      
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
