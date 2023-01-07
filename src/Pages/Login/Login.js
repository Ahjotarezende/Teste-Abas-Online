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
  DivEmail,
} from "./Styles";
import LogoAbas from "../../Assets/marca-abas-positiva.svg";
import InputComp from "../../Components/InputComp/InputComp";
import Button from "../../Components/Button/Button";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";

const Login = () => {
  const { handleSubmit } = useForm();

  const pwdRegex = RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!$*&@#_-])[0-9a-zA-Z!$*&@#_-]{8,}$/
  );
  const emailRegex = RegExp(
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]{2,})+(\.[a-z0-9-]+)?$/
  );

  /* eslint-disable */
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("password");
  const [textButton, setTextButton] = useState("Entrar !");
  const [approvedLogin, setApprovedLogin] = useState(false);
  const [loginFinished, setLoginFinished] = useState(true);

  const onSubmit = () => {
    setLoginFinished(false)
    setTextButton("Carregando...");
    let users = new Array();
    if (localStorage.hasOwnProperty("users"))
      users = JSON.parse(localStorage.getItem("users"));
    users.push({ email, pwd });
    localStorage.setItem("users", JSON.stringify(users));
    setTimeout(() => {
      alert(`Logado com sucesso usando o email: ${email}`);
      document.location.reload();
    }, 3000);
  };

  useEffect(() => {
    setApprovedLogin(emailRegex.test(email) && pwdRegex.test(pwd));
  }, [pwd, email]);

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
        <DivEmail>
          <InputComp
            textLabel="E-mail"
            placeholder="email@teste.com"
            id="getEmail"
            type="email"
            setValor={setEmail}
          />
          {!emailRegex.test(email) && email && (
            <ErrorMessage text="Formato de e-mail inválido" />
          )}
        </DivEmail>
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
          {!pwdRegex.test(pwd) && pwd && (
            <ErrorMessage text="Utilize caracter especial, maiúsculo e minúsculo. Mínimo de 8 caracteres" />
          )}
        </DivPwd>
        <Button
          approvedLogin={approvedLogin && loginFinished}
          text={textButton}
        />
      </AreaLogin>
    </Container>
  );
};

export default Login;
