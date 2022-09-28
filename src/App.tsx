import { useContext, useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Login from "./pages/Login/Login";

import AuthenticateContext from "./store/authenticate-context";

function App() {
  const authenticateContext = useContext(AuthenticateContext);

  return (
    <div className="App">
      <Header />
      <main>
        {!authenticateContext.isLoggedIn && <Login />}
        {authenticateContext.isLoggedIn && <Main />}
      </main>
    </div>
  );
}

export default App;
