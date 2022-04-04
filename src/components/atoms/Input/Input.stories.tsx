import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withFormik } from 'storybook-formik'
import Input from './Input'

export default {
  title: 'Components/Atoms/Input',
  component: Input,
  decorators: [withFormik],
  parameters: {
    formik:{
      initialValue: {
        username: ''
      }
    }
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'username',
  placeholder: 'Username'
}