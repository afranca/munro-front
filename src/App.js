import React, {useState} from "react";
import Mountains from "./components/Mountains/Mountains";
import Filter from "./components/Filters/Filter";


const DUMMY_MOUNTAINS = [
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
  const [mountains, setMountains] = useState(DUMMY_MOUNTAINS);

  const addExpenseHandler = mountains =>{
    console.log('In App.js: ');
    console.log(mountains);
    setMountains((prevMountains) => {
      return [mountains, ...prevMountains];
    });

  };

  return (
    <div>      
      <Filter/>     
      <Mountains items={mountains}></Mountains>
    </div>
  );
}

export default App;
