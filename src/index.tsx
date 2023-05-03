import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider } from './hooks/theme';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider toggleTheme={() => {
      throw new Error('ThemeProvider not found');
    }} theme={{
      title: 'light',
      colors: {
        primary: '#DCDCDC',
        secondary: '#FFFFFF',
        tertiary: '#F5F5F5',

        white: '#000000',
        black: '#FFFFFF',
        gray: '#BFBFBF',

        success: '#03BB85',
        info: '#3B5998',
        warning: '#FF6961',
      }
    }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
