import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import GoogleSignIn from './GoogleSignIn';

export default {
  title: 'Components/Molecules/Google Sign In',
  component: GoogleSignIn
} as ComponentMeta<typeof GoogleSignIn>

const Template: ComponentStory<typeof GoogleSignIn> = (args) => <GoogleSignIn {...args}/>

export const Default = Template.bind({})
Default.args = {}