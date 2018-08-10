import React from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

import LoginPage from 'components/pages/LoginPage';
import HomePage from 'components/pages/HomePage';
import DashboardPage from 'components/pages/DashboardPage';

const title = 'Bookself';

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={{ mode: 'dark' }}>
        <Router>
          <div>
            <Helmet titleTemplate={`%s - ${title}`} />
            <Switch>
              <Route exact={true} path="/" component={HomePage} />
              <PublicRoute path="/login" component={LoginPage} />
              <PrivateRoute path="/dashboard" component={DashboardPage} />
              <Route render={() => <h2>No match!</h2>} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
