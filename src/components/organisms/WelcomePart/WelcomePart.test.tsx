import React from 'react'
import userEvent from '@testing-library/user-event';
import { render, store } from "utils/test-utils";
import WelcomePart from './WelcomePart';

describe('Left side of the home screen test', () => {

  test('should render properly', () => {
    const { getByText, getByRole } = render(<WelcomePart />)
    expect(getByRole('button', {name: 'Sign in'})).toBeInTheDocument()
    expect(getByText('Notes App')).toBeInTheDocument()
  })

  test('should dispatch the action when clicking sign in', async () => {
    const modal = userEvent.setup()
    const { getByRole } = render(<WelcomePart />)
    await modal.click(getByRole('button', {name: 'Sign in'}))
    expect(store.getState().ui.showModal).toBe(true)
  })
})