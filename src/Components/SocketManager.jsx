import React, { useContext, useEffect } from 'react';
import SocketContext from '../Context/SocketContext';
import AppContext from '../Context/AppContext';
import SocketMessageHandler from './SocketMessageHandler';

const SocketManager = () => {
    let { sendSocket, receiveSocket, onClose } = useContext(SocketContext);
    const { setConnected } = useContext(AppContext);

    // sendSocket.setOnOpen = () => {
    //     console.log("OK KEATON")
    //     sendSocket.socket.send('context');
    // }

    // console.log("KEATON", sendSocket);

    // useEffect(() => {
    //     if (sendSocket.isConnected) sendSocket.socket.send('context');
    // }, [sendSocket.isConnected])

    // sendSocket.onopen = () => {
    //     sendSocket.send("context");
    // }

    onClose = () => {
        setConnected(false);
    }

    // receiveSocket.onclose = () => {
    //     setConnected(false);
    // }

    return <SocketMessageHandler />;
}

export default SocketManager;
