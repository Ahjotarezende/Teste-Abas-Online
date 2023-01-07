import React from "react";
import { ButtonLogin } from "./Styles";

const Button = ({ text, approvedLogin }) => {
  return (
    <ButtonLogin type="submit" disabled={!approvedLogin}>
      {text}
    </ButtonLogin>
  );
};

export default Button;
