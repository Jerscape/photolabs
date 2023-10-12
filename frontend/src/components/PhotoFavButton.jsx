import React, { useCallback, useEffect, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
const {id, favouriteList, setFavouritedList} = props
const [photoIsFavorited, setPhotoIsFavourited] = useState(false)
const handleClick = () => {
    let newFavouriteList 
    if(favouriteList.includes(id)){
      newFavouriteList = favouriteList.filter(item => item !== id)
      
    } else {
      newFavouriteList = [...favouriteList, id]
  
    }
    setFavouritedList(newFavouriteList)
    console.log("props id: ", id)
  }

  useEffect(()=>{
    if(favouriteList.includes(id)){
      console.log("blah")
      setPhotoIsFavourited(true)
    } else {
      setPhotoIsFavourited(false)
    }
  }, [favouriteList])
  console.log("favouriteList from photofave button", favouriteList)
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