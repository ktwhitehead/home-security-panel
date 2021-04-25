import React from 'react'
import { ThemeProvider } from 'styled-components/macro';
import theme from '../Theme';
import AppContext from '../Context/AppContext';
import SocketContext from '../Context/SocketContext';

const withContext = (ui, appContext = {}, socketContext = {}) => {
  return (
    <AppContext.Provider value={appContext}>
      <SocketContext.Provider value={socketContext}>
        <ThemeProvider theme={theme}>
          {ui}
        </ThemeProvider>
      </SocketContext.Provider>
    </AppContext.Provider>
  );
};

export default withContext;
