import React from "react";

const GrandChild = (props) => {
  console.log("[ ]   [ ]   [ ]   [πΆπ»] rendered");
  return (
    <div>
      <p>I'm a GrandChild Component</p>
    </div>
  );
};

export default React.memo(GrandChild);
