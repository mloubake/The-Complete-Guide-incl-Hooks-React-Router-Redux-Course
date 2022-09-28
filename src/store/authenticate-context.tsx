import { createContext, useEffect, useState } from "react";

interface IProps {
  children: any;
}

type AuthenticateContextType = {
  isLoggedIn: boolean;
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
};

const AuthenticateContext = createContext<AuthenticateContextType>({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthenticateContextProvider = ({ children }: IProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthenticateContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </AuthenticateContext.Provider>
  );
};

export default AuthenticateContext;
