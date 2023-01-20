import React from "react";
import Example from "./Example";

function App() {
  return (
    <div>
      <Example render={(word) => {
        return word
      }} />
    </div>
  );
}

export default App;
