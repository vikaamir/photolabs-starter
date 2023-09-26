import React from 'react';
import TopicList from './TopicList';
import FavIcon from './FavIcon';



import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>

      <TopicList handleFetch={props.handleFetch} topicData={props.topicData} />
      <FavIcon displayAlert={props.hasFavourites} selected={true} />


    </div>
  )
}

export default TopNavigation;