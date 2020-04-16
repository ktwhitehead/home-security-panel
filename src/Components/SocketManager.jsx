import React, { useContext, useState } from 'react';
import SocketContext from '../Context/SocketContext';
import SocketMessageHandler from './SocketMessageHandler';

const SocketManager = () => {
    const [message, setMessage] = useState();
    const { socket, setOnMessage, setOnOpen } = useContext(SocketContext);

    setOnOpen(() => {
        socket.send('context');
    });

    setOnMessage((message) => {
        const data = JSON.parse(message.data)
        setMessage(data);
    });

    return <SocketMessageHandler message={message} />;
}

export default SocketManager;
