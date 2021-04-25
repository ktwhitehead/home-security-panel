import React from 'react';
import PadNumber from './PadNumber';
import { Row } from './PinPadStyled';

const NumberRow = ({ numbers, pin, setPin}) => {
  return (
    <Row>
      {numbers.map(number =>
        <PadNumber
          key={`pad-number-${number}`}
          number={number}
          pin={pin}
          setPin={setPin}
        />
      )}
    </Row>
  )
}

export default NumberRow;
