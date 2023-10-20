import React, { useEffect } from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import mockTopics from "mocks/topics";

const TopicList = (props) => {

  let apiTopics = props.apiTopics;

  const topics = apiTopics.map((topic) => {

    return (
      <TopicListItem
        key={topic.id}
        id={topic.id}
        slug={topic.slug}
        title={topic.title}
        clickTopicById={props.clickTopicById}
      />
    );
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};

export default TopicList;
