import React, { useEffect } from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

//PHOTOLIST COMPONENT
const PhotoList = (props) => {

  const photos = props.photos;
  const photoItems = photos.map((item) => {

    return (
      <li key={item.id}>
        <PhotoListItem

          id={item.id}
          favouritedList={props.favouritedList}
          setFavouritedList={props.setFavouritedList}
          photoIsFavorited={props.photoIsFavorited}

          imageSource={item.urls.regular}

          username={item.user.username}
          name={item.user.name}
          profile={item.user.profile}

          city={item.location.city}
          country={item.location.country}

          clickFavoritePhoto={props.clickFavoritePhoto}
          toggleHandler={props.toggleHandler}
          item={item}

        />
      </li>

    );
  });

  return (
    <ul className="photo-list">

      {photoItems}
    </ul>
  );
};

export default PhotoList;
