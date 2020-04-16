import React, {useEffect, useState} from 'react';
import SocketContext from './SocketContext';
import useWebSocket from '../Hooks/useWebSocket';

// const sendSocket = new WebSocket('ws://192.168.68.108:1880/send');
// const receiveSocket = new WebSocket('ws://192.168.68.108:1880/receive');

const SocketContextProvider = ({children}) => {
    let {
        socket: sendSocket,
        setOnClose: onClose,
        reconnect: sendSocketConnect,
        setOnOpen 
    } = useWebSocket('ws://192.168.68.108:1880/send');

    let {
        socket: receiveSocket,
        setOnMessage,
        reconnect: receiveSocketConnect
    } = useWebSocket('ws://192.168.68.108:1880/receive');

    const [message, setMessage] = useState();

    setOnMessage((message) => {
        const data = JSON.parse(message.data)
        setMessage(data);
    })

    setOnOpen(() => {
        sendSocket.send('context');
    });

    const context = { sendSocket, receiveSocket, onClose, message };
    return <SocketContext.Provider value={context}>{children}</SocketContext.Provider>
};

export default SocketContextProvider;
