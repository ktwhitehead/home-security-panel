import React, { useContext } from 'react';
import StatusMessageStyled from './StatusMessageStyled';
import AppContext from '../../Context/AppContext';

export const statusMessages = {
  'disarmed': 'Ready to Arm',
  'armed_stay': 'Armed Stay',
  'armed_away': 'Armed Away',
  'alert': 'Alert'
}

const StatusMessage = () => {
  const { status } = useContext(AppContext);

  return (
    <StatusMessageStyled data-testid="HomeStatusMessage">{statusMessages[status]}</StatusMessageStyled>
  )
};

export default StatusMessage;
