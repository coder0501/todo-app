// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import MUI ThemeProvider and createTheme

// Create a Material UI theme (optional)
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Example color
    },
    secondary: {
      main: '#dc004e', // Example color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Custom font (optional)
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
);



// Customize the default theme
// const customTheme = deepMerge(chakraTheme, {
//   colors: {
//     brand: {
//       500: '#f6ad55', // Custom brand color
//     },
//   },
// });

// const theme = Theme({
//   colors: {
//     brand: {
//       500: "#f6ad55",
//     },
//   },
// });
