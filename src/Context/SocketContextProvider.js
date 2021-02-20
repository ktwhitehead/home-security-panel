import React, {  useContext } from 'react';
import SocketContext from './SocketContext';
import useWebSocket from '../Hooks/useWebSocket';
import useWebSocketMessage from '../Hooks/useWebSocketMessage';
import AppContext from './AppContext';

const url = process.env.REACT_APP_WS_URL;

const SocketContextProvider = ({ children }) => {
    const { setConnected } = useContext(AppContext);
    const { socket, setOnMessage, setOnOpen, setOnClose } = useWebSocket(url);
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
 