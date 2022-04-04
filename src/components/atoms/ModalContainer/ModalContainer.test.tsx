import React from 'react'
import { render, store } from '../../../utils/test-utils'
import '@testing-library/jest-dom'
import ModalContainer from './ModalContainer'
import { toggleModal } from '../../../features/ui/uiSlice'
import { act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

describe('Modal container test', () => {

  test('should render properly', () => {
    const { getByText } = render(
      <ModalContainer>
        modal content
      </ModalContainer>
    )
    expect(getByText(/modal content/i)).toBeInTheDocument()
  })

  test('should initially be no visible', () => {
    const { getByText } = render(
      <ModalContainer>
        modal content
      </ModalContainer>
    )
    expect(getByText(/modal content/i)).toHaveStyle('opacity: 0')
    expect(getByText(/modal content/i)).toHaveStyle('pointer-events: none')
  })

  test('should be visible when action dispatch', () => {
    store.dispatch(toggleModal())
    const { getByText } = render(
      <ModalContainer>
        modal content
      </ModalContainer>
    )
    expect(getByText(/modal content/i)).toHaveStyle('opacity: 1')
    expect(getByText(/modal content/i)).toHaveStyle('pointer-events: all')
    store.dispatch(toggleModal())
  })

  test('should hide on click', async () => {

    const modal = userEvent.setup()

    store.dispatch(toggleModal())
    const { getByText } = render(
      <ModalContainer>
        modal content
      </ModalContainer>
    )
    expect(getByText(/modal content/i)).toHaveStyle('opacity: 1')
    await act(
      async () => {
        await modal.click(getByText(/modal content/i))
      }
    )

    expect(getByText(/modal content/i)).toHaveStyle('opacity: 0')
    expect(getByText(/modal content/i)).toHaveStyle('pointer-events: none')
  })
})