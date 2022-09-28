import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthenticateContextProvider } from "./store/authenticate-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthenticateContextProvider>
      <App />
    </AuthenticateContextProvider>
  </React.StrictMode>
);
