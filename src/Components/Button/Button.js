import React from "react";
import { ButtonLogin } from "./Styles";

const Button = ({ text, onClick, approvedLogin }) => {
  return (
    <ButtonLogin type="submit" onClick={onClick} disabled={!approvedLogin}>
      {text}
    </ButtonLogin>
  );
};

export default Button;
