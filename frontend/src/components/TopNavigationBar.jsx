import React from 'react';
import TopicList from './TopicList';
import FavIcon from './FavIcon';



import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
console.log(props.hasFavourites)
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
  
        <TopicList/> 
        <FavIcon  displayAlert = {props.hasFavourites} selected={true}/>

        
    </div>
  )
}

export default TopNavigation;