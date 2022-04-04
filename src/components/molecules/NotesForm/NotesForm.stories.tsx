import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withFormik } from 'storybook-formik'
import NotesForm from './NotesForm';

export default {
  title: 'Components/Molecules/Notes Form',
  component: NotesForm,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValue: {
        title: '',
        body: '',
        date: 0
      }
    }
  }
} as ComponentMeta<typeof NotesForm>

const Template: ComponentStory<typeof NotesForm> = (args) => <NotesForm {...args}/>

export const Default = Template.bind({})
Default.args = {}