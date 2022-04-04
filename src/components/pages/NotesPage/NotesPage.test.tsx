import React from 'react'
import { render } from "utils/test-utils";
import NotesPage from './NotesPage';

describe('Notes page tests', () => {
  test('should render properly', () => {
    const { getByText } = render(<NotesPage />)
    expect(getByText('Select a note')).toBeInTheDocument()
  })
})