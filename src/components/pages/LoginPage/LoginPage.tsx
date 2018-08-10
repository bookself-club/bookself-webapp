import React from 'react';

import AuthTemplate from 'components/templates/AuthTemplate';
import LoginForm from 'components/molecules/Forms/LoginForm';

const LoginPage: React.SFC<any> = props => (
  <AuthTemplate title="Login">
    <h1>Login Page</h1>
    <LoginForm />
  </AuthTemplate>
);

export default LoginPage;
