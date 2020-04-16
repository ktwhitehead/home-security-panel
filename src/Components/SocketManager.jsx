import React, { useContext } from 'react';
import SocketContext from '../Context/SocketContext';
import AppContext from '../Context/AppContext';
import SocketMessageHandler from './SocketMessageHandler';

const SocketManager = () => {
    const { sendSocket, receiveSocket } = useContext(SocketContext);
    const { setConnected } = useContext(AppContext);

    sendSocket.onopen = () => {
        sendSocket.send("context");
    }

    sendSocket.onoclose = () => {
        setConnected(false);
    }

    receiveSocket.onclose = () => {
        setConnected(false);
    }

    return <SocketMessageHandler />;
}

export default SocketManager;
