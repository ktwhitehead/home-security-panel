import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';

const AppLoading = ({children}) => {
    const { connected } = useContext(AppContext);

    if (connected) {
        return <>{children}</>
    } else {
        return <h1>Connecting to Server...</h1>
    }
};

export default AppLoading;
