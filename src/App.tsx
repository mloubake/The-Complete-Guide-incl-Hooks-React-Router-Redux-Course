import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FavoritesPage from "./containers/Favorites";
import ProductsPage from "./containers/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
        children: [],
      },
      { path: "/favorites", element: <FavoritesPage /> },
    ],
  },
]);

/* <Route path="/" Component={ProductsPage} /> */
/* <Route path="/favorites" Component={FavoritesPage} /> */

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
