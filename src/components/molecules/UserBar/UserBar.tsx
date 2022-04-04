import React from 'react'
import styled from 'styled-components';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import { authManager } from 'features/auth/authSlice';
import Heading from 'components/atoms/Heading/Heading';
import { rgba } from 'polished';
import { logout } from 'services/authService';
import { useNavigate } from 'react-router-dom';
import { clearNotes } from 'features/notes/notesSlice';

const Wrapper = styled.div`
  width: 100%;
  height: 7.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.xxs};
  background-color: ${props => props.theme.colors.secondary};
`;

const LogOut = styled.div`
  height: ${props => props.theme.measures.m};
  width: ${props => props.theme.measures.xl};
  color: ${props => props.theme.colors.light};
  border: 1px solid wheat;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all .1s ease-in;
  &:hover{
    background-color: ${props => rgba(props.theme.colors['grey-200'], .5)};
  }
`;

const UserBar: React.FC = () => {

  const { user } = useAppSelector(authManager)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    dispatch(clearNotes())
    navigate('/')
  }

  return (
    <Wrapper>
      <Heading size='m' isLight>
        { user?.displayName }
      </Heading>
      <LogOut onClick={handleLogout}>
        <FontAwesomeIcon icon={faArrowRightFromBracket}/>
        Logout
      </LogOut>
    </Wrapper>
  )
}

export default UserBar