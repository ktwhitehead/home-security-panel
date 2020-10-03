import React, {  useContext } from 'react';
import SocketContext from './SocketContext';
import useWebSocket from '../Hooks/useWebSocket';
import useWebSocketMessage from '../Hooks/useWebSocketMessage';
import AppContext from './AppContext';

const SocketContextProvider = ({children}) => {
    const { setConnected } = useContext(AppContext);
    // Node red requires separate socket connections
    const { socket, setOnOpen } = useWebSocket('ws://192.168.68.101:1880/send');
    const { setOnMessage, setOnClose } = useWebSocket('ws://192.168.68.101:1880/receive');
    const { message, setMessage } = useWebSocketMessage();

    setOnMessage((message) => {
      const data = JSON.parse(message.data)
      setMessage(data);
    });

    setOnOpen(() => {
        setConnected(true);
    });

    setOnClose(() => {
        setConnected(false);
    });

    const context = { socket, setOnOpen, setOnClose, setOnMessage, message, setMessage };
    return <SocketContext.Provider value={context}>{children}</SocketContext.Provider>
};

export default SocketContextProvider;
 