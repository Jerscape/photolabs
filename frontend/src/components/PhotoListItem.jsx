import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {
  // console.log("PROPS: ", props)
  const { id, favouriteList, setFavouritedList } = props;
  /* Insert React */
  // console.log("props from within photolist:", props)
  // console.log("Photoitems favourite list: ", favouriteList)
  return (
    <div className="photo-list__item"onClick={()=>{
      props.toggleHandler(id)
      console.log("photo clicked")
    }}>
    <div>
      <img className="photo-list__image" src={props.imageSource} ></img>

      <PhotoFavButton
        id={id}
        favouriteList={favouriteList}
        setFavouritedList={setFavouritedList}
      />
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
