import { useContext, useEffect } from 'react';
import AppContext from '../Context/AppContext';

const SocketMessageHandler = ({ message }) => {
    const { setStatus, setAlert, setAlertMessage, setDisplayPinPad, speaker, sensors, setSensors } = useContext(AppContext);
    const messages = { 'armed': 'System armed.', 'disarmed': 'System disarmed.' };

    useEffect(() => {
        if (message === undefined) return;
        const { action, silent, notification, device_message, value, id, sensor } = message;

        if (action === 'set_status') {
            setStatus(value);
            if (value === 'disarmed') {
              setAlert(false);
              speaker.stopAlert();
            }
            setDisplayPinPad(false);
            if (!silent) speaker.say(messages[value]);
            return;
        }

        if (action === 'alert') {
            setAlert(true);
            speaker.alert(device_message);
            setAlertMessage(device_message);
            setDisplayPinPad(false);
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

    return null;
}

export default SocketMessageHandler;
