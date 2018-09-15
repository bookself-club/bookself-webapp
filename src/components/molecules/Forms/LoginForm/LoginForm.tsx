import React from 'react';
import { Formik, Form, FormikProps, FormikActions } from 'formik';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';

import Button from 'components/atoms/Button';
import TextField from 'components/atoms/TextField';

import AuthService from 'utils/AuthService';

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

interface Data {
  login: {
    token: string;
  };
}

interface Variables {
  email: string;
  password: string;
}

class LoginMutation extends Mutation<Data, Variables> {}

interface MyFormValues {
  email: string;
  password: string;
  apiError: string;
}

const LoginForm: React.SFC = () => (
  <LoginMutation mutation={LOGIN}>
    {login => {
      return (
        <Route
          render={({ history }) => (
            <Formik
              initialValues={{
                email: '',
                password: '',
                apiError: '',
              }}
              validationSchema={yup.object().shape({
                email: yup
                  .string()
                  .email()
                  .required(),
                password: yup.string().required(),
              })}
              onSubmit={(
                { email, password }: MyFormValues,
                { setSubmitting, setErrors }: FormikActions<MyFormValues>
              ) => {
                login({ variables: { email, password } })
                  .then(({ data }: { data: Data }) => {
                    const { token } = data.login;
                    AuthService.finishAuthentication(token);
                    setSubmitting(false);
                    history.push('/dashboard');
                  })
                  .catch((error: { message: string }) => {
                    setSubmitting(false);
                    if (error.message) {
                      setErrors({
                        apiError: error.message,
                      });
                    } else {
                      // tslint:disable-next-line:no-console
                      console.log('Failed:', error);
                    }
                  });
              }}
              render={({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
              }: FormikProps<MyFormValues>) => (
                <Form>
                  {errors.apiError && <div>{errors.apiError}</div>}

                  <TextField
                    id="email"
                    name="email"
                    label="E-mail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && errors.email}
                  />

                  <TextField
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={touched.password && errors.password}
                  />

                  <Link to="/forgot">Esqueceu sua senha?</Link>

                  <ButtonWrapper>
                    <Button
                      type="submit"
                      color="primary"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                      label="Entrar"
                    />
                  </ButtonWrapper>
                </Form>
              )}
            />
          )}
        />
      );
    }}
  </LoginMutation>
);

const ButtonWrapper = styled.div`
  margin-top: 40px;
  button {
    width: 100%;
  }
`;

export default LoginForm;
