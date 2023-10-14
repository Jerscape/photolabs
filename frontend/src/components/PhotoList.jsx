import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

console.log("id? ", photos[1].id)

const PhotoList = (props) => {

  const toggleHandler = (id) => {

  props.setModal(id)
  console.log("toggle handler triggered")

}

  const photoItems = photos.map((item) =>{

    const [urls, user] = photos
    // console.log("PHOTOLIST PROPS:", props)
    return(
      <li key={item.id}>
      <PhotoListItem
      
      key={item.id}
      id={item.id}
      favouriteList={props.favouritedList}
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
