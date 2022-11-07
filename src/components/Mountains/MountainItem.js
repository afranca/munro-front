import React, { useState } from 'react';

import './MountainItem.css'
import MountainCategory from './MountainCategory';
import Card from '../UI/Card';

const MountainItem = (props) => {
  //this return an Array with two item: value, function
  //array destructuring
  const [title, setTitle] = useState(props.title);
  
  return (
    <Card className='mountain-item'>
      <div className='mountain-item__description'>        
        <MountainCategory category = {props.category}></MountainCategory>
        <h2>{title}</h2>
        <div className='mountain-item__height'>{props.height} m</div>
      </div>      
    </Card>
  );
}

export default MountainItem;