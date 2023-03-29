import { initStore } from "./store";

interface ICurrentState {
  products: {
    id: string;
    isFavorite: boolean;
  }[];
}

interface IActions {
  TOGGLE_FAVORITE: (
    currentState: ICurrentState,
    productId: string
  ) => {
    products: {
      id: string;
      isFavorite: boolean;
    }[];
  };
}

const configureStore = () => {
  const actions: IActions = {
    TOGGLE_FAVORITE: (currentState: ICurrentState, productId: string) => {
      const productIndex = currentState.products.findIndex(
        (product: { id: string }) => product.id === productId
      );

      const newFavoriteStatus = !currentState.products[productIndex].isFavorite;

      const updatedProducts = [...currentState.products];

      updatedProducts[productIndex] = {
        ...currentState.products[productIndex],
        isFavorite: newFavoriteStatus,
      };

      return { products: updatedProducts };
    },
  };

  initStore(actions, {
    products: [
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
    ],
  });
};

export default configureStore;
