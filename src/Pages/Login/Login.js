import React, { useState } from "react";
import {
  Container,
  AreaLogin,
  Logo,
  Apresentation,
  Welcome,
  EnterData,
} from "./Styles";
import LogoAbas from "../../Assets/marca-abas-positiva.svg";
import InputComp from "../../InputComp/InputComp";

const Login = () => {
  const [email, setEmail] = useState("");

  console.log(email);

  return (
    <Container>
      <AreaLogin>
        <Apresentation>
          <Logo src={LogoAbas} alt="Logo Abas Online" />
          <Welcome>Bem-vindo à Abas Online</Welcome>
          <EnterData>Insira seus dados para efetuar o login</EnterData>
        </Apresentation>
        <InputComp
          textLabel="E-mail"
          placeholder="Insira aqui seu e-mail"
          id="getEmail"
          type="email"
          setValor={setEmail}
        />
      </AreaLogin>
    </Container>
  );
};

export default Login;
