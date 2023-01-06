import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: flex-end;
  width: 80%;
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const Input = styled.input`
    border-radius: 5px;
    border: 2px solid #CCC;
    height: 2rem;
    &:hover{
        border-color: black;
        &::placeholder{
            color: black;
        }
    }
  &::placeholder {
    font-family: "Roboto Slab", serif;
    padding-left: 0.5rem;
  }
`;
