import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return (
  <Button {...args}>
    {args.children}
  </Button>
)
}
export const Default = Template.bind({})
Default.args = {
  onClick: action('Clicked Button'),
  children: 'Button'
}