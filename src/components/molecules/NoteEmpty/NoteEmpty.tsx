import React from 'react'
import styled from 'styled-components';
import { rgba } from 'polished';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from 'components/atoms/Heading/Heading';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  grid-area: screen;
  width: 100%;
  height: 100%;
  background-color: ${props => rgba(props.theme.colors.secondary, 0.4)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NoteEmpty: React.FC = () => {

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const textAnimation = {
    initial: { opacity: 0 },
    start: {
      opacity: 1,
      transition
    }
  }

  return (
    <Wrapper>
      <TextContent
        variants={textAnimation}
        initial={'initial'}
        animate={'start'}
      >
        <FontAwesomeIcon icon={faNoteSticky} size='4x'/>
        <Heading size='l'>Select a note</Heading>
      </TextContent>
    </Wrapper>
  )
}

export default NoteEmpty