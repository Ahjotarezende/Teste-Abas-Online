import React from "react";
import { Container, Label, Input } from "./Styles";

const InputComp = ({ textLabel, placeholder, type, setValor, id }) => {
  return (
    <Container>
      <Label htmlFor={id}>{textLabel}</Label>
      <Input id={id} placeholder={placeholder} type={type} onChange={(e)=> setValor(e.target.value)}/>
    </Container>
  );
};

export default InputComp;
