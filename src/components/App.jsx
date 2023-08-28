import { ThemeProvider } from 'styled-components';
import { useState, lazy } from 'react';
import { GlobalStyle, lightTheme, darkTheme } from 'UI';
import { MainPage } from 'pages/MainPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components';

const StatisticsPage = lazy(() => import('../pages/StatisticsPage'));

export const App = () => {
  const [theme, setTheme] = useState('light');
  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<Layout currentTheme={theme} switchTheme={switchTheme} />}
        >
          <Route index element={<MainPage />} />
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
          <Route path="/statistics" element={<StatisticsPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
