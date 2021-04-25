import styled from 'styled-components/macro';

const StatusWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const StatusColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.h2`
    color: ${props => props.theme.colors.light.primary}
`;

const Sensor = styled.p`
    color: ${props => props.theme.colors.light.primary};
    margin: 0.15em;
`
export { StatusColumn, StatusWrapper, Header, Sensor };
