import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Text from './Text'

export default {
  title: 'Components/Atoms/Text',
  component: Text
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => {
  return (
    <Text {...args}>
      {args.children}
    </Text>
  )
}

export const Default = Template.bind({})
Default.args = {
  children: 'example text'
}

export const LightMode = Template.bind({})
LightMode.args = {
  isLight: true,
  children: 'example text'
}