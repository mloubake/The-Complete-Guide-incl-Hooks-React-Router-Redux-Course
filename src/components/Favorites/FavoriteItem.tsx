import React from "react";

import Card from "../UI/Card";
import "./FavoriteItem.css";

interface IProps {
  id: string;
  title: string;
  description: string;
}

const FavoriteItem: React.FC<IProps> = ({ id, title, description }) => {
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="favorite-item" id={`${id}`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Card>
  );
};

export default FavoriteItem;
