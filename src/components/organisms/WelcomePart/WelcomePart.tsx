import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch } from 'app/hooks';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Text from 'components/atoms/Text/Text';
import { toggleModal } from 'features/ui/uiSlice';
import React from 'react'
import styled from 'styled-components';
import AuthModal from '../AuthModal/AuthModal';

const Wrapper = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const WelcomeText = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-evenly;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  padding-right: ${props => props.theme.spacing.m};
`;

const WelcomePart: React.FC = () => {

  const dispatch = useAppDispatch()
  const handleAuthModal = () => {
    dispatch(toggleModal())
  }

  return (
    <Wrapper>
      <WelcomeText>
        <Heading size='l'>
          <StyledIcon icon={faList} />
          Notes App
        </Heading>
        <Text size='l'>Make useful notes with timestamps and media in them</Text>
      </WelcomeText>
      <Button onClick={handleAuthModal}>Sign in</Button>
      <AuthModal/>
    </Wrapper>
  )
}

export default WelcomePart