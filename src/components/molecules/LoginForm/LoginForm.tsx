import React from 'react'
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup'

import Input from '../../atoms/Input/Input';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import InputError from '../../atoms/InputError/InputError';

export interface ILoginValues {
  email: string,
  password: string
}

interface ILoginForm {
  handleSubmit: (value: ILoginValues) => void
}

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  padding: ${props => props.theme.spacing.m};
  grid-area: login;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledForm = styled(Form)`
  height: ${props => props.theme.measures.xxl};
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const InputWithError = styled.div`
  height: ${props => props.theme.measures.l};
`;

const LoginForm: React.FC<ILoginForm> = (props) => {

  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid Email!')
      .required('Email is required!'),
    password: Yup.string()
      .min(6, 'Password too short!')
      .max(32, 'Password too long!')
      .matches(/^[a-z0-9]+$/i, 'Password must be Alphanumeric!')
      .required('Password is required!'),
  })


  return (
    <Wrapper>
      <Heading size='m'>Login into Notes-app</Heading>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values: ILoginValues) => props.handleSubmit(values)}
      >
        {({errors, touched}) => (
          <StyledForm>
            <InputWithError>
              <Input name='email' type='email' placeholder='Email' />
              {errors.email && touched.password ? <InputError>{errors.email}</InputError> : null}
            </InputWithError>
            <InputWithError>
              <Input name='password' type='password' placeholder='Password'/>
              {errors.password && touched.password ? <InputError>{errors.password}</InputError> : null}
            </InputWithError>
            <Button isSubmit>Login</Button>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  )
}

export default LoginForm