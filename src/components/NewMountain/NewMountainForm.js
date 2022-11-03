import React, {useState} from "react";
import "./NewMountainForm.module.css";


const NewMountainForm = props => {
    // useState is set to blank initially (first time)
    const [enteredName, setEnteredName] = useState('');
    const [enteredHeight, setEnteredHeight] = useState('');
    const [enteredCategory, setEnteredCategory] = useState('');

    const onCancelHandler = () =>{
        console.log("onCancelHandler");
        props.onCancel();
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        console.log("onSubmitHandler");       

        const enteredData = {
            name: enteredName,
            height: enteredHeight,
            category: enteredCategory
        }
        props.onSaveMountainData(enteredData);
        setEnteredName('');
        setEnteredHeight('');
        setEnteredCategory('');
    }    

    const nameChangeHandler = (event) =>{
        setEnteredName(event.target.value);
    }
    const heightChangeHandler = (event) =>{
        setEnteredHeight(event.target.value);
    }
    const categoryChangeHandler = (event) =>{
        setEnteredCategory(event.target.value);
    }        

    return(
        <form onSubmit={onSubmitHandler}>
            <div className="newMountain__controls">
                <div className="newMountain__control">
                    <label>Name</label>
                    <input type='text' value={enteredName} onChange={nameChangeHandler} />
                </div>
                <div className="newMountain__control">
                    <label>Category</label>
                    <input type='text' value={enteredCategory} onChange={categoryChangeHandler} />
                </div>
                <div className="newMountain__control">
                    <label>Height</label>
                    <input type='text' value={enteredHeight} onChange={heightChangeHandler} />
                </div>
            </div>
            <div className="newMountain__actions">
                <button type="button" onClick={onCancelHandler}>Cancel</button>
                <button type="submit">Submit</button>
            </div>

        </form>        
    );
};

export default NewMountainForm;