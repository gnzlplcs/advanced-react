import React from "react";
import { ThemeContextConsumer } from "./themeContext";

function Button() {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <button
            className={`${context.theme}-theme`}
            onClick={context.toggleTheme}
        >
          Switch Theme
        </button>
      )}
    </ThemeContextConsumer>
  );
}

export default Button;
