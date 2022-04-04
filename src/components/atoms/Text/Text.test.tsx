import React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../../utils/test-utils'
import Text from './Text'
import theme from '../../../theme/theme'
import { ThemeProvider } from 'styled-components'

describe('styled text test', () => {
  test('should render properly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Text size='m' >example</Text>
      </ThemeProvider>
    )
    expect(getByText(/example/i)).toBeInTheDocument()
  })

  test('should have light theme', () => {
    const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Text size='m' isLight>example</Text>
    </ThemeProvider>
    )
    expect(getByText(/example/i)).toHaveStyle(`color: ${theme.colors.light}`)
  })

  test('should have respective sizes', () => {
    const { getByText, rerender } = render(
      <ThemeProvider theme={theme}>
        <Text size='m' isLight>example</Text>
      </ThemeProvider>
    )
    expect(getByText(/example/i)).toHaveStyle(`font-size: ${theme.fontSizes.m}`)

    rerender(
      <ThemeProvider theme={theme}>
        <Text size='s' isLight>example</Text>
      </ThemeProvider>
    )
    expect(getByText(/example/i)).toHaveStyle(`font-size: ${theme.fontSizes.s}`)

    rerender(
      <ThemeProvider theme={theme}>
        <Text size='l' isLight>example</Text>
      </ThemeProvider>
    )
    expect(getByText(/example/i)).toHaveStyle(`font-size: ${theme.fontSizes.l}`)
  })
})