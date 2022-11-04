import React, { useState } from "react";
import "./NewMountain.module.css";
import classes from "./NewMountain.module.css";
import NewMountainForm from "./NewMountainForm";

const NewMountain = props =>{
    const [isEditing, setIsEditing] = useState(false);

    const saveDataHandler = (mountain) =>{
        console.log(mountain);
        props.onSaveNewMountain(mountain)
      };

      const startEditingHandler = () =>{
        setIsEditing(true);
      };
    
      const cancelHandler = () =>{
        console.log("Cancel");
        setIsEditing(false );
      }      

    return (
        <div className={classes.newMountain}>
          {!isEditing && <button onClick={startEditingHandler}>Add New Mountain</button>}
          {isEditing && <NewMountainForm onCancel={cancelHandler} onSaveMountainData={saveDataHandler} />}
        </div>
      );    

};


export default NewMountain;