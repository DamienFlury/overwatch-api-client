import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import App from './App';

const lightTheme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    background: ['#ffffff', '#ffffff'],
    primary: ['#19b2ff'],
    secondary: ['#19b2ff'],
    text: '#232323',
    inactive: 'rgba(255, 255, 255, 0.8)'
  },
  shadows: ['0 2px 3px rgba(0, 0, 0, 0.5)', '0 4px 5px rgba(0, 0, 0, 0.5)']
};

const theme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    background: ['#121212', '#232323'],
    primary: ['#19b2ff'],
    secondary: ['#19b2ff'],
    text: '#ffffff',
    inactive: 'rgba(255, 255, 255, 0.8)'
  },
  shadows: ['0 2px 3px rgba(0, 0, 0, 0.5)', '0 4px 5px rgba(0, 0, 0, 0.5)']
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
