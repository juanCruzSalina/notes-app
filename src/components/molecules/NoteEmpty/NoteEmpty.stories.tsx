import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NoteEmpty from './NoteEmpty';

export default {
  title: 'Components/Molecules/No selected Note screen',
  component: NoteEmpty
} as ComponentMeta<typeof NoteEmpty>

const Template: ComponentStory<typeof NoteEmpty> = (args) => <NoteEmpty {...args}/>
export const Default = Template.bind({})
Default.args = {}