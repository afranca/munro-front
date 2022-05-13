import React, {useRef} from 'react';
import './FilterForm.css';

const FilterForm = (props) => {
    const nameRef = useRef('');
    const heightRef = useRef('');
    const categoryRef = useRef('');

    function submitHandler(event) {
        event.preventDefault();
        console.log("On Form Submit:"+event.value);
        // could add validation here...

        const appliedFilter = {
            name: nameRef.current.value,
            height: heightRef.current.value,
            category: categoryRef.current.value,
        };
        props.onApplyFilter(appliedFilter);        
    } 
    
    const dropdownChangeHandler = (event) =>{
        console.log(event.target.value);       
    };    

    return <form onSubmit={submitHandler}>
        <div className="filter-form__controls">
            <div className="filter-form__control">
                <label>Name</label>
                <input type='text' id='name' ref={nameRef}/>
            </div>
            <div className="filter-form__control">
                <label>Height</label>
                <input type='number' id='hight' ref={heightRef} min="0.01" step="0.01" />
            </div>
            <div className="filter-form__control">
                <label>Category</label>
                <select ref={categoryRef} onChange={dropdownChangeHandler}>
                    <option value="ALL">All</option>
                    <option value="TOP">Top</option>
                    <option value="MUN">Munroe</option>
                </select>
            </div>              
        </div>
        <div className="filter-form__actions">
            <button>Apply</button>
        </div>
    </form>;    
}
export default FilterForm;