import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { GlobalStyle, lightTheme, darkTheme } from 'UI';
import { MainPage } from 'pages/MainPage';

export const App = () => {
  const [theme, setTheme] = useState('light');
  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div>React homework template</div>
      <button onClick={switchTheme}>Switch Theme</button>
      <MainPage />
    </ThemeProvider>
  );
};
