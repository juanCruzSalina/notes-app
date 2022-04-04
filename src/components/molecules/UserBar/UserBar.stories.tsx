import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import UserBar from './UserBar';

export default {
  title: 'Components/Molecules/User Bar',
  component: UserBar
} as ComponentMeta<typeof UserBar>

const Template: ComponentStory<typeof UserBar> = (args) => <UserBar {...args}/>

export const Default = Template.bind({})
Default.args = {}