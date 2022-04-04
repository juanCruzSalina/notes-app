import React from 'react'
import { render } from '../../../utils/test-utils'
import '@testing-library/jest-dom'
import LoginForm from './LoginForm'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/dom'

describe('Login form tests', () => {
  const mockHandle = jest.fn()

  test('should render properly', () => {
    const { getByPlaceholderText } = render(<LoginForm handleSubmit={mockHandle}/>)
    expect(getByPlaceholderText('Email')).toBeInTheDocument()
    expect(getByPlaceholderText('Password')).toBeInTheDocument()
  })

  test('should fire submit', async () => {
    const login = userEvent.setup()
    const { getByRole, getByPlaceholderText } = render(<LoginForm handleSubmit={mockHandle}/>)
    //input type
    await login.type(getByPlaceholderText('Email'), 'juancruz10_@hotmail.com')
    await login.type(getByPlaceholderText('Password'), '123456789jcs')
    await login.click(getByRole('button', {name: 'Login'}))
    //resolve
    await waitFor(() => expect(mockHandle).toBeCalled())
  })

  test('should submit properly', async () => {
    const { getByText, getByPlaceholderText } = render(<LoginForm handleSubmit={mockHandle}/>)
    const register = userEvent.setup()
    await register.type(getByPlaceholderText('Email'), 'testemail@hotmail.com')
    await register.type(getByPlaceholderText('Password'), '123456789jcs')
    await register.click(getByText('Login'))
    await waitFor(() => expect(mockHandle).toBeCalledWith({
      email: 'testemail@hotmail.com',
      password: '123456789jcs',
    }))
  })

  test('should return errors', async () => {
    const { getByText, getAllByText } = render(<LoginForm handleSubmit={mockHandle}/>)
    const register = userEvent.setup()
    await register.click(getByText('Login'))
    await waitFor(
      () => {
        expect(mockHandle).not.toBeCalledWith()
        expect(getAllByText(/required/i)).toHaveLength(2)
      })
  })

})