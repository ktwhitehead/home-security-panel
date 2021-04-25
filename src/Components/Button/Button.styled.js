import styled from 'styled-components/macro'

const ButtonStyled = styled.button`
    background-color: ${props => props.primary ? props.theme.colors.dark.secondary : props.theme.colors.dark.tertiary };
    color: ${props => props.theme.colors.light.primary};
    padding: 10%;
    width: 10em;
    margin: 2em 0;
    border: none;
    border-radius: 5px;
    font-size: 2em;
    white-space: nowrap;

    &:hover {
        cursor: pointer;
    }
`;

export default ButtonStyled;