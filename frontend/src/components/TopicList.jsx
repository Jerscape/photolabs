import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import mockTopics from "mocks/topics";
//import PhotoListItem from "./PhotoListItem";

const TopicList = () => {
  //const topics = topics.map((topic)
  const topics = mockTopics.map((topic) =>{
    return(
      <TopicListItem
        key={topic.id}
        slug={topic.slug}
        title={topic.title}
      />
    )
  })

  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};

export default TopicList;
