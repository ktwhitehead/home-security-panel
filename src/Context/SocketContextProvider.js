import React from 'react';
import SocketContext from './SocketContext';

const sendSocket = new WebSocket('ws://192.168.68.108:1880/send');
const receiveSocket = new WebSocket('ws://192.168.68.108:1880/receive');

const SocketContextProvider = ({children}) => {
    const socket = { sendSocket, receiveSocket };

    return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
};

export default SocketContextProvider;
