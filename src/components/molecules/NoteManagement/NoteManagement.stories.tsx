import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NoteManagement from './NoteManagement';

export default {
  title: 'Components/Molecules/Note Management',
  component: NoteManagement
} as ComponentMeta<typeof NoteManagement>

const Template: ComponentStory<typeof NoteManagement> = (args) => <NoteManagement {...args}/>
export const Default = Template.bind({})
Default.args = {
  id: 'cool-id'
}