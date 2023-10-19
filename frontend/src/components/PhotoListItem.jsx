import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
//import useApplicationData from "hooks/useApplicationData";




const PhotoListItem = (props) => {
  // console.log("PROPS: ", props)
  const { id, item, favouritedList, setFavouritedList, photoIsFavorited, toggleHandler, clickFavoritePhoto} = props;
  //console.log("PHOTOLIST ITEM photo is favourited: ", photoIsFavorited)
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
        //setPhotoIsFavourited={setPhotoIsFavourited}
        clickFavoritePhoto={clickFavoritePhoto}

      />
      <img className="photo-list__image" src={props.imageSource} ></img>


    {/* console.log('toggle handler from within photo list item:', props.toggleHandler) */}
    </div>
    {/* <img className="photo-list__image" src={props.imageSource} ></img> */}
    <img className="photo-list__user-profile" src={props.profile}></img>
    <h3 className="photo-list__user-info">{props.username}</h3>
    <h3 className="photo-list__user-location">{props.city} {props.country}</h3>

  </div>

  );
};

export default PhotoListItem;
