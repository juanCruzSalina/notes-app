import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withFormik } from 'storybook-formik'
import LabeledInput from './LabeledInput'

export default {
  title: 'Components/Molecules/Labeled Input',
  component: LabeledInput,
  decorators: [withFormik],
  parameters: {
    formik:{
      initialValue: {
        username: ''
      }
    }
  },
} as ComponentMeta<typeof LabeledInput>

const Template: ComponentStory<typeof LabeledInput> = (args) => <LabeledInput {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'example',
  label: 'Example',
  placeholder: 'Example Input'
}