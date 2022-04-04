import React from 'react'
import { render } from 'utils/test-utils'
import NoteScreen from './NoteScreen'

describe('Note Screen', () => {
  test('should render properly', () => {
    const exampleNote = {
      id: 'somecoolID',
      title: 'test note',
      body: 'loremipsum',
      date: 123124124123123
    }

    const { getByText } = render(<NoteScreen {...exampleNote} />)
    expect(getByText(/test note/i)).toBeInTheDocument()
    expect(getByText('loremipsum')).toBeInTheDocument()
  })

  test('should render properly with image', () => {
    const exampleNote = {
      id: 'somecoolID',
      title: 'test note',
      body: 'loremipsum',
      image: 'testhere',
      date: 123124124123123
    }
    const { getByText, getByAltText } = render(<NoteScreen {...exampleNote}/>)
    expect(getByText(/test note/i)).toBeInTheDocument()
    expect(getByText('loremipsum')).toBeInTheDocument()
    expect(getByAltText('somecoolID')).toBeInTheDocument()
  })

  test('should render properly with image', () => {
    const exampleNote = {
      id: 'somecoolID',
      title: 'test note',
      body: 'loremipsum',
      date: 123124124123123
    }
    const { getByText, queryByPlaceholderText } = render(<NoteScreen {...exampleNote}/>)
    expect(getByText(/test note/i)).toBeInTheDocument()
    expect(getByText('loremipsum')).toBeInTheDocument()
    expect(queryByPlaceholderText('somecoolID')).toBe(null)
  })
})