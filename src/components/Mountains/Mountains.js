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

  const filtering = (mountain) => {
    console.log(filteredCategory);
    if (filteredCategory === 'ALL'){
      console.log("Returning ALL"); 
      return (mountain.category.toString() === 'MUN' || mountain.category.toString() === 'TOP');
    } 
    return mountain.category.toString() === filteredCategory;  

  }

  //const filteredItems = props.items.filter( mountain => mountain.category.toString() === filteredCategory);
  const filteredItems = props.items.filter( filtering);



  return (
    <li>
      <Card className="expenses">
      <MountainFilter
          selected={filteredCategory}
          onFilterChange={filterChangeHandler}
        />
        <MountainsList items={filteredItems}/>
      </Card>
    </li>
  );
};

export default Mountains;