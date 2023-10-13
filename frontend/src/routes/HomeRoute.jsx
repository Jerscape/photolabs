import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = (props) => {
  return (
    <div className="home-route" >
      <TopNavigation
        favouritedList={props.favouritedList}
        setFavouritedList={props.setFavouritedList}
      />
      <PhotoList 
         favouritedList={props.favouritedList}
         setFavouritedList={props.setFavouritedList}
      
      />
    </div>
  );
};

export default HomeRoute;
