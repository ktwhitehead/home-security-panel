import styled from 'styled-components'

const ButtonStyled = styled.button`
    background-color: ${props => props.primary ? props.theme.colors.dark.secondary : props.theme.colors.dark.tertiary };
    color: ${props => props.theme.colors.light.primary};
    padding: 1em 5em;
    margin: 2em 0;
    border: none;
    border-radius: 5px;
    font-size: 2em;

    &:hover {
        cursor: pointer;
    }
`;

export default ButtonStyled;