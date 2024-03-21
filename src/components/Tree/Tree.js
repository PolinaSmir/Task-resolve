import React from "react";
import Parent from "./Parent/Parent";

const Tree = () => {
  return (
    <div style={{ border: "3px solid black", padding: "25px" }}>
      Tree
      <Parent />
    </div>
  );
};

export default Tree;
