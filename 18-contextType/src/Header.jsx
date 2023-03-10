import React, { Component } from "react";
import ThemeContext from "./themeContext";

class Header extends Component {
  static contextType = ThemeContext;
  render() {
    const theme = this.context;
    return (
      <header className={`${theme}-theme`}>
        <h2>{theme === 'light' ? 'Light' : 'Dark'} Theme</h2>
      </header>
    );
  }
}

export default Header;
