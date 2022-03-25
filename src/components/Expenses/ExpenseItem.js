import React, { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  //this return an Array with two item: value, function
  //array destructuring
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () =>{
    setTitle('Title Updated');
    console.log(title);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.category}></ExpenseDate>
      <div className='expense-item__description'>        
        <h2>{title}</h2>
        <div className='expense-item__price'>£{props.height}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
