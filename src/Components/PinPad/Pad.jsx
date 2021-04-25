import React from 'react';
import NumberRow from './NumberRow';
import { Rows } from './PinPadStyled';

const Pad = ({ pin, setPin }) => {
  return (
    <Rows>
      <NumberRow numbers={[1,2,3]} pin={pin} setPin={setPin} />
      <NumberRow numbers={[4,5,6]} pin={pin} setPin={setPin} />
      <NumberRow numbers={[7,8,9]} pin={pin} setPin={setPin} />
      <NumberRow numbers={[0]} pin={pin} setPin={setPin} />
    </Rows>
  )
}

export default Pad;
