import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import { GoalList } from "./styles";

const CourseGoalList = (props) => {
  return (
    <GoalList>
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </GoalList>
  );
};

export default CourseGoalList;
