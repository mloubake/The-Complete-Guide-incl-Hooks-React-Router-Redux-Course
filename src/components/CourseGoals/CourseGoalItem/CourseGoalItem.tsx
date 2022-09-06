import React, { useRef } from "react";

import { GoalItem } from "./styles";

interface IProps {
  id: string;
  onDelete: (id: string) => void;
  children: string | JSX.Element;

  onDragStart: (ref: HTMLDivElement | null) => void;
  onDragEnter: (ref: HTMLDivElement | null) => void;
  onDragOver: (ref: HTMLDivElement | null) => void;
  onDragLeave: (ref: HTMLDivElement | null) => void;
  onDragEnd: (ref: HTMLDivElement | null) => void;
}

const CourseGoalItem: React.FC<IProps> = ({
  id,
  onDelete,
  children,
  onDragStart,
  onDragEnter,
  onDragOver,
  onDragLeave,
  onDragEnd,
}) => {
  let itemRef = useRef<HTMLDivElement>(null);

  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <GoalItem
      key={id}
      id={id}
      ref={itemRef}
      onDragOver={() => {
        onDragOver(itemRef.current);
      }}
      onDragEnter={() => {
        onDragEnter(itemRef.current);
      }}
      onDragLeave={() => {
        onDragLeave(itemRef.current);
      }}
      onDragEnd={() => onDragEnd(itemRef.current)}
    >
      <span
        className="span-icon"
        id="bars"
        onDragStart={() => onDragStart(itemRef.current)}
        draggable="true"
      >
        <i className="fa-solid fa-bars"> </i>
      </span>
      {children}
      <span className="span-icon" id="close-x" onClick={deleteHandler}>
        <i className="fa-solid fa-x"></i>
      </span>
    </GoalItem>
  );
};

export default CourseGoalItem;
