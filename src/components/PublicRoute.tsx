import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

import AuthService from 'utils/AuthService';

interface IProps {
  component: React.SFC<RouteComponentProps<{}>> | React.ComponentClass;
  exact?: boolean;
  path?: string;
}

const PublicRoute: React.SFC<IProps> = ({ component: Component, ...rest }) => (
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
