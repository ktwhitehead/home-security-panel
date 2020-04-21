import React from 'react';
import PadNumber from './PadNumber';
import { Row } from './PinPadStyled';

const NumberRow = ({numbers}) => {
    return (
        <Row>
            {numbers.map(number => <PadNumber number={number} />)}
        </Row>
    )
}

export default NumberRow;
