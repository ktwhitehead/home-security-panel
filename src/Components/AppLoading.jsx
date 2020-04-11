import React, { useContext, useEffect } from 'react';
import AppContext from '../Context/AppContext';
import SocketContext from '../Context/SocketContext';

const AppLoading = ({children}) => {
    const { sendSocket, receiveSocket } = useContext(SocketContext);
    const { connected, setConnected, setStatus, setAlert, setAlertMessage } = useContext(AppContext);

    sendSocket.onopen = () => {
        sendSocket.send("context");
    }

    receiveSocket.onmessage = event => {
        const message = JSON.parse(event.data);

        if (message.action === 'context') {
            setStatus(message.status);
            setAlert(message.alert);
            setConnected(true);
        }

        if (message.action === 'set_status') {
            setStatus(message.value);
            if (message.value === 'disarmed') setAlert(false);
            return;
        }

        if (message.action === 'alert') {
            setAlert(true);
            setAlertMessage(message.device_message);
            return;
        }

        console.warn("UNKNOWN MESSAGE", message);
    }

    if (connected) {
        return <>{children}</>
    } else {
        return <h1>Connecting to Server...</h1>
    }
};

export default AppLoading;
