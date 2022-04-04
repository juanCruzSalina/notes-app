import React from 'react'
import styled from 'styled-components';

import Heading from 'components/atoms/Heading/Heading';
import Image from 'components/atoms/Image/Image';
import Text from 'components/atoms/Text/Text';
import NoteManagement from 'components/molecules/NoteManagement/NoteManagement';
import { INote } from 'components/molecules/NoteMiniature/NoteMiniature';
import { rgba } from 'polished';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  grid-area: screen;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template:
    [row1-start] 'management' 7.5% [row1-end]
    [row2-start] 'note' auto [row2-end]
    / 100%
  ;
  background-color: ${props => rgba(props.theme.colors.secondary, 0.4)};
`;

const NoteShow = styled(motion.div)`
  grid-area: note;
  display: grid;
  grid-template:
    [row1-start] 'title' 10% [row1-end]
    [row2-start] 'body' 40% [row2-end]
    [row2-start] 'image' 50% [row2-end]
    / 100%
  ;
  background-color: ${props => rgba(props.theme.colors.primary, .3)};
`;

const NoteTitle = styled(Heading)`
  width: 100%;
  grid-area: title;
  padding: ${props => props.theme.spacing.xxs};
  background-color: ${props => rgba(props.theme.colors.primary, .2)};

`;

const NoteBody = styled(Text)`
  width: 100%;
  grid-area: body;
  padding: ${props => props.theme.spacing.xxs};
`;

const ImageContainer = styled.div`
  grid-area: image;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ImageWrapper = styled.div`
  height: 60%;
  width: 60%;
  border-radius: 10px;
`;

const NoteScreen: React.FC<INote> = (props) => {

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const noteScreenAnimation = {
    initial: { y: -1000, scale: 0.5 },
    start: {
      y: 0,
      scale: 1,
      transition
    },
    end: {
      y: -1000,
      scale: 0.5,
      transition
    }
  }

  return (
    <Wrapper>
      <NoteManagement id={props.id!}/>
      <NoteShow
        variants={noteScreenAnimation}
        initial={'initial'}
        animate={'start'}
        exit={'end'}
        >
        <NoteTitle size='l'>
          {props.title}
        </NoteTitle>
        <NoteBody size='l'>
          {props.body}
        </NoteBody>
        <ImageContainer>
          <ImageWrapper>
            {props.image && <Image source={props.image} alt={props.id || 'alt-iamge'} />}
          </ImageWrapper>
        </ImageContainer>
      </NoteShow>
    </Wrapper>
  )
}

export default NoteScreen