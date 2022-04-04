import React from 'react'
import styled from 'styled-components';

interface IHeading {
  isLight?: boolean,
  size: 's' | 'm' | 'l'
}


const StyledHeading = styled.h2<IHeading>`
  color: ${props => props.isLight
    ? props.theme.colors.light
    : props.theme.colors.dark
  };
  font-size: ${(props) => props.size === 's'
    ? props.theme.fontSizes.m
    : props.size === 'm'
    ? props.theme.fontSizes.l
    : props.theme.fontSizes.xl
  };
  font-weight: normal ;
`;

const Heading: React.FC<IHeading> = (props) => {
  return (
    <StyledHeading {...props}>
      {props.children}
    </StyledHeading>
  )
}

export default Heading