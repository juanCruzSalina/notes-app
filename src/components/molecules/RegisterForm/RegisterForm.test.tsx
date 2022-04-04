import React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../../utils/test-utils'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/dom'
import RegisterForm from './RegisterForm'

describe('Register form tests', () => {
  const mockHandle = jest.fn()
  test('should render properly', () => {
    const { getByText, getByPlaceholderText } = render(<RegisterForm handleSubmit={mockHandle}/>)
    expect(getByPlaceholderText('Username')).toBeInTheDocument()
    expect(getByPlaceholderText('Email')).toBeInTheDocument()
    expect(getByPlaceholderText('Password')).toBeInTheDocument()
    expect(getByPlaceholderText('Confirm Password')).toBeInTheDocument()
    expect(getByText('Sign up')).toBeInTheDocument()
  })

  test('should submit properly', async () => {
    const { getByText, getByPlaceholderText } = render(<RegisterForm handleSubmit={mockHandle}/>)
    const register = userEvent.setup()
    await register.type(getByPlaceholderText('Username'), 'shadowtest')
    await register.type(getByPlaceholderText('Email'), 'testemail@hotmail.com')
    await register.type(getByPlaceholderText('Password'), '123456789jcs')
    await register.type(getByPlaceholderText('Confirm Password'), '123456789jcs')
    await register.click(getByText('Sign up'))
    await waitFor(() => expect(mockHandle).toBeCalledWith({
      username: 'shadowtest',
      email: 'testemail@hotmail.com',
      password: '123456789jcs',
      confirmPassword: '123456789jcs'
    }))
  })

  test('should return errors', async () => {
    const { getByText, getAllByText } = render(<RegisterForm handleSubmit={mockHandle}/>)
    const register = userEvent.setup()
    await register.click(getByText('Sign up'))
    await waitFor(
      () => {
        expect(mockHandle).not.toBeCalledWith()
        expect(getAllByText(/required/i)).toHaveLength(3)
      })
  })
})