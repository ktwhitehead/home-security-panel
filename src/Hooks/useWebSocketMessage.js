import { useContext, useEffect, useState } from 'react';
import AppContext from '../Context/AppContext';

const useWebSocketMessageHandler = () => {
    const { setStatus, setAlert, setAlertMessage, speaker, sensors, setSensors } = useContext(AppContext);
    const [message, setMessage] = useState();
    const messages = { 'armed_stay': 'System armed.', 'armed_away': 'System armed.', 'disarmed': 'System disarmed.' };

    useEffect(() => {
        if (message === undefined) return;
        const { action, silent, notification, device_message, value, id, sensor } = message;

        if (action === 'set_status') {
            setStatus(value);
            if (value === 'disarmed') {
              setAlert(false);
              speaker.stopAlert();
            }
            if (!silent) speaker.say(messages[value]);
            return;
        }

        if (action === 'alert') {
            setAlert(true);
            speaker.alert(device_message);
            setAlertMessage(device_message);
            return;
        }

        if (action === 'notify') {
            speaker.say(notification);
            return;
        }

        if (action === 'sensor_status') {
            sensors[id] = sensor;
            setSensors({...sensors});
            return;
        }

        console.warn("UNKNOWN MESSAGE", action);
    }, [message]);

    return { message, setMessage };
}

export default useWebSocketMessageHandler;
