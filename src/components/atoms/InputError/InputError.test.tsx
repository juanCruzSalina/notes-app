import React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../../utils/test-utils'
import InputError from './InputError'

describe('Input errors test', () => {
  test('should render properly', () => {
    const { getByText } = render(<InputError>Error example</InputError>)
    expect(getByText(/error example/i)).toBeInTheDocument()
  })
})