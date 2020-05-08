import React from 'react';
import ActionButtons from './ActionButtons';
import { HomeContainer, ButtonContainer } from './HomeStyled';
import Status from './Status';

const Home = () => {
    return (
        <HomeContainer>
            <ButtonContainer>
                <Status />
                <ActionButtons />
            </ButtonContainer>
        </HomeContainer>
    )
};

export default Home;
