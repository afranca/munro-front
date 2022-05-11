import React from 'react';
import './FilterForm.css';

const FilterForm = (props) => {

    return <form>
        <div className="filter-form__controls">
            <div className="filter-form__control">
                <label>Title</label>
                <input type='text' />
            </div>
            <div className="filter-form__control">
                <label>height</label>
                <input type='number' min="0.01" step="0.01" />
            </div>
            <div className="filter-form__control">
                <label>Category</label>
                <select>
                    <option value="ALL">All</option>
                    <option value="TOP">Top</option>
                    <option value="MUN">Munroe</option>
                </select>
            </div>              
        </div>
        <div className="filter-form__actions">
            <button onClick={props.onApply}>Apply</button>
        </div>
    </form>;    
}
export default FilterForm;