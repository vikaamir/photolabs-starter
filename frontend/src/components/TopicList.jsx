import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = (props) => {
  const {topicData} = props
  console.log(topicData, " topicData")
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((item) =>{
        return <TopicListItem key={item.id} topicData={item.title}  />
      }
      )}
    </div>
  );
};

export default TopicList;
