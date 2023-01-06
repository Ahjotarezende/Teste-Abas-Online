import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: flex-end;
  width: 100%;
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const Input = styled.input`
    border-radius: 5px;
    border: 2px solid #CCC;
    height: 2rem;
    padding-left: 0.5rem;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.08);
    &:hover{
        border-color: black;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
        &::placeholder{
            color: black;
        }
    }
  &::placeholder {
    font-family: "Roboto Slab", serif;
  }
`;
