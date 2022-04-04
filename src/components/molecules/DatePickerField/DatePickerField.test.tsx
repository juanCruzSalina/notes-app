import React from 'react'
import '@testing-library/jest-dom'
import { render } from "utils/test-utils";
import DatePickerField from './DatePickerField';
import { Form, Formik } from 'formik';

describe('Date Picker tests', () => {
  test('should render properly', () => {
    const mockHandle = jest.fn()
    const { getByPlaceholderText } = render(
      <Formik initialValues={{
        date: ''
      }} onSubmit={mockHandle} >
        <Form>
          <DatePickerField name='date'/>
        </Form>
      </Formik>)
    expect(getByPlaceholderText('mm/dd/yyyy')).toBeInTheDocument()
  })
})