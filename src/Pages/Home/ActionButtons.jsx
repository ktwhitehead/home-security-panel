import React, { useContext } from 'react';
import Button from '../../Components/Button';
import AppContext from '../../Context/AppContext';
import SocketContext from '../../Context/SocketContext';

const ActionButtons = () => {
    const { sendSocket } = useContext(SocketContext);
    const { status } = useContext(AppContext);

    if (status === 'disarmed') {
        return (
            <>
                <Button text="Arm Stay" primary onClick={() => sendSocket.send("arm")} />
                <Button text="Arm Away" />
            </>
        )
    }

    if (status === 'armed') {
        return (
            <Button text="Disarm" primary onClick={() => sendSocket.send('disarm')} />
        )
    }
}

export default ActionButtons;
