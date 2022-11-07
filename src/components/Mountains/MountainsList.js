import React from "react";
import MountainItem from "./MountainItem";
import "./MountainsList.css";

const MountainsList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="mountains-list__fallback">No items found.</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {props.items.map((item, index) => (
        <li key={item.id+index} className='list-group-item'>
        <MountainItem
          key={item.id+index}
          title={item.name}
          height={item.height}
          category={item.category}
        />
        </li>
      ))}
    </ul>
  );
};

export default MountainsList;