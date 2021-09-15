import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

const CourseGoalList = (props) => {
  console.log(props);
  return (
    <ul className="goal-list">
      {/* we passe element that in the array items={courseGoals} to wrap them in CourseGoalItem the componen 
      map method will passe our element one by one and retrun new array 
      that its element wrapped by CourseGoalItem
      
      */}
      {props.items.map((goal) => (
        <CourseGoalItem
          // key == id
          key={goal.id}
          id={goal.id}
          //  passe the method onDeleteItem to add it to our elements
          onDelete={props.onDeleteItem}
        >
          {/* this is the text that user has entered */}
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
