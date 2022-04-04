import React from 'react'
import '@testing-library/jest-dom'
import { render } from 'utils/test-utils'
import FileInput from './FileInput'
import { Form, Formik } from 'formik'
import userEvent from '@testing-library/user-event'
import Button from '../Button/Button'

describe('Input for images test', () => {
  test('should render properly', () => {
    const mockHandle = jest.fn()
    const { getByText } = render(
      <Formik initialValues={{
        Image: null
      }} onSubmit={mockHandle} >
        <Form>
          <FileInput name='image'/>
        </Form>
      </Formik>)
    expect(getByText(/add file/i)).toBeInTheDocument()
  })

  test('should get the file', async () => {
    const mockHandle = jest.fn()
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    const image =userEvent.setup()

    const { getByText, getByPlaceholderText, getByRole } = render(
      <Formik initialValues={{
        image: null
      }} onSubmit={(value) => mockHandle(value)} >
        <Form>
          <FileInput name='image'/>
          <Button isSubmit >submit</Button>
        </Form>
      </Formik>
    )
    await image.click(getByText(/add file/i))
    await userEvent.upload(getByPlaceholderText('image'), file)
    await image.click(getByRole('button', {name: /submit/i}))

  })
})