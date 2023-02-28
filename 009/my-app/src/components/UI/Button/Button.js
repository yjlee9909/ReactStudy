import React from "react";

import Buttons from "./styledButton";

const Button = (props) => {
  return (
    <>
      <Buttons>{props.children}</Buttons>
    </>
  );
};

export default Button;
