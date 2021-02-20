import React from 'react';
import StatusButtons from './StatusButtons';
import { HomeContainer, ButtonContainer } from './HomeStyled';
import StatusMessage from './StatusMessage';

const Home = () => {
    return (
        <HomeContainer>
            <ButtonContainer>
                <StatusMessage />
                <StatusButtons />
            </ButtonContainer>
        </HomeContainer>
    )
};

export default Home;
