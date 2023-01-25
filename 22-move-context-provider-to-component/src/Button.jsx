import React from "react";
import { ThemeContextConsumer } from "./themeContext";

const Button = () => (
  <ThemeContextConsumer>
    {(theme) => <button className={`${theme}-theme`}>Switch Theme</button>}
  </ThemeContextConsumer>
);

export default Button;
