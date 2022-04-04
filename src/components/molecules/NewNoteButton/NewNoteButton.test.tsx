import React from 'react'
import userEvent from '@testing-library/user-event';
import { render, store } from "utils/test-utils";
import NewNoteButton from './NewNoteButton';
import { waitFor } from '@testing-library/dom';
import { setEdit } from 'features/ui/uiSlice';
import theme from 'theme/theme';
import { rgba } from 'polished';

describe('Add note Button', () => {
  test('should render properly', () => {
    const { getByText } = render(<NewNoteButton />)
    expect(getByText(/new note/i)).toBeInTheDocument()
  })

  test('should should dispatch the right action', async () => {
    const button = userEvent.setup()
    const { getByText } = render(<NewNoteButton />)
    await button.click(getByText(/new note/i))
    await waitFor(
      () => expect(store.getState().ui.type).toEqual('new')
    )
  })

  test('should not allow to click', async () => {
    await waitFor(
      () => store.dispatch(setEdit())
    )
    const { getByText } = render(<NewNoteButton />)
    expect(getByText(/new note/i).parentElement).toHaveStyle(`background-color: ${rgba(theme.colors.dark, .7)}`)
    expect(getByText(/new note/i).parentElement).toHaveStyle(`cursor: none`)
    expect(getByText(/new note/i).parentElement).toHaveStyle(`pointer-events: none`)
  })
})