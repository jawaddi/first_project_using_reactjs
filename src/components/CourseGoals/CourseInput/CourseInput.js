import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// this is the CourseInput,it will take care of the  responsiblity for our input and button and submition
const CourseInput = (props) => {
  // Props is hollding this onAddGoal={addGoalHandler}
  // this our state will take care of changing in our input
  const [enteredValue, setEnteredValue] = useState("");
  // we want to controll what is the user has entered
  const [isValid, setIsValid] = useState(true);
  // get the value from the user and assign it to enteredValue
  const goalInputChangeHandler = (event) => {
    // if the user has not entred the empty string
    if (event.target.value.trim().length > 0) {
      setIsValid(true); //isValid = true
    }

    setEnteredValue(event.target.value); // enteredValue = event.target.value
  };

  // this function is take care of  form submition and passing the text to the app Component
  const formSubmitHandler = (event) => {
    // we dont want to refresh the page
    event.preventDefault();
    // enteredValue is empty space we will not accept it and we should warning him/her
    if (enteredValue.trim().length === 0) {
      setIsValid(false); //isValid=false
      return;
    }
    // this we happen if enteredValue is not an empty space
    // if enteredValue is not an empty space we will add our goal
    props.onAddGoal(enteredValue);
    event.target.reset();
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        // if the user has entered an empty space the input will be colored by red as warning to rewrite his goals and by adding class called invalid to the css
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      {/* submition button  */}
      {/* if we move this button out of our form will not be clickeble anymore */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
