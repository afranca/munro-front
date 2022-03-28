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
 const filteredItems = props.items.filter( mountain => mountain.category.toString() === filteredCategory);



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