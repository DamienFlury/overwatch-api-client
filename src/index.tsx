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
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
