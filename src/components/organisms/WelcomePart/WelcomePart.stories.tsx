import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import WelcomePart from './WelcomePart';

export default {
  title: 'Components/Organisms/Welcome Part',
  component: WelcomePart
} as ComponentMeta<typeof WelcomePart>

const Template: ComponentStory<typeof WelcomePart> = () => <WelcomePart />

export const Default = Template.bind({})
Default.args = {}