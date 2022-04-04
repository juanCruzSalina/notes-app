import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render } from '../../../utils/test-utils'
import Input from './Input'
import { Formik } from 'formik'

describe('Input component tests', () => {

  test('should render properly', async () => {
    const mockHandle = jest.fn()

    const { getByPlaceholderText } = render(
      <Formik initialValues={{
        test: ''
      }} onSubmit={mockHandle} >
        <Input placeholder='text placeholder' name='test' type='text'/>
      </Formik>)
    expect(getByPlaceholderText(/text placeholder/i)).toBeInTheDocument()
  })

  test('should change value', async () => {
    const input = userEvent.setup()
    const mockHandle = jest.fn()
    const { getByPlaceholderText } = render(
      <Formik initialValues={{
        test: ''
      }} onSubmit={mockHandle} >
        <Input placeholder='text placeholder' name='test' type='text'/>
      </Formik>
    )
    await input.type(getByPlaceholderText(/text placeholder/i), 'text')
    expect(getByPlaceholderText(/text placeholder/i)).toHaveValue('text')
  })

  test('should allow to erase text', async () => {

    const input = userEvent.setup()
    const mockHandle = jest.fn()

    const { getByPlaceholderText } = render(
      <Formik initialValues={{
        test: ''
      }} onSubmit={mockHandle} >
        <Input placeholder='text placeholder' name='test' type='text'/>
      </Formik>
    )
    await input.type(getByPlaceholderText(/text placeholder/i), 'text')
    expect(getByPlaceholderText(/text placeholder/i)).toHaveValue('text')

    await input.clear(getByPlaceholderText(/text placeholder/i))
    expect(getByPlaceholderText(/text placeholder/i)).toHaveValue('')
  })
})