import React, { useState } from 'react';
import AppContext from './AppContext';

const AppContextProvider = ({children}) => {
    const [status, setStatus] = useState('disarmed');
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState();
    const [connected, setConnected] = useState(false);
    const [displayPinPad, setDisplayPinPad] = useState(false);
    const [pin, setPin] = useState('');

    const context = {
        connected,
        setConnected,
        status,
        setStatus,
        alert,
        setAlert,
        alertMessage,
        setAlertMessage,
        displayPinPad,
        setDisplayPinPad,
        pin,
        setPin
    };

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export default AppContextProvider;
