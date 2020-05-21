import { useContext, useEffect } from 'react';
import AppContext from '../Context/AppContext';

const SocketMessageHandler = ({ message }) => {
    const { setStatus, setAlert, setAlertMessage, setDisplayPinPad, speaker } = useContext(AppContext);
    const messages = { 'armed': 'System armed.', 'disarmed': 'System disarmed.' };

    useEffect(() => {
        if (message === undefined) return;

        if (message.action === 'context') {
            setStatus(message.status);
            setAlert(message.alert);
            setDisplayPinPad(false);
            return;
        }

        if (message.action === 'set_status') {
            setStatus(message.value);
            if (message.value === 'disarmed') {
              setAlert(false);
              speaker.stopAlert();
            }
            setDisplayPinPad(false);
            speaker.say(messages[message.value]);
            return;
        }

        if (message.action === 'alert') {
            setAlert(true);
            speaker.alert(message.device_message);
            setAlertMessage(message.device_message);
            setDisplayPinPad(false);
            return;
        }

        console.warn("UNKNOWN MESSAGE", message);
    }, [message]);

    return null;
}

export default SocketMessageHandler;
