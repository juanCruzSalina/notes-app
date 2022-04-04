import React from 'react'
import styled from 'styled-components';
import { rgba } from 'polished';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { toggleModal, uiState } from 'features/ui/uiSlice';

export interface IModal {
  show: boolean
}

const Wrapper = styled.div<IModal>`
  width: 100%;
  height: 100%;
  background-color: ${props => rgba( props.theme.colors.dark, 0.5 )};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  transition: all .3s ease;
  opacity: ${props => (props.show) ? 1 : 0};
  pointer-events: ${ props => props.show ? 'all' : 'none' };
`;

const ModalContainer: React.FC = (props) => {

  const { showModal } = useAppSelector(uiState);
  const dispatch = useAppDispatch();
  const hideOnClick = () => dispatch(toggleModal());

  return (
    <Wrapper show={showModal} onClick={hideOnClick}>
      {props.children}
    </Wrapper>
  )
}

export default ModalContainer