import React from "react";

const InputComp = ({ textLabel, placeholder, type, setValor, id }) => {
  return (
    <>
      <label htmlFor={id}>{textLabel}</label>
      <input id={id} placeholder={placeholder} type={type} onChange={(e)=> setValor(e.target.value)}/>
    </>
  );
};

export default InputComp;
