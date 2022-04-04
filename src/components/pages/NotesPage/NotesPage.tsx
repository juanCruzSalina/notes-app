import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import NotesForm, { INoteFormValues } from 'components/molecules/NotesForm/NotesForm';
import NoteScreen from 'components/organisms/NoteScreen/NoteScreen';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import { addNewNote, fetchNotes } from 'features/notes/notesAsyncActions';
import { noteManager } from 'features/notes/notesSlice';
import NoteEmpty from 'components/molecules/NoteEmpty/NoteEmpty';
import { AnimatePresence, motion } from 'framer-motion';
import { format } from 'date-fns';

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template:
    [row1-start] 'sidebar screen forms' 100% [row1-end] / 20% auto 25%
  ;
  place-items: center;
`;

const NotesPage: React.FC = () => {

  const { currentNote } = useAppSelector(noteManager)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchNotes())
  },[])

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const enterAnimation = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition, delay: 1.5 },
    exit: {
      opacity: 0,
      transition: { transition }
    }
  };

  const handleNoteAdd = (values: INoteFormValues) => {
    const {date, ...rest} = values
    const numberDate = parseInt(format(date, 'T'), 10)
    dispatch(addNewNote({date: numberDate, ...rest}))
    dispatch(fetchNotes())
  }

  return (
    <Wrapper
      variants={enterAnimation}
      initial={'initial'}
      exit={'exit'}
      animate={'enter'}
    >
      <Sidebar />
        <AnimatePresence exitBeforeEnter>
        {
          currentNote
            ? <NoteScreen key={currentNote.id} {...currentNote!}/>
            : <NoteEmpty />
        }
        </AnimatePresence>
      <NotesForm handleSubmit={handleNoteAdd} />
    </Wrapper>
  )
}

export default NotesPage