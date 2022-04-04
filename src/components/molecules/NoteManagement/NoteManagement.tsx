import { faPenToSquare, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch } from 'app/hooks';
import { removeNote } from 'features/notes/notesAsyncActions';
import { clearCurrent } from 'features/notes/notesSlice';
import { setEdit } from 'features/ui/uiSlice';
import { motion } from 'framer-motion';
import { rgba } from 'polished';
import React from 'react'
import styled from 'styled-components';

interface INoteManage {
  id: string
}

const BarButton = styled.div`
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.l};
  padding: ${props => props.theme.spacing.xxs};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all .1s ease-in;
  &:hover{
    background-color: ${props => rgba(props.theme.colors['grey-200'], .5)};
  }
`;

const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  transition: .3s all ease-in-out;
  &:hover{
    background-color: ${props => rgba(props.theme.colors.secondary, .5)};
  }
`;

const NoteManagement: React.FC<INoteManage> = ({ id }) => {
  const dispatch = useAppDispatch()

  const handleEdit = () => {
    dispatch(setEdit())
  }
  const handleDelete = () => {
    dispatch(removeNote(id))
  }
  const handleClose = () => {
    dispatch(clearCurrent())
  }

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const noteBarAnimation = {
    initial: { opacity: 0 },
    start: {
      opacity: 1,
      delay: 1,
      transition
    },
    end: {
      opacity: 0,
      transition
    }
  }

  return (
    <Wrapper
      variants={noteBarAnimation}
      exit={'end'}
      initial={'initial'}
      animate={'start'}
    >
      <BarButton onClick={handleClose} >
        <FontAwesomeIcon icon={faXmark} title={'close'}/>
      </BarButton>
      <ButtonWrapper>
        <BarButton onClick={handleEdit}>
          <FontAwesomeIcon icon={faPenToSquare} title={'edit'}/>
        </BarButton>
        <BarButton onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashCan} title={'delete'}/>
        </BarButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default NoteManagement