import React from "react";
import "./MountainFilter.css";

const MountainFilter = (props) => {
    const dropdownChangeHandler = (event) =>{
        console.log(event.target.value);
        props.onFilterChange(event.target.value);
    };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Category</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="ALL">All</option>
          <option value="TOP">Top</option>
          <option value="MUN">Munroe</option>
        </select>
      </div>
    </div>
  );
};

export default MountainFilter;