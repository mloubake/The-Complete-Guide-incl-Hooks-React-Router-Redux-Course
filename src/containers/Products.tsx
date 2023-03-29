import { useContext } from "react";
import { useSelector } from "react-redux";

import { useStore } from "../hooks-store/store";

import ProductItem from "../components/Products/ProductItem";

import { ProductsContext } from "../context/products-context";

import "./Products.css";

interface IProduct {
  id: string;
  title: string;
  description: string;
  isFavorite: boolean;
}

const Products = (props: any) => {
  const state = useStore()[0];

  console.log(state);

  return (
    <ul className="products-list">
      {state.products.map((product: IProduct) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          isFavorite={product.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
