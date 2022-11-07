import React, { useState } from "react";
import Card from "../UI/Card";
import "./Mountains.css";
import MountainsList from "./MountainsList";
import MountainFilter from "./MountainFilter";
import Pagination from "./Pagination";


const Mountains = (props) => {
  const [filteredCategory, setFilteredCategory] = useState("all");
  
  const filterChangeHandler = (selectedCategory) => {
    console.log("on filter handler:" + selectedCategory);
    setFilteredCategory(selectedCategory);    
  };

  return (
    <li>
      <Card className="expenses">
      <Pagination 
        postsPerPage={props.postsPerPage} 
        totalPosts={props.totalPosts}
        paginate={props.paginate}
        currentPage={props.currentPage}/>
        <MountainsList items={props.items}/>
      </Card>
    </li>
  );
};

export default Mountains;