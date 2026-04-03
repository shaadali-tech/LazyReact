import React from "react";

function BuggyComponent() {
  // Force an error
  throw new Error("I crashed!");

  return <div>This will not render</div>;
}

export default BuggyComponent;
