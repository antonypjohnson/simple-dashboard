import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import routes from './Routes';

import { AppProvider } from './context/ThemeContext';

import './index.scss';
import { ThemeProvider } from '@mui/material';
import { createTheme } from './theme/create-theme';

const theme = createTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </AppProvider>
  </StrictMode>,
);
