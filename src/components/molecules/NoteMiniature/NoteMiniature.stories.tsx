import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NoteMiniature from './NoteMiniature';

export default {
  title: 'Components/Molecules/Note Miniature',
  component: NoteMiniature
} as ComponentMeta<typeof NoteMiniature>

const Template: ComponentStory<typeof NoteMiniature> = (args) => <NoteMiniature {...args}/>

export const Default = Template.bind({})
Default.args = {
  title: 'test',
  body: 'test note',
  date: new Date().getTime(),
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjCAXOs65KHtyp8G58oGVA--LZ7yPK3mfy9w&usqp=CAU'
}