import React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../../utils/test-utils'
import AuthModal from './AuthModal'

describe('auth modal test', () => {
  test('should render properly', () => {
    const { getByText } = render(<AuthModal />)
    expect(getByText(/welcome to notes app/i))
  })
})