import React, { useState } from 'react';

import './MountainItem.css'
import MountainCategory from './MountainCategory';
import Card from '../UI/Card';

const MountainItem = (props) => {
  //this return an Array with two item: value, function
  //array destructuring
  const [title, setTitle] = useState(props.title);
  
  return (
    <Card className='expense-item'>
      <MountainCategory category = {props.category}></MountainCategory>
      <div className='expense-item__description'>        
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.height} m</div>
      </div>      
    </Card>
  );
}

export default MountainItem;