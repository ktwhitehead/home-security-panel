import React from 'react';
import ButtonStyled from './Button.styled';

const Button = ({ text, primary, onClick, testId }) => <ButtonStyled data-testid={testId} primary={primary} onClick={onClick}>{text}</ButtonStyled>;

export default Button;