import React, { useCallback, useEffect, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
const {id, favouritedList, setFavouritedList, clickFavoritePhoto, photoIsFavorited, 
  // setPhotoIsFavourited
} = props
// console.log("fav button setPhotoFavourited: ", setPhotoIsFavourited)
// console.log("PHOTO FAV BUTTON, photo is favourited", photoIsFavorited)
// const [photoIsFavorited, setPhotoIsFavourited] = useState(false)


  // useEffect(()=>{
  //   if(favouritedList.includes(id)){

  //     setPhotoIsFavourited(true)
  //   } else {
  //     setPhotoIsFavourited(false)
  //   }
  // }, [favouritedList])

  // useEffect(()=>{
  //   // console.log("AAA", photoIsFavorited)
  // }, [photoIsFavorited])
 
  // console.log("Photo is favourited", photoIsFavorited)
  return (
    <div className="photo-list__fav-icon" onClick={()=>{

      props.clickFavoritePhoto(id)

      // console.log("PHOTO CLICKED")
    }}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon
          width={22}
          height={30}
          fill={favouritedList.includes(id) ? "red" : ""}
          outlineWidth={1}
          stroke={photoIsFavorited ? "" : "red"}
        />
      </div>

    </div>
  );
}

export default PhotoFavButton;