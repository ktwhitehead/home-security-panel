import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import styled from 'styled-components';
import pickBy from 'lodash/pickBy';

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

const Status = () => {
    const { sensors } = useContext(AppContext);
    const openSensors = pickBy(sensors, sensor => sensor.status === 'Open');
    const closedSensors = pickBy(sensors, sensor => sensor.status === 'Closed');

    return (
        <StatusWrapper>
            <StatusColumn>
                <Header>Open Sensors</Header>
                {Object.entries(openSensors).map(([id, sensor]) => {
                    return (
                        <Sensor key={id}>{sensor.name}</Sensor>
                    )
                })}
                <Header>Closed Sensors</Header>
                {openSensors.length === 0}
                {Object.entries(closedSensors).map(([id, sensor]) => {
                    return (
                        <Sensor key={id}>{sensor.name}</Sensor>
                    )
                })}
            </StatusColumn>
        </StatusWrapper>
    )
}

export default Status;
