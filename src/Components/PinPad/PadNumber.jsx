import React from 'react';
import { Number } from './PinPadStyled';

const PadNumber = ({ number, pin, setPin }) => {
    let newPin = pin.toString() + number.toString();
    return <Number type={'pad'} onClick={() => setPin(newPin)}>{number}</Number>
}

export default PadNumber;