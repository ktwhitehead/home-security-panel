import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import Loader from '../Components/Loader';

const AppLoading = ({children}) => {
    const { connected } = useContext(AppContext);

    if (connected) {
        return <>{children}</>
    } else {
        return <Loader />
    }
};

export default AppLoading;
