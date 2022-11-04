import React, {useState} from 'react';
import './Filter.css';
import FilterForm from './FilterForm';

 const Filter = (props) => { 
    const [isFiltering, setIsFiltering] = useState(false);

    const expandFilterHandler = () =>{
      setIsFiltering(true);
    }

    const colapseFilterHandler = () =>{
      setIsFiltering(false);
    }


    return (
        <div className="filter">
          {!isFiltering && <button onClick={expandFilterHandler}>Change Filters</button> }
          {isFiltering && <FilterForm onApplyFilter={props.onApplyFilter} onCancel={colapseFilterHandler}/> }
          
        </div>
      );

 }
 export default Filter;
