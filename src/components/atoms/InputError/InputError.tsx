import React from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.error};
`;

const ErrorText = styled.p`
  padding-left: ${props => props.theme.spacing.xxs};
  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.error};
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.error};
`;

const InputError: React.FC = (props) => {
  return (
    <Wrapper>
      <StyledIcon icon={faCircleXmark} />
      <ErrorText>
        {props.children}
      </ErrorText>
    </Wrapper>
  )
}

export default InputError