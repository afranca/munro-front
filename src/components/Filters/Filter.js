import React from 'react';
import './Filter.css';
import FilterForm from './FilterForm';

 const Filter = (props) => { 
    return (
        <div className="filter">
          <FilterForm onApplyFilter={props.onApplyFilter} />
        </div>
      );

 }
 export default Filter;
