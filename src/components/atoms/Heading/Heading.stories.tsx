import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from './Heading';

export default {
  title: 'Components/Atoms/Heading',
  component: Heading
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => {
  return(
    <Heading {...args}>
      {args.children}
    </Heading>
  )
}

export const Default = Template.bind({})
Default.args = {
  size: 'm',
  children: 'example heading'
}