import React from 'react';
import styled from 'styled-components';

import AuthTemplate from 'components/templates/AuthTemplate';
import Button from 'components/atoms/Button';
import Card from 'components/atoms/Card';
import TextField from 'components/atoms/TextField';

const LoginPage: React.SFC<any> = props => (
  <AuthTemplate title="Login">
    <Wrapper>
      <Card width="480px">
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
      </Card>
    </Wrapper>
  </AuthTemplate>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default LoginPage;
