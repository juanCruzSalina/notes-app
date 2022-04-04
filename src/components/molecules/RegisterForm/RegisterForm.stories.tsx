import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import RegisterForm from './RegisterForm';
import withFormik from 'storybook-formik';

export default {
  title: 'Comeponents/Molecules/Register Form',
  component: RegisterForm,
  decorators: [withFormik],
  parameters: {
    formik:{
      initialValue: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },

} as ComponentMeta<typeof RegisterForm>

const Template: ComponentStory<typeof RegisterForm> = (args) => <RegisterForm {...args} />


export const Default = Template.bind({})
Default.args = {
  handleSubmit: (value) => alert(JSON.stringify(value))
}