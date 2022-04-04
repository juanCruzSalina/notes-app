import React from 'react'
import styled from 'styled-components';

interface IStyledLink {
  to: string;
  color: string;
  hoverColor: string;
}

const CustomLink = styled.a<IStyledLink>`
  color: ${(props) => props.color};
  background: none;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: top;
  align-items: center;
  font-size: 1.4rem;
  padding: 1rem;
  text-decoration: none;
  :hover {
    transition: all 0.3s ease;
    color: ${(props) => props.hoverColor};
    transform: translateX(5px);
  }

`;

const StyledLink: React.FC<IStyledLink> = (props) => {
  return (
    <CustomLink {...props} >
      {props.children}
    </CustomLink>
  )
}

export default StyledLink