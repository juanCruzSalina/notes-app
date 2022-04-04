import React from 'react'
import '@testing-library/jest-dom'
import { render } from "utils/test-utils";
import UserBar from './UserBar'

describe('user bar test', () => {
  test('should render properly', () => {
    const { getByText } = render(<UserBar />)
    expect(getByText('Logout')).toBeInTheDocument()
  })
})