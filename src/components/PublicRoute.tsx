import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

import AuthService from 'utils/AuthService';

interface Props {
  component: React.SFC<RouteComponentProps<{}>> | React.ComponentClass;
  exact?: boolean;
  path?: string;
}

const PublicRoute: React.SFC<Props> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !AuthService.isAuthenticated() ? (
        <Component {...rest} {...props} />
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  />
);

export default PublicRoute;
