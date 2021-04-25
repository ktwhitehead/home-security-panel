import React, { useEffect, useState } from 'react';
import { Wrapper, Close, Body, Pin, Header, Message } from './PinPadStyled';
import PinNumber from './PinNumber';
import Pad from './Pad';

const PinPad = ({ display, setDisplay, errorMessage, setErrorMessage, onPinEntered }) => {
  const [pin, setPin] = useState('');

  useEffect(() => {
    if (pin.length === 1) setErrorMessage();
    if (pin.length >= 4) {
      onPinEntered(pin);
      setPin('');
    }
  }, [pin]);

  const closePinPad = () => {
    setDisplay(false);
    setErrorMessage();
  };

  return (
    <Wrapper visible={display} data-testid="PinPad">
      <Header>
        <Close style={{visibility: 'hidden'}}>x</Close>
        <Message data-testid="PinPadError">{errorMessage}</Message>
        <Close onClick={closePinPad} data-testid="ClosePinPad">x</Close>
      </Header>
      <Body>
        <Pin data-testid={"EnteredPinNumber"}>
          {pin.split('').map((number, i) => <PinNumber key={`pin-number-${number}-${i}`} number={number} />)}
        </Pin>
        <Pad pin={pin} setPin={setPin} />
      </Body>
    </Wrapper>
  );
};

export default PinPad;