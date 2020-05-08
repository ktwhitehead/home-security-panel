import React, { useContext } from 'react';
import StatusStyled from './StatusStyled';
import AppContext from '../../Context/AppContext';

const Status = () => {
    const { status } = useContext(AppContext);
    const FULLSTATUS = {
        'disarmed': 'Ready to Arm',
        'armed': 'Armed',
        'alert': 'Alert'
    }

    return (
        <StatusStyled>{FULLSTATUS[status]}</StatusStyled>
    )
};

export default Status;
