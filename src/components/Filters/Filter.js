import React from 'react';
import './Filter.css';
import FilterForm from './FilterForm';

 const Filter = (props) => {

 
    return (
        <div className="filter">
          <FilterForm onApply={props.onApply} />
        </div>
      );

 }
 export default Filter;
