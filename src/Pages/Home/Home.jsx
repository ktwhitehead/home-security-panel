import React from 'react';
import StatusButtons from './StatusButtons';
import { HomeContainer, ButtonContainer } from './HomeStyled';
import StatusMessage from './StatusMessage';

const Home = () => {
  return (
    <HomeContainer data-testid="HomePage">
      <ButtonContainer>
        <StatusMessage />
        <StatusButtons />
      </ButtonContainer>
    </HomeContainer>
  )
};

export default Home;
