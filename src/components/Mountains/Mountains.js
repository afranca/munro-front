import React, { useState } from "react";
import Card from "../UI/Card";
import "./Mountains.css";
import MountainsList from "./MountainsList";
import MountainFilter from "./MountainFilter";


const Mountains = (props) => {
  const [filteredCategory, setFilteredCategory] = useState("all");
  
  const filterChangeHandler = (selectedCategory) => {
    console.log("on filter handler:" + selectedCategory);
    setFilteredCategory(selectedCategory);    
  };

  /* not being used at the moment
  const filtering = (mountain) => {
    console.log(filteredCategory);
    if (filteredCategory === 'ALL' || filteredCategory === 'all'){
      console.log("Returning ALL"); 
      return (mountain.category.toString() === 'MUN' || mountain.category.toString() === 'TOP');
    } 
    return mountain.category.toString() === filteredCategory;  

  }

  //const filteredItems = props.items.filter( mountain => mountain.category.toString() === filteredCategory);
  const filteredItems = props.items.filter( filtering);
*/


  return (
    <li>
      <Card className="expenses">
        <MountainsList items={props.items}/>
      </Card>
    </li>
  );
};

export default Mountains;