import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withFormik } from 'storybook-formik'
import DatePickerField from './DatePickerField';

export default {
  title: 'Components/Molecules/Date Picker',
  component: DatePickerField,
  decorators: [withFormik],
  parameters: {
    formik:{
      initialValue: {
        date: new Date()
      }
    }
  },

} as ComponentMeta<typeof DatePickerField>

const Template: ComponentStory<typeof DatePickerField> = (args) => <DatePickerField {...args}/>

export const Default = Template.bind({})
Default.args = {
  name: 'date'
}