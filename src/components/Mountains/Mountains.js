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

  return (
    <li>
      <Card className="expenses">
        <MountainsList items={props.items}/>
      </Card>
    </li>
  );
};

export default Mountains;