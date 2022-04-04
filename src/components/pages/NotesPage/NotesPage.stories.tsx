import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NotesPage from './NotesPage';

export default {
  title: 'Components/Pages/Notes Pages',
  component: NotesPage
} as ComponentMeta<typeof NotesPage>

const Template: ComponentStory<typeof NotesPage> = () => <NotesPage />
export const Default = Template.bind({})
Default.args = {}