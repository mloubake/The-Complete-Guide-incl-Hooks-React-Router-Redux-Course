import { createContext, useState } from "react";

export const ProductsContext = createContext({
  products: [],
  toggleFavorite: (id) => {},
});

export default ({ children }) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (productId) => {
    setProductsList((currentProductsList) => {
      const productIndex = currentProductsList.findIndex(
        (product) => product.id === productId
      );

      const newFavoriteStatus = !currentProductsList[productIndex].isFavorite;

      const updatedProducts = [...currentProductsList];

      updatedProducts[productIndex] = {
        ...currentProductsList[productIndex],
        isFavorite: newFavoriteStatus,
      };

      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFavorite: toggleFavorite }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
