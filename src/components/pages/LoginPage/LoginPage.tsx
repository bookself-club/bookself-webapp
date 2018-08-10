import React from 'react';
import styled from 'styled-components';

import AuthTemplate from 'components/templates/AuthTemplate';
import Card from 'components/atoms/Card';
import LoginForm from 'components/molecules/Forms/LoginForm';

const LoginPage: React.SFC<any> = props => (
  <AuthTemplate title="Login">
    <Wrapper>
      <Card width="480px">
        <h1>Login Page</h1>
        <LoginForm />
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
