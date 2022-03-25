import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";


const DUMMY_EXPENSES = [
  {
    "name": "Ben Chonzie",
    "height": 931.0,
    "gridReference": "NN773308",
    "category": "TOP"
},
{
    "name": "Ben More",
    "height": 1174.0,
    "gridReference": "NN432244",
    "category": "MUN"
},
{
    "name": "Stob Binnein",
    "height": 1165.0,
    "gridReference": "NN434227",
    "category": "MUN"
},
{
    "name": "Stob Binnein - Meall na Dige",
    "height": 966.0,
    "gridReference": "NN450225",
    "category": "TOP"
},
{
    "name": "Cruach Ardrain",
    "height": 1045.9,
    "gridReference": "NN409212",
    "category": "MUN"
}
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense =>{
    console.log('In App.js: ');
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

  };

  return (
    <div>
      
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
