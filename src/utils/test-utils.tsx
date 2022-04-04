import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme'

import { configureStore } from "@reduxjs/toolkit"

import authReducer from 'features/auth/authSlice'
import uiReducer from 'features/ui/uiSlice'
import notesReducer from 'features/notes/notesSlice'

import { MemoryRouter } from 'react-router-dom'

export const createTestStore = () => {
  const store = configureStore({
    reducer: {
      ui: uiReducer,
      auth: authReducer,
      notes: notesReducer
    },
  })

  return store
;}

const testStore = createTestStore()

const Decorators: FC = ({ children }) => {
  return(
    <Provider store={testStore}>
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          {children}
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, {wrapper: Decorators, ...options})

export * from '@testing-library/react'
export { customRender as render }
export { testStore as store }