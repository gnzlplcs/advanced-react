import React from "react";
import Header from "./Header";
import UserContext from "./userContext";

/**
 * Challenge:
 *
 * 1. Convert App and Header back into functional components
 * 2. Use UserContext.Consumer to consume the username context in both places
 */

const App = () => {
  return (
    <div>
      <Header />
      <UserContext.Consumer>
        {(user) => (
          <main>
            <p className="main">No new notifications, {user}! 🎉</p>
          </main>
        )}
      </UserContext.Consumer>
    </div>
  );
};

export default App;
