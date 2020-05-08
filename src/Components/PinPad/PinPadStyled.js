import styled from 'styled-components';

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Close = styled.div`
    color: ${props => props.theme.colors.light.primary};
    font-size: 28px;
    font-weight: bold;
    padding: 50px;
    font-size: 4em;
    line-height: 0.4;

    &:hover {
        cursor: pointer;
    }
`;

const Rows = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Pin = styled.div`
    width: 100%;
    min-height: 5.5em;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Number = styled.div`
    padding: ${props => props.type === 'pad' ? '0.4em 1em' : '0 0.7em'};
    color: ${props => props.theme.colors.light.primary};
    font-size: 4em;
    font-weight: ${props => props.type === 'pad' ? 'bold' : 'initial'}
`;

const Message = styled.div`
    color: ${props => props.theme.colors.alert};
    align-self: flex-end;
    font-size: 2em;
`;

const Wrapper = styled.div`
    display: ${props => props.visible ? '' : 'none'};
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: ${props => props.theme.colors.dark.primary};
`;

const Row = styled.div`
    display: flex;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

export { Body, Close, Pin, Row, Rows, Number, Wrapper, Header, Message };
