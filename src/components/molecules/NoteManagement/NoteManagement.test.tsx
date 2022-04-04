import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, store } from "utils/test-utils";
import NoteManagement from './NoteManagement';

describe('Note bar tests', () => {
  test('should render properly', () => {
    const { getByTitle } = render(<NoteManagement id='cool-id' />)
    expect(getByTitle('close')).toBeInTheDocument()
    expect(getByTitle('edit')).toBeInTheDocument()
    expect(getByTitle('delete')).toBeInTheDocument()
  })

  test('should dispatch actions', async () => {
    const icons = userEvent.setup()
    const { getByTitle } = render(<NoteManagement id='cool-id' />)

    await icons.click(getByTitle('close'))
    expect(store.getState().notes.currentNote).toBe(undefined)

    await icons.click(getByTitle('edit'))
    expect(store.getState().ui.type).toBe('edit')
  })
})