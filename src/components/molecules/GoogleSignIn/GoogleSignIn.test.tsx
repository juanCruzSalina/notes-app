import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { render, store } from "utils/test-utils";
import GoogleSignIn from './GoogleSignIn';

describe('Google provider sign in', () => {
  test('should render properly', () => {
    const { getByText } = render(<GoogleSignIn />)
    expect(getByText('Sign In with Google')).toBeInTheDocument()
  })

  test('should render properly', async () => {
    const google = userEvent.setup()
    const { getByText } = render(<GoogleSignIn />)
    await google.click(getByText('Sign In with Google'))
    expect(store.getState().ui.showModal).toBe(true)
  })
})