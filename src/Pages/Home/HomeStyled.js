import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;

    @media (max-width: 768px) {
      font-size: small;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

export { HomeContainer, ButtonContainer };