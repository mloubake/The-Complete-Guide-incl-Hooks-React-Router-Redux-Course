import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Login from "./components/Login";
import { RootState } from "./store";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authenticate.isAuthenticated
  );

  return (
    <>
      <Header />
      {!isAuthenticated && <Login />}
      {isAuthenticated && <Counter />}
    </>
  );
}

export default App;
