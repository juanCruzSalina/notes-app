import React from 'react'
import { useField } from 'formik'
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDateFns'
import { TextField } from '@mui/material'

interface IDate {
  name: string
}

const DatePickerField: React.FC<IDate> = (props) => {

  const [field,  ,helper] = useField(props.name)
  const { setValue } = helper

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DesktopDatePicker
        value={field.value}
        onChange={date => setValue(date, true)}
        renderInput={
          (params) => (
            <TextField
            name={props.name}
            {...params}
            />
          )
        }
      />
    </LocalizationProvider>
  )
}

export default DatePickerField