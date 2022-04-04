import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import InputError from './InputError'

export default {
  title: 'Components/Atoms/Input Error',
  component: InputError
} as ComponentMeta<typeof InputError>

const Template: ComponentStory<typeof InputError> = (args) => <InputError {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Invalid Email'
}