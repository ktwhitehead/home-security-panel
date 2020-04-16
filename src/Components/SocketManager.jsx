import React, { useContext, useState } from 'react';
import SocketContext from '../Context/SocketContext';
import AppContext from '../Context/AppContext';
import SocketMessageHandler from './SocketMessageHandler';

const SocketManager = () => {
    const [message, setMessage] = useState();
    const { socket, setOnMessage, setOnOpen, setOnClose } = useContext(SocketContext);
    const { setConnected } = useContext(AppContext);

    setOnMessage((message) => {
        const data = JSON.parse(message.data)
        setMessage(data);
    });

    setOnOpen(() => {
        socket.send('context');
        setConnected(true);
    });

    setOnClose(() => {
        setConnected(false);
    });

    return <SocketMessageHandler message={message} />;
}

export default SocketManager;
