import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { GlobalStyle, lightTheme, darkTheme } from 'UI';
import { Modal } from 'components';

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const onShowModal = () => {
    setShowModal(s => !s);
  };

  const [theme, setTheme] = useState('light');
  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div>React homework template</div>
      <button onClick={switchTheme}>Switch Theme</button>
    </ThemeProvider>
  );
};
