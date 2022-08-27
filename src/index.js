import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

