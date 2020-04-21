import React, { useContext } from 'react';
import { Number } from './PinPadStyled';
import AppContext from '../../Context/AppContext';

const PadNumber = ({number}) => {
    const { pin, setPin } = useContext(AppContext);
    let newPin = pin.toString() + number.toString();
    return <Number type={'pad'} onClick={() => setPin(newPin)}>{number}</Number>
}

export default PadNumber;