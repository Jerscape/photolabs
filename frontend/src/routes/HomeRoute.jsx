import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';



const HomeRoute = (props) => {
  const [favouritedList, setFavouritedList] = useState([])
  return (
    <div className="home-route" >
      <TopNavigation
        favouritedList={favouritedList}
        setFavouritedList={setFavouritedList}
      />
      <PhotoList 
         favouritedList={favouritedList}
         setFavouritedList={setFavouritedList}
         setModal={props.setModal}
      
      />
    </div>
  );
};

export default HomeRoute;
