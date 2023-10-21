import React, { useCallback, useEffect, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
const {id, favouritedList, setFavouritedList, clickFavoritePhoto, photoIsFavorited} = props

  return (
    <div className="photo-list__fav-icon" onClick={()=>{

      props.clickFavoritePhoto(id)

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