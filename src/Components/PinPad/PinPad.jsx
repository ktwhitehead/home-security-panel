import React, { useContext, useEffect, useState } from 'react';
import { Wrapper, Close, Body, Pin, Header, Message } from './PinPadStyled';
import PinNumber from './PinNumber';
import AppContext from '../../Context/AppContext';
import SocketContext from '../../Context/SocketContext';
import Pad from './Pad';

const commId = Math.round(Date.now() * Math.random());

const PinPad = ({action}) => {
    const { displayPinPad, setDisplayPinPad, pin, setPin } = useContext(AppContext);
    const { socket, message } = useContext(SocketContext);
    // const commId = Math.round(Date.now() * Math.random());
    const [errorMessage, setErrorMessage] = useState();

    useEffect(() => {
        if (message && message.commId === commId && message.error) {
            setErrorMessage(message.error);
        }
    }, [message]);

    useEffect(() => {
        if(pin.length === 1) {
            setErrorMessage();
        }
        if(pin.length >= 4) {
            socket.sendMessage({ action, commId, pin });
            setPin('');
        }
    }, [pin]);

    return (
        <Wrapper visible={displayPinPad}>
            <Header>
                <Close style={{visibility: 'hidden'}}>x</Close>
                <Message>{errorMessage}</Message>
                <Close onClick={() => setDisplayPinPad(false)}>x</Close>
            </Header>
            <Body>
                <Pin>
                    {pin.split('').map(number => <PinNumber number={number} />)}
                </Pin>
                <Pad />
            </Body>
        </Wrapper>
    )
};

export default PinPad;