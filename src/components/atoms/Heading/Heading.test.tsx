import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme/theme'
import Heading from './Heading'

describe('heading components test', () => {
  test('should render properly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Heading size='m' >example heading</Heading>
      </ThemeProvider>
    )
    expect(getByText(/example heading/i)).toBeInTheDocument()
  })

  test('should have proper sizes', () => {
    const { getByText, rerender } = render(
      <ThemeProvider theme={theme}>
        <Heading size='s' >example heading</Heading>
      </ThemeProvider>
    )
    expect(getByText(/example heading/i)).toHaveStyle(`font-size: ${theme.fontSizes.m}`)

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size='m' >example heading</Heading>
      </ThemeProvider>
    )
    expect(getByText(/example heading/i)).toHaveStyle(`font-size: ${theme.fontSizes.l}`)

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size='l' >example heading</Heading>
      </ThemeProvider>
    )
    expect(getByText(/example heading/i)).toHaveStyle(`font-size: ${theme.fontSizes.xl}`)
  })

  test('should have light mode when active', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Heading isLight size='m' >example heading</Heading>
      </ThemeProvider>
    )
    expect(getByText(/example heading/i)).toHaveStyle(`color: ${theme.colors.light}`)
  })
})