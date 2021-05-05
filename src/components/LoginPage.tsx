import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { loginUser } from '../store/reducers/auth-reducer';
import { Formik } from 'formik';

const LoginPage = (props: any) => {
  const { isAuth, loginUser, errorMessage } = props;

  if (isAuth) {
    return <Redirect to='/profile' />;
  }

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(data) => {
        loginUser(data);
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='username'>
            <Form.Control
              name='username'
              onChange={handleChange}
              placeholder='Enter email'
              value={values.username}
            />
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Control
              name='password'
              onChange={handleChange}
              type='password'
              placeholder='Password'
              value={values.password}
            />
          </Form.Group>
          <Form.Text className='mb-3'>{errorMessage}</Form.Text>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default connect(
  (state: any) => ({
    isAuth: state.auth.isAuth,
    credentials: state.auth.credentials,
    errorMessage: state.auth.errorMessage,
  }),
  (dispatch: any) => ({
    loginUser: (credentials: { username: string; password: string }) => {
      dispatch(loginUser(credentials));
    },
  })
)(LoginPage);
