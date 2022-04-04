import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Sidebar from './Sidebar'

export default {
  title: 'Components/Organisms/Sidebar',
  component: Sidebar
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args}/>

export const Default = Template.bind({})
