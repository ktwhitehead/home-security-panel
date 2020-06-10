import React, { useEffect } from 'react';
import ActionButtons from './ActionButtons';
import { HomeContainer, ButtonContainer } from './HomeStyled';
import StatusMessage from './StatusMessage';

const Home = () => {
    return (
        <HomeContainer>
            <ButtonContainer>
                <StatusMessage />
                <ActionButtons />
            </ButtonContainer>
        </HomeContainer>
    )
};

export default Home;
