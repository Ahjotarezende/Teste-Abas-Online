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
import InputComp from "../../Components/InputComp/InputComp";
import Button from "../../Components/Button/Button";
import { useForm } from "react-hook-form";

const Login = () => {
  /*eslint-disable */
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [type, setType] = useState("password");
  const [textButton, setTextButton] = useState("Entrar !")
  
  const onSubmit = data => {
    setTextButton("Carregando...")
    setTimeout(() => {
      alert(
        `Logado com sucesso usando o email: ${data.getEmail}`
      );
      console.log(data)
      document.location.reload();
    }, 3000);
  }

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
          register={register}
        />
        <DivPwd>
          <InputComp
            textLabel="Senha"
            placeholder="Insira aqui sua senha"
            id="getSenha"
            type={type}
            setValor={setPwd}
            register={register}
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
        <Button text={textButton}/>
      </AreaLogin>
    </Container>
  );
};

export default Login;
