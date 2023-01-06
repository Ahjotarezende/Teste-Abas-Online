import styled from 'styled-components';

export const Container = styled.div`
    background-image: linear-gradient(to bottom, #30103B, #411C54);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AreaLogin = styled.form`
    display: flex;
    justify-content: center;
    background-color: #FFF;
    border-radius: 10px;
    width: 24rem;
    height: 28rem;
`;

export const Logo = styled.img`
    width: 6rem;
    height: 3rem;
`;

export const Apresentation = styled.div`
    display: flex;
    gap: 0.3rem;
    flex-direction: column;
    align-items: center;
    color: #45454C;
`

export const Welcome = styled.p`
    font-weight: 700;
    font-size: 1.2rem;
`

export const EnterData = styled.p`
    color: #ccc;
    margin-top: 0.4rem;
`