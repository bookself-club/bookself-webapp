import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

import AuthService from 'utils/AuthService';

interface Props {
  component: React.SFC<RouteComponentProps<{}>> | React.ComponentClass;
  exact?: boolean;
  path?: string;
}

const PrivateRoute: React.SFC<Props> = ({ component: Component, ...rest }) => (
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
