import React, {useState, useCallback, useEffect} from "react";
import Mountains from "./components/Mountains/Mountains";
import Filter from "./components/Filters/Filter";

const App = () => {

  const fetchMountainHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    //console.log('Before fecth');
    try{      
      const response = await fetch('http://localhost:8080/api/mountain/list',{
        method: 'GET',        
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*"
        }        
      });
      console.log('After fecth: Respose='+response.status);
      if(!response.ok){
        throw new Error('Something went wrong: '+response.status);
      }
      const data = await response.json();
      //console.log('1st data[0]:' + data[0].category);
      const loadedMountains = [];
      for (const dataIndex in data){
        loadedMountains.push({
          id: data[dataIndex].gridReference,
          name: data[dataIndex].name,
          height: data[dataIndex].height,
          category: data[dataIndex].category
        });
      }
      //console.log('1st Mountain:' + loadedMountains[0].category);
      //console.log('Loaded Mountains:' + loadedMountains);
      setMountains(loadedMountains);
    } catch(error){
      setError(error.message);
    }
    setIsLoading(false);
  }, []);  

  useEffect(() => {
    console.log('Before User Effect');
    fetchMountainHandler();
    console.log('After User Effect');
  }, [fetchMountainHandler]);  

  const [mountains, setMountains] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let content = <p>Found no items</p>

  if (mountains.length > 0){
    content = <p><Mountains items={mountains}></Mountains></p>;
  }
  if (error){
    content = <p>{error}</p>;
  }  
  if (isLoading){
    content = <p>Loading ...</p>;
  }  

/*
// Looks like this is never used
  const addExpenseHandler = mountains =>{
    console.log('In App.js: ');
    console.log(mountains);
    setMountains((prevMountains) => {
      return [mountains, ...prevMountains];
    });
  };
*/
  return (
    <React.Fragment>     
      <Filter onApply={fetchMountainHandler}/>     
      {content}
    </React.Fragment>
  );
}

export default App;
