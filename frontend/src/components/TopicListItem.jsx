import React from "react";

import "../styles/TopicListItem.scss";

//component takes the proprs from TopicList.jsx and return 
const TopicListItem = (props) => {
  const {topicData ,handleFetch, topic_id} = props


  return (
    <div className="topic-list__item" onClick={()=> handleFetch(topic_id)}>
      <span className="topic-list__item">{topicData}</span>
    </div>
  );
};

export default TopicListItem;
