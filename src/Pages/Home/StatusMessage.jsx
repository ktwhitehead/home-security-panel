import React, { useContext } from 'react';
import StatusMessageStyled from './StatusMessageStyled';
import AppContext from '../../Context/AppContext';

const StatusMessage = () => {
    const { status } = useContext(AppContext);
    const FULLSTATUS = {
        'disarmed': 'Ready to Arm',
        'armed': 'Armed',
        'alert': 'Alert'
    }

    return (
        <StatusMessageStyled>{FULLSTATUS[status]}</StatusMessageStyled>
    )
};

export default StatusMessage;
