import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import App from './App';

const theme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    background: ['#121212', '#232323'],
    primary: ['#19b2ff'],
    secondary: ['#19b2ff']
  },
  shadows: ['0 2px 3px rgba(0, 0, 0, 0.5)']
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
