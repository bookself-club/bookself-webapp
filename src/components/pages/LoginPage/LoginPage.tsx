import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import AuthTemplate from 'components/templates/AuthTemplate';
import LoginForm from 'components/molecules/Forms/LoginForm';

const LoginPage: React.SFC<RouteComponentProps<{}>> = props => (
  <AuthTemplate title="Login">
    <h1>Login Page</h1>
    <LoginForm />
  </AuthTemplate>
);

export default LoginPage;
