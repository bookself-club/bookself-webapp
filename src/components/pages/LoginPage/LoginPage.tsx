import React from 'react';

import AuthTemplate from 'components/templates/AuthTemplate';
import Button from 'components/atoms/Button';
import TextField from 'components/atoms/TextField';

const LoginPage: React.SFC<any> = props => (
  <AuthTemplate title="Login">
    <h1>Login Page</h1>
    <TextField
      id="email"
      name="email"
      label="E-mail"
      onChange={() => {
        // tslint:disable-next-line:no-console
        console.log('Change');
      }}
      onBlur={() => {
        // tslint:disable-next-line:no-console
        console.log('blur');
      }}
    />
    <TextField
      id="password"
      name="password"
      label="Senha"
      onChange={() => {
        // tslint:disable-next-line:no-console
        console.log('Change');
      }}
      onBlur={() => {
        // tslint:disable-next-line:no-console
        console.log('blur');
      }}
      type="password"
    />
    <Button label="Entrar" />
  </AuthTemplate>
);

export default LoginPage;
