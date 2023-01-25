import React from "react";
import ThemeContext from "./themeContext";
import Header from "./Header";
import Button from "./Button";

function App() {
  return (
    <div>
      <Header />
      <ThemeContext.Consumer>
        {(theme) => <Button theme={theme} />}
      </ThemeContext.Consumer>
      <Button />
    </div>
  );
}

export default App;
