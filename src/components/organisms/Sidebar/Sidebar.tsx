import React from 'react'
import styled from 'styled-components';
import NewNoteButton from 'components/molecules/NewNoteButton/NewNoteButton';
import NoteMiniature from 'components/molecules/NoteMiniature/NoteMiniature';
import UserBar from 'components/molecules/UserBar/UserBar';
import { useAppSelector } from 'app/hooks';
import { noteManager } from 'features/notes/notesSlice';
import { rgba } from 'polished';
import { AnimatePresence } from 'framer-motion';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: sidebar;
`;

const NotesManagemant = styled.div`
  width: 100%;
  height: 92.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${props => rgba(props.theme.colors['grey-100'], .9)} ;
`;

const MiniContainer = styled.div`
  height: 80%;
  width: 90%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Sidebar: React.FC = () => {

  const { notes } = useAppSelector(noteManager)

  return (
    <Wrapper>
      <UserBar />
      <NotesManagemant>
        <NewNoteButton />
        <MiniContainer>
          <AnimatePresence>
            {notes.map(note => <NoteMiniature key={note.id} {...note}/>)}
          </AnimatePresence>
        </MiniContainer>
      </NotesManagemant>
    </Wrapper>
  )
}

export default Sidebar