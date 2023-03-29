import Card from "../UI/Card";

import "./ProductItem.css";
import { useStore } from "../../hooks-store/store";
import React from "react";

interface IProps {
  id: string;
  isFavorite: boolean;
  title: string;
  description: string;
}

const ProductItem: React.FC<IProps> = React.memo(
  ({ id, isFavorite, title, description }) => {
    const dispatch = useStore(false)[1];

    const toggleFavHandler = () => {
      dispatch("TOGGLE_FAVORITE", id);
    };

    return (
      <Card style={{ marginBottom: "1rem" }}>
        <div className="product-item">
          <h2 className={isFavorite ? "is-fav" : ""}>{title}</h2>
          <p>{description}</p>
          <button
            className={!isFavorite ? "button-outline" : ""}
            onClick={toggleFavHandler}
          >
            {isFavorite ? "Un-Favorite" : "Favorite"}
          </button>
        </div>
      </Card>
    );
  }
);

export default ProductItem;
