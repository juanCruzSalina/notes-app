import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#f7b538',
    secondary: '#143601',
    light: '#F8F7F9',
    dark: '#0B0B09',
    white: '#fff',
    black: '#000',
    error: '#9d0208',
    'grey-100': '#333231',
    'grey-200': '#5A5A59',
    'grey-300': '#828181',
    'grey-400': '#A9A8A9',
    'grey-500': '#D1D0D1',
    'grey-600': '#ebebeb',
    'grey-700': '#f5f5f5',
  },
  spacing: {
    xxs: '1rem',
    xs: '1.25rem',
    s: '1.5rem',
    m: '2rem',
    l: '3rem',
    xl: '4rem',
    xxl: '5rem',
  },
  measures: {
    xxs: '1rem',
    xs: '1.25rem',
    s: '1.5rem',
    m: '2rem',
    l: '3rem',
    xl: '6rem',
    xxl: '8rem',
  },
  fontSizes: {
    xxs: '0.25rem',
    xs: '0.5rem',
    s: '0.75rem',
    m: '1rem',
    l: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  radius: {
    rounded: '30px',
    squared: '0',
  },
  shadows: {
    withShadow: '0.5rem 0.25rem 0.5rem #0002;',
    withoutShadow: 'none',
  },
};

export default theme;
