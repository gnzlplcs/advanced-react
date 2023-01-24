import React from "react";
import ReactDOM from "react-dom/client";
import ThemeContext from "./themeContext";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext.Provider value={"dark"}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
);
