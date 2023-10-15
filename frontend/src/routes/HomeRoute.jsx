import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import photos from 'mocks/photos';



const HomeRoute = (props) => {
  // const [favouritedList, setFavouritedList] = useState([])
  return (
    <div className="home-route" >
      <TopNavigation
        favouritedList={props.favouritedList}
        setFavouritedList={props.setFavouritedList}
      />
      <PhotoList 
         favouritedList={props.favouritedList}
         setFavouritedList={props.setFavouritedList}
         setModal={props.setModal}
         photos={photos}
         //add photos as prop?
      
      />
    </div>
  );
};

export default HomeRoute;
