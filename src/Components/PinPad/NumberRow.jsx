import React from 'react';
import PadNumber from './PadNumber';
import { Row } from './PinPadStyled';

const NumberRow = ({numbers}) => {
    return (
        <Row>
            {numbers.map(number => <PadNumber key={`pad-number-${number}`} number={number} />)}
        </Row>
    )
}

export default NumberRow;
