import React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../../utils/test-utils'
import StyledLink from './StyledLink'
import theme from '../../../theme/theme'

describe('Link tests', () => {
  test('should render properly', () => {
    const { getByText } = render(
      <StyledLink to='/home' color={theme.colors.dark} hoverColor={theme.colors['grey-400']}>
        example link
      </StyledLink>
    )
    expect(getByText(/example link/i)).toBeInTheDocument()
  })
})