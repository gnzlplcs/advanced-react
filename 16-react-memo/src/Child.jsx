import React from "react";
import GrandChild from "./GrandChild";

const Child = (props) => {
  console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered");
  return (
    <div>
      <p>I'm a Child Component</p>
      <GrandChild />
      <GrandChild />
    </div>
  );
};

export default React.memo(Child);
