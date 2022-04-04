import React from 'react'
import '@testing-library/jest-dom'
import { render } from "utils/test-utils";
import NoteEmpty from './NoteEmpty';

describe('No note screen test', () => {
  test('should render properly', () => {
    const { getByText } = render(<NoteEmpty />)
    expect(getByText('Select a note')).toBeInTheDocument()
  })
})