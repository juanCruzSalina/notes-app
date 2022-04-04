import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NoteScreen from './NoteScreen';
import { format } from 'date-fns';

export default {
  title: 'Components/Organisms/Note Screen',
  component: NoteScreen
} as ComponentMeta<typeof NoteScreen>

const Template: ComponentStory<typeof NoteScreen> = (args) => <NoteScreen {...args}/>

export const Default = Template.bind({})
Default.args = {
  title: 'note title',
  body: 'testing',
  date: parseInt(format(new Date(), 'T'), 10)
}