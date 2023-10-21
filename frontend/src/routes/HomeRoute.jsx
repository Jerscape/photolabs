import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import { click } from '@testing-library/user-event/dist/click';

const HomeRoute = (props) => {

  const { modal, setModal, favouritedList, setFavouritedList, photoIsFavorited, clickFavoritePhoto, toggleHandler, photos, apiTopics, clickTopicById } = props;

  return (
    <div className="home-route" >
      <TopNavigation
        favouritedList={favouritedList}
        setFavouritedList={setFavouritedList}
        apiTopics={apiTopics}
        clickTopicById={clickTopicById}
      />
      <PhotoList
        favouritedList={favouritedList}
        setFavouritedList={setFavouritedList}
        photoIsFavorited={photoIsFavorited}
        modal={modal}
        setModal={setModal}
        photos={photos}

        clickFavoritePhoto={clickFavoritePhoto}
        toggleHandler={toggleHandler}
        clickTopicById={clickTopicById}

      />
    </div>
  );
};

export default HomeRoute;
