import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, fill }) => {


  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} fill={fill} />
    </div>
  );
};

export default FavBadge;