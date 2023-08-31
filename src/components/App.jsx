import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { GlobalStyle, lightTheme, darkTheme } from 'UI';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CalendarPage from 'pages/CalendarPage';

export const App = () => {
  const [theme, setTheme] = useState('light');
  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <div>React homework template</div>
        <button onClick={switchTheme}>Switch Theme</button>
        <CalendarPage />
      </ThemeProvider>
    </LocalizationProvider>
  );
};
