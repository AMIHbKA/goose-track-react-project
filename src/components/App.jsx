import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { GlobalStyle, lightTheme, darkTheme } from 'UI';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components';

export const App = () => {
  const [theme, setTheme] = useState('light');
  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      {/* <button onClick={switchTheme}>Switch Theme</button> */}
      <Routes>
        <Route
          path="/"
          element={<Layout currentTheme={theme} switchTheme={switchTheme} />}
        >
          <Route index element={<div>MainPage</div>} />
          <Route path="/login" element={<div>LoginPage</div>} />
          <Route path="/register" element={<div>RegisterPage</div>} />
          <Route path="/account" element={<div>AccountPage</div>} />
          <Route path="/calendar" element={<div>CalendarPage</div>}>
            <Route path="day/:currentDay" element={<div>ChoosedDay</div>} />
            <Route
              path="month/:currentDate"
              element={<div>ChoosedMonth</div>}
            />
          </Route>
          <Route path="/statistics" element={<div>StatisticsPage</div>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
