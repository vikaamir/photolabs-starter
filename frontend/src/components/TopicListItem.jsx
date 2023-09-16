import React from "react";

import "../styles/TopicListItem.scss";

//component takes the proprs from TopicList.jsx and return 
const TopicListItem = (props) => {
  const {title} = props
  return (
    <div className="topic-list__item">
      <span className="topic-list__item">{title}</span>
    </div>
  );
};

export default TopicListItem;
