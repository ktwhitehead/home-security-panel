import React, { useContext, useState } from 'react';
import Button from '../../Components/Button';
import AppContext from '../../Context/AppContext';
import PinPad from '../../Components/PinPad';
import client from '../../ApiClient';

const StatusButtons = () => {
  const { status, setStatus } = useContext(AppContext);
  const [displayPinPad, setDisplayPinPad] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [nextStatus, setNextStatus] = useState();

  const onPinEntered = async pin => {
    const response = await client.setStatus(pin, nextStatus);
    if (response.error) setErrorMessage(response.error);
    if (response.status) {
      setStatus(response.status);
      setDisplayPinPad(false);
    }
  }

  const statusButtonClicked = status => {
    setNextStatus(status);
    setDisplayPinPad(true);
  }

  return (
    <>
      <PinPad
        display={displayPinPad}
        setDisplay={setDisplayPinPad}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        onPinEntered={onPinEntered}
      />
      {status === 'disarmed' && (
        <Button text="Armed Stay" primary onClick={() => statusButtonClicked('armed_stay') } />
      )}
      {(status === 'armed_stay' || status === 'armed_away') && (
        <Button text="Disarm" primary onClick={() => statusButtonClicked('disarmed') } />
      )}
    </>
  )
}

export default StatusButtons;
