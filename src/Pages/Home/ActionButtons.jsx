import React, { useContext } from 'react';
import Button from '../../Components/Button';
import AppContext from '../../Context/AppContext';
import SocketContext from '../../Context/SocketContext';

const ActionButtons = () => {
    const { socket } = useContext(SocketContext);
    const { status } = useContext(AppContext);

    if (status === 'disarmed') {
        return (
            <>
                <Button text="Arm Stay" primary onClick={() => socket.send("arm")} />
                <Button text="Arm Away" />
            </>
        )
    }

    if (status === 'armed') {
        return (
            <Button text="Disarm" primary onClick={() => socket.send('disarm')} />
        )
    }
}

export default ActionButtons;
