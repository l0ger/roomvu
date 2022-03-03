import { DefaultTheme } from 'styled-components';
import { Theme } from '../types';

const fontSizes = {
  mobile: {
    h1: '6rem',
    h2: '3.75rem',
    h3: '3rem',
    h4: '2.125rem',
    h5: '1.5rem',
    h6: '1.4rem',
    subheading1: '1rem',
    subheading2: '0.875rem',
    body1: '1.3rem',
    body2: '1rem',
  },
  tablet: {
    h1: '6rem',
    h2: '3.75rem',
    h3: '3rem',
    h4: '2.125rem',
    h5: '1.5rem',
    h6: '1.25rem',
    subheading1: '0.9rem',
    subheading2: '0.875rem',
    body1: '1.1rem',
    body2: '0.875rem',
  },
};
const lightTheme: DefaultTheme = {
  colors: {
    theme: '#d23669',
    bgPrimary: '#eeeeee',
    bgOverlay: '#FFFFFF',
    activeBorderColor: '#FFCADB',
    typoSuccess: '#1D8348',
    typoError: '#B03A2E',
    typoPrimary: '#17202A',
    typoSecondary: '#22223F',
    gray1: '#F8F9F9',
    gray2: '#F2F3F4',
    gray3: '#E5E8E8',
    gray4: '#CACFD2',
    gray5: '#D0D3D4',
    gray6: '#A6ACAF',
    darkgray: '#585858',
  },
  fontSizes,
};

const darkTheme: DefaultTheme = {
  colors: {
    theme: '#FFA7C4',
    bgPrimary: '#282C35',
    bgOverlay: '#282C35',
    activeBorderColor: '#FFCADB',
    borderFocus: '#5DADE2',
    typoSuccess: '#1D8348',
    typoError: '#B03A2E',
    typoPrimary: '#E5E5E6',
    typoSecondary: '#E5E5E6',
    gray1: '#F8F9F9',
    gray2: '#F2F3F4',
    gray3: '#E5E8E8',
    gray4: '#CACFD2',
    gray5: '#D0D3D4',
    gray6: '#A6ACAF',
    darkgray: '#585858',
  },
  fontSizes,
};

const theme: Record<Theme, DefaultTheme> = {
  dark: darkTheme,
  light: lightTheme,
};

export default theme;
