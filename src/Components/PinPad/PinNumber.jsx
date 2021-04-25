import React from 'react';
import { Number } from './PinPadStyled';

const PinNumber = ({number}) => {
    return <Number data-testid={`PinNumber-${number}`}>{number}</Number>
}

export default PinNumber;