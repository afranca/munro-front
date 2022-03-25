import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";


const Expenses = (props) => {
  //const [filteredYear, setFilteredYear] = useState("2020");
  
  const filterChangeHandler = (selectedYear) => {
    console.log("on filter handler:" + selectedYear);
  //  setFilteredYear(selectedYear);    
  };
 // const filteredItems = props.items.filter( expense => expense.date.getFullYear().toString() === filteredYear);



  return (
    <li>
      <Card className="expenses">

        <ExpensesList items={props.items}/>
      </Card>
    </li>
  );
};

export default Expenses;
