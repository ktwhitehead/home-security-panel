import React from 'react';
import * as pages from './Pages';
import routes from './Routes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './Theme';
import AppStyled from './AppStyled';
import AppContextProvider from './Context/AppContextProvider';
import SocketContextProvider from './Context/SocketContextProvider';
import Loading from './Pages/Loading';

const App = () => {
  return (
    <AppContextProvider>
      <SocketContextProvider>
        <ThemeProvider theme={theme}>
          <AppStyled>
            <BrowserRouter>
              <Loading>
              <Switch>
                {routes.map(route => {
                  const { attributes, page } = route;
                  const Page = pages[page];
                  return (
                    <Route key={`route-${attributes.page}`} {...attributes} component={Page} />
                  )
                })}
              </Switch>
              </Loading>
            </BrowserRouter>
          </AppStyled>
        </ThemeProvider>
      </SocketContextProvider>
    </AppContextProvider>
  );
}

export default App;
