import React from 'react';
import SocketContext from './SocketContext';
import useWebSocket from '../Hooks/useWebSocket';

const SocketContextProvider = ({children}) => {
    const { socket, setOnOpen } = useWebSocket('ws://192.168.68.108:1880/send');
    const { setOnMessage } = useWebSocket('ws://192.168.68.108:1880/receive');

    const context = { socket, setOnOpen, setOnMessage };
    return <SocketContext.Provider value={context}>{children}</SocketContext.Provider>
};

export default SocketContextProvider;
 