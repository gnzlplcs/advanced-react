import React from "react";
import UserContext from "./userContext";
UserContext;

const Header = () => {
  return (
    <header>
      <UserContext.Consumer>
        {(user) => <p>Welcome, {user}!</p>}
      </UserContext.Consumer>
    </header>
  );
};

export default Header;
