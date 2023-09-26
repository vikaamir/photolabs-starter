import React from 'react';
import TopicList from './TopicList';
import FavIcon from './FavIcon';



import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  console.log(props.hasFavourites)
  return (
    <div className="top-nav-bar">
      <a href='/'>
      <span className="top-nav-bar__logo">PhotoLabs </span>
      </a>

      <TopicList handleFetch={props.handleFetch} topicData={props.topicData} />
      <FavIcon handleclickFevIcon = {handleclickFevIcon} displayAlert={props.hasFavourites} selected={true} />


    </div>
  )
}

export default TopNavigation;