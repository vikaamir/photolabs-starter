import React from "react";

import "../styles/TopicListItem.scss";

//component takes the proprs from TopicList.jsx and return 
const TopicListItem = (props) => {
  const topicData = props.topicData
  return (
    <div className="topic-list__item">
      <span className="topic-list__item">{topicData}</span>
    </div>
  );
};

export default TopicListItem;
