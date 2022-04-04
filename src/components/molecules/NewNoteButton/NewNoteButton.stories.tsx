import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NewNoteButton from './NewNoteButton';

export default {
  title: 'Components/Molecules/Add note button',
  component: NewNoteButton
} as ComponentMeta<typeof NewNoteButton>

const Template: ComponentStory<typeof NewNoteButton> = (args) => <NewNoteButton {...args} />

export const Default = Template.bind({})
Default.args = {}