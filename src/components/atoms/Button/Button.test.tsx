import React from 'react'
import '@testing-library/jest-dom';
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ThemeProvider } from 'styled-components';
import theme from '../../../theme/theme';

import Button from './Button';

describe('buttons test', () => {
  test('should render properly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Button>
          test button
        </Button>
      </ThemeProvider>
    )
    expect(component.getByText(/test button/i)).toBeInTheDocument()
  })

  test('should use onclick properly', async () => {
    const fnMock = jest.fn()
    const form = userEvent.setup()

    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button onClick={fnMock}>
          test button
        </Button>
      </ThemeProvider>
    )
    await form.click(getByRole('button', {name: /test button/}))
    expect(fnMock).toHaveBeenCalledTimes(1)
  })

  test('should have submit prop', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Button isSubmit>
          submit
        </Button>
      </ThemeProvider>
    )
    expect(component.getByText(/submit/i).parentNode).toHaveAttribute('type', 'submit')
  })
})