import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginForm from './LoginForm';

export default {
  title: 'Components/Molecules/Login Form',
  component: LoginForm
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args}/>

export const Default = Template.bind({})
Default.args = {
  handleSubmit: (values) => alert(JSON.stringify(values))
}