import React from 'react'
import styled from 'styled-components';

interface IText {
  isLight?: boolean
  size: 's' | 'm' | 'l'
}

const StyledText = styled.p<IText>`
  color: ${props => props.isLight
    ? props.theme.colors.light
    : props.theme.colors.dark
  };
  font-size: ${(props) => props.size === 's'
    ? props.theme.fontSizes.s
    : props.size === 'm'
    ? props.theme.fontSizes.m
    : props.theme.fontSizes.l
  };
  margin-block-end: 0;
  margin-block-start: 0;
`;

const Text: React.FC<IText> = (props) => {

  return (
    <StyledText {...props}>{props.children}</StyledText>
  )
}

export default Text