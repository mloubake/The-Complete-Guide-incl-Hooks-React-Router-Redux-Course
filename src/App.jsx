import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";
import Section from "./components/UI/Section/Section";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: Math.random().toString() },
    { text: "Finish the course!", id: Math.random().toString() },
    { text: "Outdoor exercise.", id: Math.random().toString() },
    { text: "Play crosswords.", id: Math.random().toString() },
    { text: "Cook!", id: Math.random().toString() },
    { text: "Clean your mess!", id: Math.random().toString() },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];

      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });

      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);

      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <Section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </Section>
      <Section id="goals">{content}</Section>
    </div>
  );
};

export default App;
