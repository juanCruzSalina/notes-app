import React from 'react'
import styled from 'styled-components';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/atoms/Button/Button';
import Text from 'components/atoms/Text/Text';
import { useAppDispatch } from 'app/hooks';
import { toggleModal } from 'features/ui/uiSlice';
import { googleLogIn } from 'features/auth/authAsyncActions';

const Wrapper = styled.div`
  grid-area: google;
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors['grey-300']};
  padding: ${props => props.theme.spacing.xs} 0;
`;

const ButtonIcon = styled(FontAwesomeIcon)`
  padding-right: ${props => props.theme.spacing.xxs};
`;

const GoogleSignIn: React.FC = () => {

  const dispatch = useAppDispatch()

  const handleGoogleLogin = async () => {
    dispatch(toggleModal())
    dispatch(googleLogIn())
  }

  return (
    <Wrapper>
      <Text size='m'>Or sign in with Google:</Text>
      <Button onClick={handleGoogleLogin}>
        <ButtonIcon icon={faGoogle as IconDefinition}/>
        Sign In with Google
      </Button>
    </Wrapper>
  )
}

export default GoogleSignIn