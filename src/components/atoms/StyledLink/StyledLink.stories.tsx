import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import StyledLink from './StyledLink'
import theme from '../../../theme/theme'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Components/Atoms/Link',
  component: StyledLink,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as ComponentMeta<typeof StyledLink>

const Template: ComponentStory<typeof StyledLink> = (args) => {
  return(
    <StyledLink {...args}>
      {args.children}
    </StyledLink>
  )
}

export const Default = Template.bind({})
Default.args = {
  to: '/test',
  children: 'Example Link',
  color: theme.colors.dark,
  hoverColor: theme.colors['grey-400']
}