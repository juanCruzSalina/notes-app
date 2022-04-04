import React from 'react'
import styled from 'styled-components';

import LoginForm, { ILoginValues } from '../../molecules/LoginForm/LoginForm';
import RegisterForm, { IRegisterValues } from '../../molecules/RegisterForm/RegisterForm';
import Heading from '../../atoms/Heading/Heading';
import ModalContainer from '../../atoms/ModalContainer/ModalContainer';
import GoogleSignIn from '../../molecules/GoogleSignIn/GoogleSignIn';
import { emailLogin, emailRegister } from 'services/authService';
import { useAppDispatch } from 'app/hooks';
import { toggleModal } from 'features/ui/uiSlice';

const Wrapper = styled.div`
  width: 35%;
  height: 75%;
  background-color: ${props => props.theme.colors.light};
  display: grid;
  grid-template:
    [row1-start] 'heading heading heading' 10% [row1-end]
    [row2-start] 'login separator register' auto [row2-end]
    [row2-start] 'google google google' 15% [row2-end]
    / 49% auto 49%;
  ;
  place-items: center;
`;

const AuthHeading = styled(Heading)`
  grid-area: heading;
`;

const AuthSeparator = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${props => props.theme.colors['grey-300']};
  grid-area: separator;
`;

const AuthModal: React.FC = () => {

  const dispatch = useAppDispatch()

  const handleLogin = async (values: ILoginValues) => {
    await emailLogin(values)
    dispatch(toggleModal())
  }

  const handleRegister = async (values: IRegisterValues) => {
    await emailRegister(values)
    dispatch(toggleModal())
  }

  return (
    <ModalContainer>
      <Wrapper onClick={(e: React.SyntheticEvent) => e.stopPropagation()} >
        <AuthHeading size='m'>Welcome to Notes App</AuthHeading>
        <LoginForm handleSubmit={handleLogin}/>
        <AuthSeparator />
        <RegisterForm handleSubmit={handleRegister}/>
        <GoogleSignIn />
      </Wrapper>
    </ModalContainer>
  )
}

export default AuthModal