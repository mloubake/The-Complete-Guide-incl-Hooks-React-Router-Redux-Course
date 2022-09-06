import React, { useEffect, useState } from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

import { GoalList } from "./styles";

interface IProps {
  items: Array<{ id: string; text: string }>;
  onDeleteItem: (id: string) => void;
}

interface IItems {
  id: string;
  text: string | null;
}

const CourseGoalList: React.FC<IProps> = ({ items, onDeleteItem }) => {
  let [itemsList, setItemsList] = useState<IItems[]>(items);

  let [holdingItem, setHoldingItem] = useState<HTMLDivElement | null>(null);
  let [hoveringItem, setHoveringItem] = useState<HTMLDivElement | null>(null);

  let handleDragStart = (element: HTMLDivElement | null) => {
    if (element === null) {
      return;
    }

    setHoldingItem(element);
    element.style.opacity = "0.36";
  };

  let handleDragEnter = (element: HTMLDivElement | null) => {
    if (element === null) {
      return;
    }

    setHoveringItem(element);
  };

  let handleDragOver = (element: HTMLDivElement | null) => {
    if (element === null) {
      return;
    }

    element.style.boxShadow = "0 4px 0 rgb(255 255 255 / 50%) inset";
    (element.childNodes.item(0) as HTMLElement).style.visibility = "hidden";
    (element.childNodes.item(2) as HTMLElement).style.visibility = "hidden";
  };

  let handleDragLeave = (element: HTMLDivElement | null) => {
    if (element === null) {
      return;
    }

    element.style.boxShadow = "none";
    (element.childNodes.item(0) as HTMLElement).style.visibility = "visible";
    (element.childNodes.item(2) as HTMLElement).style.visibility = "visible";
    setHoveringItem(null);
  };

  let handleDragEnd = (element: HTMLDivElement | null) => {
    if (element === null) {
      return;
    }

    element.style.opacity = "1";

    handleSwapItemPosition();
    setHoldingItem(null);
  };

  let handleSwapItemPosition = () => {
    if (holdingItem?.id === hoveringItem?.id) {
      return;
    }

    let itemsIndex: { holdingItemIndex: number; hoverigItemIndex: number } = {
      holdingItemIndex: 0,
      hoverigItemIndex: 0,
    };

    items.forEach((item, index) => {
      if (item.id === holdingItem.id) {
        itemsIndex.holdingItemIndex = index;
        return;
      }

      if (item.id === hoveringItem.id) {
        itemsIndex.hoverigItemIndex = index;

        return;
      }
    });

    let backupItemText: string = "";

    let modifiedList = items.map((item, index) => {
      if (index === itemsIndex.hoverigItemIndex) {
        backupItemText = item.text;
        itemsList[itemsIndex.holdingItemIndex].text = backupItemText;
        item.text = holdingItem.textContent;
      }

      return item;
    });

    setItemsList(modifiedList);
  };

  useEffect(() => {
    setItemsList(items);
  }, [items]);

  return (
    <GoalList>
      {itemsList.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={onDeleteItem}
          onDragStart={handleDragStart}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDragEnd={handleDragEnd}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </GoalList>
  );
};

export default CourseGoalList;
