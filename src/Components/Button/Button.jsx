import React from 'react';
import ButtonStyled from './Button.styled';

const Button = ({ text, primary, onClick }) => <ButtonStyled primary={primary} onClick={onClick}>{text}</ButtonStyled>;

export default Button;