import React from "react";

const GrandChild = (props) => {
  console.log("[ ]   [ ]   [ ]   [👶🏻] rendered");
  return (
    <div>
      <p>I'm a GrandChild Component</p>
    </div>
  );
};

export default React.memo(GrandChild);
