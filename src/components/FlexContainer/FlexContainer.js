import React from "react";

const FlexContainer = (props) => {
  const { children, flexDirection, justifyContent, alignItems } = props;
  return (
    <article style={{ display: "flex", flexDirection: flexDirection, justifyContent: justifyContent, alignItems: alignItems }}>{children}</article>
  );
};

export default FlexContainer;
