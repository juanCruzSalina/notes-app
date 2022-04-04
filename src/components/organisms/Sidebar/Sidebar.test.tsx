import React from 'react'
import { render } from 'utils/test-utils';
import Sidebar from './Sidebar';

describe('sidebar tests', () => {
  test('should render properly', () => {
    const { getByText } = render(<Sidebar />)
    expect(getByText('New Note')).toBeInTheDocument()
  })
})