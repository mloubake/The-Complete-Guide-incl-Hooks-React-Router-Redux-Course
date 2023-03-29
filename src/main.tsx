import React from "react";
import ReactDOM from "react-dom/client";

import configureProductsStore from "./hooks-store/products-store";

import App from "./App";

// import ProductsProvider from "./context/products-context";

import "./index.css";

configureProductsStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
