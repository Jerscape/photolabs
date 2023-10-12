import React from "react";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" key={props.id}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default TopicListItem;
