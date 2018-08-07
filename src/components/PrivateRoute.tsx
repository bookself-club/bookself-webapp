import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

import AuthService from 'utils/AuthService';

interface IProps {
  component: React.SFC<RouteComponentProps<{}>> | React.ComponentClass;
  exact?: boolean;
  path?: string;
}

const PrivateRoute: React.SFC<IProps> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthService.isAuthenticated() ? (
        <Component {...rest} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
