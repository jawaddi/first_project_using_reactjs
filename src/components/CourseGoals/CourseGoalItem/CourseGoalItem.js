import React from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  // props is represent our element
  // this function will passe the id that the user want to remove
  const deleteHandler = () => {
    // passe id from CourseGoalItem==>CourseGoalItem==>App
    props.onDelete(props.id);
    console.log(props);
  };

  return (
    // is the user click on this Item will be removed
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
