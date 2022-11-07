import React from "react";
import MountainItem from "./MountainItem";
import "./MountainsList.css";

const MountainsList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="mountains-list__fallback">No items found.</h2>;
  }

  return (
    <ul className="mountains-list">
      {props.items.map((expense, index) => (
        <MountainItem
          key={expense.id+index}
          title={expense.name}
          height={expense.height}
          category={expense.category}
        />
      ))}
    </ul>
  );
};

export default MountainsList;