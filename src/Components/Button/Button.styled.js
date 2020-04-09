import styled from 'styled-components'

const ButtonStyled = styled.button`
    background-color: ${props => props.primary ? props.theme.colors.dark.primary : props.theme.colors.dark.tertiary };
`;

export default ButtonStyled;