import React from 'react';
import * as pages from './Pages';
import routes from './Routes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './Theme';
import AppStyled from './AppStyled';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <BrowserRouter>
            <Switch>
              {routes.map(route => {
                const { attributes, page } = route;
                const Page = pages[page];

                return (
                  <Route {...attributes} component={Page} />
                )
              })}
            </Switch>
        </BrowserRouter>
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
