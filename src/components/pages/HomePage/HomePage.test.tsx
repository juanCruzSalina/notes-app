import React from 'react'
import { render } from "utils/test-utils";
import HomePage from './HomePage';

describe('Home Page test', () => {
  test('should render properly', () => {
    const {getByText, getByAltText} = render(<HomePage/>)
    expect(getByAltText('main-menu-alt')).toBeInTheDocument()
    expect(getByText('Notes App')).toBeInTheDocument()
  })
})