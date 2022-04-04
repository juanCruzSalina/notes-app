import React from 'react'
import { ThemeProvider } from "styled-components"
import theme from './../src/theme/theme'
import GlobalStyle from '../src/theme/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from '../src/app/store'
import { BrowserRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
            <Story />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
]