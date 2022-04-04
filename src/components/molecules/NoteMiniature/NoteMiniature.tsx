import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import Heading from 'components/atoms/Heading/Heading';
import Text from 'components/atoms/Text/Text';
import { noteManager, setCurrent } from 'features/notes/notesSlice';
import { motion } from 'framer-motion';

export interface INote {
  id?: string;
  title: string;
  body: string;
  date: number;
  image?: string
}

interface ICard {
  active?: boolean
}


const Wrapper = styled(motion.div)<ICard>`
  height: ${props => props.theme.measures.xl};
  width: 100%;
  display: grid;
  background-color: ${props => props.theme.colors.light};
  border: 2px solid ${props => props.active ? props.theme.colors.primary : 'none' };
  border-radius: 7px;
  grid-template:
    [row1-start] 'image text date' 100% [row1-end]
    / 7.5% 69% 20%
  ;
  margin: ${props => props.theme.spacing.xxs} 0;
`;

const TimeContainer = styled.div`
  width: 100%;
  grid-area: date;
  text-align: center;
  display: grid;
  place-items: center;
`;

const TextContainer = styled.div`
  width: 90%;
  display: flex;
  grid-area: text;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: ${props => props.theme.spacing.m};
  overflow: hidden;
`;

const ImageContainer = styled.div<Pick<INote, 'image'>>`
  width: ${props => props.theme.measures.m};
  grid-area: image;
  background-image: url(${props => props.image});
`;

const NoteMiniature: React.FC<INote> = (props) => {
  const dispatch = useAppDispatch()
  const { currentNote } = useAppSelector(noteManager)
  const [active, setActive] = useState<boolean>(false)
  const day = Intl.DateTimeFormat(
    navigator.language,
    { weekday: 'long', day: 'numeric' }
    ).format(props.date)

  const handleNoteSelect = () => {
    dispatch(setCurrent(props.id))
    setActive(true)
  }

  useEffect(() => {
    if (props.id !== currentNote?.id) {
      setActive(false)
    }
  }, [currentNote?.id])

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const cardAnimation = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition, delay: 1.5 },
    exit: {
      opacity: 0,
      transition: { transition }
    }
  };


  return (
    <Wrapper
      onClick={handleNoteSelect}
      variants={cardAnimation}
      initial={'initial'}
      animate={'enter'}
      exit={'exit'}
      layoutId={props.id}
      active={active}
    >
      {props.image && (
        <ImageContainer image={props.image} title={'mini-image'} />
      )}
      <TextContainer>
        <Heading size='m'>{props.title}</Heading>
      </TextContainer>
      <TimeContainer>
        <Text size='m'>{day}</Text>
      </TimeContainer>
    </Wrapper>
  )
}

export default NoteMiniature