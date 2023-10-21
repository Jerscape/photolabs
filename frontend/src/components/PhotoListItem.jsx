import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

//PHOTO LIST ITEM COMPONENT
const PhotoListItem = (props) => {

  const { id, item, favouritedList, setFavouritedList, photoIsFavorited, toggleHandler, clickFavoritePhoto} = props;

  return (
    <div className={"photo-list__item"} onClick={()=>{
      
      props.toggleHandler(item)
     
    }}>
    <div>
    <PhotoFavButton
        id={id}
        favouritedList={favouritedList}
        setFavouritedList={setFavouritedList}
        photoIsFavorited={photoIsFavorited}
        clickFavoritePhoto={clickFavoritePhoto}

      />
      <img className="photo-list__image" src={props.imageSource} ></img>

    </div>
    <img className="photo-list__user-profile" src={props.profile}></img>
    <h3 className="photo-list__user-info">{props.username}</h3>
    <h3 className="photo-list__user-location">{props.city} {props.country}</h3>

  </div>

  );
};

export default PhotoListItem;
