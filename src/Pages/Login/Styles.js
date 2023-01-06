import styled from "styled-components";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const Container = styled.div`
  background-image: linear-gradient(to bottom, #200738, #411c54);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AreaLogin = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  width: 24rem;
  height: 28rem;
  gap: 2rem;
  div:nth-child(2) {
    width: 80%;
  }
`;

export const Logo = styled.img`
  width: 6rem;
  height: 3rem;
  margin-top: 1rem;
`;

export const Apresentation = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-direction: column;
  align-items: center;
  color: #45454c;
`;

export const Welcome = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
`;

export const EnterData = styled.p`
  color: #ccc;
  margin-top: 0.4rem;
`;

export const DivPwd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  gap: 1rem;
`;

export const FaEyeUI = styled(FaEye)`
    margin-top: 1rem;
    cursor: pointer;
`;

export const FaEyeSlashUI = styled(FaEyeSlash)`
    margin-top: 1rem;
    cursor: pointer;
`
