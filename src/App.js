import React, {useState, useCallback, useEffect} from "react";
import Mountains from "./components/Mountains/Mountains";
import Filter from "./components/Filters/Filter";

const App = () => {

  const fetchMountainHandler = useCallback(async (parm1) => {
    console.log('parm1:'+parm1);
    setIsLoading(true);
    setError(null);
    
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
  
  const applyFilterHandler = async (aplliedFilter) =>  {
    // This should be wrapped with Try/Catch

    let fecthUrl = 'http://localhost:8080/api/mountain/list';
    let parmCount=1;
    if (aplliedFilter.name && aplliedFilter.name.length > 0){
      console.log("aplliedFilter.name.length:"+aplliedFilter.name.length);
      fecthUrl = fecthUrl+'?name='+aplliedFilter.name.trim();
      parmCount++;
    }
    if (aplliedFilter.height && aplliedFilter.height.length > 0){
      if (parmCount>1){
        fecthUrl = fecthUrl+'&height='+aplliedFilter.height.trim();
      } else{
        fecthUrl = fecthUrl+'?height='+aplliedFilter.height.trim();
      }
      parmCount++;
      
    }    
    if (aplliedFilter.category && aplliedFilter.category.length > 0 && aplliedFilter.category != 'ALL'){
      if (parmCount>1){
        fecthUrl = fecthUrl+'&category='+aplliedFilter.category.trim();
      } else {
        fecthUrl = fecthUrl+'?category='+aplliedFilter.category.trim();
      }
      parmCount++;
    }

    console.log('fecthUrl:'+fecthUrl);
    const response = await fetch(fecthUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    const loadedMountains = [];
    for (const dataIndex in data){
      loadedMountains.push({
        id: data[dataIndex].gridReference,
        name: data[dataIndex].name,
        height: data[dataIndex].height,
        category: data[dataIndex].category
      });
    }
    setMountains(loadedMountains);
  }

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

  return (
    <React.Fragment>     
      <Filter onApplyFilter={applyFilterHandler}/>     
      {content}
    </React.Fragment>
  );
}

export default App;