import React, { useContext } from 'react';
import Button from '../../Components/Button';
import AppContext from '../../Context/AppContext';
import PinPad from '../../Components/PinPad';

const ActionButtons = () => {
    const { status, setDisplayPinPad } = useContext(AppContext);

    if (status === 'disarmed') {
        return (
            <>
                <PinPad action={'arm'} />
                <Button text="Arm Stay" primary onClick={() => setDisplayPinPad(true)} />
            </>
        )
    }

    if (status === 'armed') {
        return (
            <>
                <PinPad action={'disarm'} />
                <Button text="Disarm" primary onClick={() => setDisplayPinPad(true)} />
            </>
        )
    }
}

export default ActionButtons;
