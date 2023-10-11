import React, { useCallback, useEffect, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
const {id, favouritedList, setFavouritedList} = props
const [photoIsFavorited, setPhotoIsFavourited] = useState(false)
const handleClick = () => {
    let newFavouriteList 
    if(favouritedList.includes(id)){
      newFavouriteList = favouritedList.filter(item => item !== id)
      
    } else {
      newFavouriteList = [...favouritedList, id]
  
    }
    setFavouritedList(newFavouriteList)
    console.log("props id: ", id)
  }

  useEffect(()=>{
    if(favouritedList.includes(id)){
      console.log("blah")
      setPhotoIsFavourited(true)
    } else {
      setPhotoIsFavourited(false)
    }
  }, [favouritedList])
  console.log(favouritedList)
  console.log("Photo is favourited", photoIsFavorited)
  return (
    <div className="" onClick={handleClick}>
          <FavIcon
          width={22}
          height={30}
          fill={photoIsFavorited ? "red" : ""}
          outlineWidth={1}
          stroke={photoIsFavorited ? "" : "red"}
        />
    </div>
  );
}

export default PhotoFavButton;