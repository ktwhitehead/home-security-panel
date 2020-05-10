import React, { useContext } from 'react';
import SocketContext from '../Context/SocketContext';
import AppContext from '../Context/AppContext';
import SocketMessageHandler from './SocketMessageHandler';

const SocketManager = () => {
    const { socket, setOnMessage, setOnOpen, setOnClose, message, setMessage } = useContext(SocketContext);
    const { setConnected } = useContext(AppContext);

    setOnMessage((message) => {
        const data = JSON.parse(message.data)
        setMessage(data);
    });

    setOnOpen(() => {
        socket.sendMessage({action: 'context'});
        setConnected(true);
    });

    setOnClose(() => {
        setConnected(false);
    });

    return <SocketMessageHandler message={message} />;
}

export default SocketManager;
