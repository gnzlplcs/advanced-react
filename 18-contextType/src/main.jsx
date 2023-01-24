import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const ThemeContext = React.createContext();
// ThemeContent.Provider & ThemeContecxt.Consumer

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext.Provider value={"light"}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
);
