import React, { useEffect, useState } from "react";
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
import InputComp from "../../Components/InputComp/InputComp";
import Button from "../../Components/Button/Button";
import { useForm } from "react-hook-form";

const Login = () => {
  
  const {
    handleSubmit,
  } = useForm();

  const pwdRegex = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!$*&@#_-])[0-9a-zA-Z!$*&@#_-]{8,}$/);
  const emailRegex = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)+(\.[a-z0-9-]+)?$/);
  
  /* eslint-disable */
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("password");
  const [textButton, setTextButton] = useState("Entrar !");
  const [approvedLogin, setApprovedLogin] = useState(false)
  
  const onSubmit = (data) => {
    setTextButton("Carregando...");
    setTimeout(() => {
      alert(`Logado com sucesso usando o email: ${data.getEmail}`);
      document.location.reload();
    }, 3000);
  };

  useEffect(()=>{
    setApprovedLogin(emailRegex.test(email) && pwdRegex.test(pwd))
  }, [pwd, email])

  const viewPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  return (
    <Container>
      <AreaLogin onSubmit={handleSubmit(onSubmit)}>
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
        <Button
          approvedLogin={approvedLogin}
          onClick={() => console.log("oi")}
          text={textButton}
        />
      </AreaLogin>
    </Container>
  );
};

export default Login;
