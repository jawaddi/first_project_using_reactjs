/*
***********************************************
jawad ait lhadj lamin 
web developer

I didn't build this project by myself but I understand every line has been written in react and javascript even I added some lines like the generation of the Id and reset input to make it empty again
and all the comments have been written by me 

this project was in a course on udemy.com 
this link https://www.udemy.com/course/react-the-complete-guide-incl-redux/
*************************************************
*/

import React, { useState } from "react";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";
// our application strat in this component
const App = () => {
  // our data is stored in courseGoals
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g-1" },
    { text: "Finish the course!", id: "g-0" },
  ]);
  // add Item to the list
  const addGoalHandler = (enteredText) => {
    // when we submit our form this function would called to take
    // the previouse Items and add to them the the new one
    setCourseGoals((prevGoals) => {
      // PrevGoals == previous Items
      // enteredText is the text that the user has entered
      // we should genrete an unique Id to the new text cuz we will rely on it when
      // we need to delete an item

      //  id  declaration
      let Id;
      // if the array preGoals is not empty we will sould Benefit from that to make the next id
      if (prevGoals.length > 0) {
        // Id is the next id
        // our id is string so we must get the first id and split it to two paarts id ="g-1" we need to elicit the 1
        Id = prevGoals[0].id;
        // split the id
        Id = Id.split("-");
        //take the second part and covert it to number
        // add 1 to the Id
        Id = +Id[1] + 1;
      } else {
        // if the preGoals is empty
        Id = 0;
      }
      // destructuring the preGoals array and assign it to updateGoals
      const updatedGoals = [...prevGoals];
      // make an object using new text and new Id to create new item
      // add the new Item in the head of the array
      updatedGoals.unshift({ text: enteredText, id: "g-" + Id });
      // return the updateGoals
      return updatedGoals;
    });
  };
  // this method will delete an Item
  const deleteItemHandler = (goalId) => {
    // goalId is the key that we make us delete the item that has been clicked by the user
    // update our Items removing the item that has been clicked
    setCourseGoals((prevGoals) => {
      // the PreGals is content al the items
      // filter method will retrun new array without the item that has his id equal the goalId
      // updatedGoals is the new array
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      // return new array
      return updatedGoals;
    });
  };

  // that what we will show in the user interface
  // content will content either our items or a message that show there're now items an the list if the coursGoals is empty
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  // is courseGoals is not empty ontent will get the goals
  if (courseGoals.length > 0) {
    content = (
      // paasing our items and deleteItemHandler to the component CourseGoalList
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    // what we shold return to user
    <div>
      {/* first section is the imput where the user will write his golas  */}
      <section id="goal-form">
        {/* call the component CourseInput and passing the addGoalHandler method  */}
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      {/* displaying either message or our goals depend on courseGoals */}
      <section id="goals">{content}</section>
    </div>
  );
};
/*
       ==>CourseGoalList==>CourseGoalItem
      |
App==>CourseInput==>Button


*/
export default App;
