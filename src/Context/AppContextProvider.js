import React, { useState, useLayoutEffect, useEffect } from 'react';
import AppContext from './AppContext';

const AppContextProvider = ({children}) => {
    const [status, setStatus] = useState('disarmed');
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState();
    const [connected, setConnected] = useState(false);

    const context = {
        connected,
        setConnected,
        status,
        setStatus,
        alert,
        setAlert,
        alertMessage,
        setAlertMessage
    };

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export default AppContextProvider;
