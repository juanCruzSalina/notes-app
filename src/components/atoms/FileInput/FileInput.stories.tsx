import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withFormik } from 'storybook-formik'
import FileInput from './FileInput';

export default {
  title: 'Components/Atoms/File Input',
  component: FileInput,
  decorators: [withFormik],
  parameters: {
    formik:{
      initialValue: {
        image: null
      }
    }
  },

} as ComponentMeta<typeof FileInput>

const Template: ComponentStory<typeof FileInput> = (args) => <FileInput {...args}/>

export const Default = Template.bind({})
Default.args = {
  name: 'image'
}