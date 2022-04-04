import React from 'react'
import styled from 'styled-components';

interface IPicture{
  source: string;
  alt: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  height: 100%;
`;

const Image: React.FC<IPicture> = (props) => {
  return (
    <Wrapper>
      <StyledImage src={props.source} alt={props.alt}/>
    </Wrapper>
  )
}

export default Image