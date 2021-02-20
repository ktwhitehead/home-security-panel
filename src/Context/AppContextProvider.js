import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import Speaker from '../Audio/Speaker';
import client from '../ApiClient';

const speaker = new Speaker();

const AppContextProvider = ({children}) => {
    const [status, setStatus] = useState('disarmed');
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState();
    const [connected, setConnected] = useState(false);
    const [sensors, setSensors] = useState();

    useEffect(() => {
        const getAppContext = async () => {
            const context = await client.getContext();
            setStatus(context.status);
            setAlert(context.alert);
            setSensors(context.sensors);
        }
        getAppContext();
    }, []);

    const context = {
        connected,
        setConnected,
        status,
        setStatus,
        alert,
        setAlert,
        alertMessage,
        setAlertMessage,
        speaker,
        sensors,
        setSensors
    };

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export default AppContextProvider;
