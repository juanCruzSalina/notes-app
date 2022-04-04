import React from 'react'
import '@testing-library/jest-dom'
import { render } from "utils/test-utils";
import NoteMiniature from './NoteMiniature';


describe('notes mini test', () => {
  test('should render properly', () => {
    const exampleNote = {
      id: 'somecoolID',
      title: 'test',
      body: 'loremipsum',
      date: new Date().getTime()
    }
    const { getByText } = render(<NoteMiniature {...exampleNote}/>)
    expect(getByText(exampleNote.title)).toBeInTheDocument()
  })

  test('should have background image if it has image', () => {
    const exampleNote = {
      id: 'somecoolID',
      title: 'test',
      body: 'loremipsum',
      image: 'cool-image',
      date: new Date().getTime()
    }
    const { getByTitle } = render(<NoteMiniature {...exampleNote}/>)
    expect(getByTitle('mini-image')).toBeInTheDocument()
    expect(getByTitle('mini-image')).toHaveStyle(`background-image: url(${exampleNote.image})`)
  })
})
