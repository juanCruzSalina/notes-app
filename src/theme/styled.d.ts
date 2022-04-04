// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    spacing: Spacing;
    measures: Spacing;
    shadows: Shadows;
    radius: Radius;
    fontSizes: FontSizes;
  }
}

interface Spacing {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}

interface FontSizes {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}
interface Radius {
  rounded: string;
  squared: string;
}
interface Shadows {
  withShadow: string;
  withoutShadow: string;
}

export interface Colors {
  primary: string;
  secondary: string;
  light: string;
  dark: string;
  white: string;
  black: string;
  error: string;
  'grey-100': string;
  'grey-200': string;
  'grey-300': string;
  'grey-400': string;
  'grey-500': string;
  'grey-600': string;
  'grey-700': string;
}
