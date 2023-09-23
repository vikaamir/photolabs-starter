import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = (props) => {
  const {topicData, handleFetch} = props
  console.log(topicData, " topicData")

  if (!topicData || !Array.isArray(topicData)) {
    return null; 
  }
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((item) =>{
        return <TopicListItem topic_id ={item.id} handleFetch ={handleFetch} key={item.id} topicData={item.title}  />
      }
      )}
    </div>
  );
};

export default TopicList;
