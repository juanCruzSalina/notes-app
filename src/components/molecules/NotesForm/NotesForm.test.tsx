import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, store } from "utils/test-utils";
import { setAdd } from 'features/ui/uiSlice';
import NotesForm from './NotesForm';
import { waitFor } from '@testing-library/dom';

describe('Notes form test', () => {

  beforeEach(
    () => store.dispatch(setAdd())
  )

  const mockHandle = jest.fn()

  test('should render properly', () => {
    const { getByText, getByPlaceholderText } = render(<NotesForm handleSubmit={mockHandle} />)
    expect(getByText(/add note/i)).toBeInTheDocument()
    expect(getByPlaceholderText(/title/i)).toBeInTheDocument()
  })

  test('should submit properly', async () => {
    const note = userEvent.setup()
    const { getByRole, getByPlaceholderText } = render(<NotesForm handleSubmit={mockHandle} />)

    await note.type(getByPlaceholderText('Note title'), 'test note title')
    await note.type(getByPlaceholderText('Note body'), 'test note body')
    await note.type(getByPlaceholderText('mm/dd/yyyy'), '05/10/2022')
    await note.click(getByRole('button', {name: 'Add Note'}))

    await waitFor(
      () => expect(mockHandle).toHaveBeenCalled()
    )
  })

  test('should cancel the form', async () => {
    const note = userEvent.setup()
    const { getByRole } = render(<NotesForm handleSubmit={mockHandle} />)

    await note.click(getByRole('button', {name: 'Cancel'}))
    expect(store.getState().ui.type).toBe(null)
  })
})