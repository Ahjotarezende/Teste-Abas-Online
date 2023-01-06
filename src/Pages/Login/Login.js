import React, { useState } from "react";
import {
  Container,
  AreaLogin,
  Logo,
  Apresentation,
  Welcome,
  EnterData,
  DivPwd,
  FaEyeUI,
  FaEyeSlashUI,
} from "./Styles";
import LogoAbas from "../../Assets/marca-abas-positiva.svg";
import InputComp from "../../InputComp/InputComp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [type, setType] = useState("password");

  const viewPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

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
        <DivPwd>
          <InputComp
            textLabel="Senha"
            placeholder="Insira aqui sua senha"
            id="getSenha"
            type={type}
            setValor={setPwd}
          />
          {type === "password" ? (
            <FaEyeUI
              onClick={() => {
                viewPassword();
              }}
            />
          ) : (
            <FaEyeSlashUI
              onClick={() => {
                viewPassword();
              }}
            />
          )}
        </DivPwd>
      </AreaLogin>
    </Container>
  );
};

export default Login;
