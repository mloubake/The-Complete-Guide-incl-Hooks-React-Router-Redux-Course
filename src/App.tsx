import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Login from "./pages/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const checkIfUserIsLoggedIn = localStorage.getItem("isLoggedIn");

  const loginHandler = (email: string, passoword: string) => {
    localStorage.setItem("isLoggedIn", "1");

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");

    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (checkIfUserIsLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <Header isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogon={loginHandler} />}
        {isLoggedIn && <Main onLogout={logoutHandler} />}
      </main>
    </div>
  );
}

export default App;
