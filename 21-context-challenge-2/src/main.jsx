import React from "react";
import ReactDOM from "react-dom/client";
import UserContext from "./userContext";
import App from "./App";
import "./styles.css";

/**
Challenge: Set up context to save the user's username and pass it to anywhere that is currently hardcoding "Username".

Use the static class property `contextType` on any components that need to consume context.
https://reactjs.org/docs/context.html
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContext.Provider value={"gnzlplcs"}>
    <App />
  </UserContext.Provider>
);
