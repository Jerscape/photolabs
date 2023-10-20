import React from "react";

import "../styles/TopicListItem.scss";
import useApplicationData from "hooks/useApplicationData";


const TopicListItem = (props) => {

  //const {clickTopicById} = useApplicationData()
  //console.log("topic id on render: ", props.key)
  return (
    <div className="topic-list__item" key={props.id} onClick={()=>{
      props.clickTopicById(props.id)
    
    }}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default TopicListItem;
