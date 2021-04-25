import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import pickBy from 'lodash/pickBy';
import { StatusColumn, StatusWrapper, Header, Sensor } from './Status.styled';

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
