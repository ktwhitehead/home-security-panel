import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import Speaker from '../Audio/Speaker';

const speaker = new Speaker();

const AppContextProvider = ({children}) => {
    const [status, setStatus] = useState('disarmed');
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState();
    const [connected, setConnected] = useState(false);
    const [displayPinPad, setDisplayPinPad] = useState(false);
    const [pin, setPin] = useState('');
    const [sensors, setSensors] = useState();

    useEffect(() => {
        const getAppContext = async () => {
            const request = await fetch('http://192.168.68.106:1880/context');
            const context = await request.json();
            setStatus(context.status);
            setAlert(context.alert);
            setSensors(context.sensors);
            setDisplayPinPad(false);
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
        displayPinPad,
        setDisplayPinPad,
        pin,
        setPin,
        speaker,
        sensors,
        setSensors
    };

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export default AppContextProvider;
