import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Image from './Image'

export default {
  title: 'Components/Atoms/Image',
  component: Image
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => <Image {...args}/>

export const Default = Template.bind({})
Default.args = {
  alt: 'alt-test',
  source: 'https://evalart.com/wp-content/uploads/2018/10/16pf.jpg'
}