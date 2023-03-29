import FavoriteItem from "../components/Favorites/FavoriteItem";
import { ProductsContext } from "../context/products-context";

import { useStore } from "../hooks-store/store";

import "./Products.css";

interface IProducts {
  id: string;
  title: string;
  description: string;
}

const Favorites = (props: any) => {
  const state = useStore()[0];

  const favoriteProducts = state.products.filter(
    (product: { isFavorite: boolean }) => product.isFavorite
  );

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((products: IProducts) => (
          <FavoriteItem
            key={products.id}
            id={products.id}
            title={products.title}
            description={products.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
