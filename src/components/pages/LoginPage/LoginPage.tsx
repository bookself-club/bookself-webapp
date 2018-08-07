import React from 'react';

import AuthTemplate from 'components/templates/AuthTemplate';
import Button from 'components/atoms/Button';

const LoginPage: React.SFC<any> = props => (
  <AuthTemplate title="Login">
    <h1>Login Page</h1>
    <Button label="Entrar" />
  </AuthTemplate>
);

export default LoginPage;
