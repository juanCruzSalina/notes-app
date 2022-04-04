import React from 'react'
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup'

import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import InputError from '../../atoms/InputError/InputError';

interface IRegisterForm {
  handleSubmit: (value: IRegisterValues) => void
}

export interface IRegisterValues {
  username: string,
  email: string,
  password: string,
  confirmPassword: string
}

const Wrapper = styled.div`
  grid-area: register;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledForm = styled(Form)`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const FormInputs = styled.div`
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const InputWithError = styled.div`
  height: ${props => props.theme.measures.l};
`;

const RegisterForm: React.FC<IRegisterForm> = (props) => {

  const SignUpSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, 'Username too short!')
      .max(16, 'Username too long!')
      .required('Username is required!'),
    email: Yup.string()
      .email('Invalid Email!')
      .required('Email is required!'),
    password: Yup.string()
      .min(6, 'Password too short!')
      .max(32, 'Password too long!')
      .matches(/^[a-z0-9]+$/i, 'Password must be Alphanumeric!')
      .required('Password is required!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match!')
      .required('Repeat your password!')
  })

  return (
    <Wrapper>
      <Heading size='m'>Sign up into Notes-app</Heading>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        onSubmit={(values: IRegisterValues) => props.handleSubmit(values)}
        validationSchema={SignUpSchema}
      >
        {({errors, touched}) => (
            <StyledForm>
              <FormInputs>
                <InputWithError>
                  <Input name='username' type='text' placeholder='Username' />
                  {errors.username && touched.username ? <InputError>{errors.username}</InputError> : null}
                </InputWithError>
                <InputWithError>
                  <Input name='email' type='email' placeholder='Email' />
                  {errors.email && touched.email ? <InputError>{errors.email}</InputError> : null}
                </InputWithError>
                <InputWithError>
                  <Input name='password' type='password' placeholder='Password'/>
                  {errors.password && touched.password ? <InputError>{errors.password}</InputError> : null}
                </InputWithError>
                <InputWithError>
                  <Input name='confirmPassword' type='password' placeholder='Confirm Password'/>
                  {errors.confirmPassword && touched.confirmPassword ? <InputError>{errors.confirmPassword}</InputError> : null}
                </InputWithError>
              </FormInputs>
              <Button isSubmit>Sign up</Button>
            </StyledForm>
          )
        }
      </Formik>
    </Wrapper>
  )
}

export default RegisterForm