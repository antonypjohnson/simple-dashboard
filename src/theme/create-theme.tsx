import { extendTheme, type Theme } from '@mui/material/styles';
// import { components } from './core/components';

export function createTheme(): Theme {
  const initialTheme = {
    typography: {
      fontFamily: "'Noto Sans', sans-serif",
    },
    // components,
    cssVarPrefix: '',
    shape: { borderRadius: 8 },
  };
  const theme = extendTheme(initialTheme);

  return theme;
}
