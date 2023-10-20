import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  const { favouritedList } = props;

  const isFavPhotoExist = favouritedList.length !== 0;
  let fill = "";
  { favouritedList.length !== 0 ? fill = "#ff0000" : fill = ""; }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>

      <TopicList
        apiTopics={props.apiTopics}
        clickTopicById={props.clickTopicById}
      />

      <FavBadge isFavPhotoExist={isFavPhotoExist} fill={fill} />
    </div>
  );
};

export default TopNavigation;