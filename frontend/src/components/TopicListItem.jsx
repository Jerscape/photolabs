import React from "react";

import "../styles/TopicListItem.scss";
import useApplicationData from "hooks/useApplicationData";

//TOPIC LIST ITEM COMPONENT
const TopicListItem = (props) => {

  return (
    <div className="topic-list__item" key={props.id} onClick={()=>{
      props.clickTopicById(props.id)
    
    }}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default TopicListItem;
