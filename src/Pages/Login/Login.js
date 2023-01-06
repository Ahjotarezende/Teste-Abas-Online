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
      </AreaLogin>
    </Container>
  );
};

export default Login;
