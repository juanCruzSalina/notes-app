import React from 'react'
import styled from 'styled-components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rgba } from 'polished';

import Text from 'components/atoms/Text/Text';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setAdd, uiState } from 'features/ui/uiSlice';

interface INewButton {
  isEdit: boolean
}

const Wrapper = styled.div<INewButton>`
  border: 2px solid ${props => props.theme.colors['grey-500']};
  width: ${props => props.theme.measures.xl};
  height: ${props => props.theme.measures.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  background-color: ${props =>
    (props.isEdit)
      ? rgba(props.theme.colors.dark, .7)
      : props.theme.colors.dark};
  color: ${props => props.theme.colors['grey-500']};
  transition: all .2s ease-in;
  cursor: ${props => props.isEdit ? 'none' : 'pointer'};
  pointer-events: ${props => props.isEdit ? 'none' : 'all'};
  &:hover {
    background-color: ${props => rgba(props.theme.colors.dark, .7)};
  }
`;

const NewNoteButton: React.FC = () => {
  const { type } = useAppSelector(uiState)
  const dispatch = useAppDispatch()
  const handleAdd = () => {
    dispatch(setAdd())
  }
  return (
    <Wrapper onClick={handleAdd} isEdit={(type === 'edit') ? true : false}>
      <FontAwesomeIcon icon={faPlus} size={'3x'}/>
      <Text size='m' isLight>New Note</Text>
    </Wrapper>
  )
}

export default NewNoteButton