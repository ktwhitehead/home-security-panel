import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';

const AppLoading = ({children}) => {
    const { connected } = useContext(AppContext);

    if (connected) {
        return <>{children}</>
    } else {
        return <div>Connecting to Server...</div>
    }
};

export default AppLoading;
