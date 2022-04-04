import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import HomePage from './HomePage'

export default {
  title: 'Components/Pages/Home Page',
  component: HomePage
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args}/>
export const Default = Template.bind({})