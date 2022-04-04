import React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../../utils/test-utils'
import LabeledInput from './LabeledInput'
import { Formik } from 'formik'

describe('Labeled input', () => {

  const mockHandle = jest.fn()
  test('should render properly', () => {
    const { getByText, getByPlaceholderText } = render(
      <Formik
        initialValues={{}}
        onSubmit={mockHandle}
      >
        <LabeledInput
          name='example'
          placeholder='Example Input'
          label='Example'
          type='text'
          />
      </Formik>
    )
    expect(getByText(/Example/i)).toBeInTheDocument()
    expect(getByPlaceholderText(/Example Input/i)).toBeInTheDocument()
  })
})