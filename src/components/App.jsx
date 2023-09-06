import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout, ThemeProvider, ToastContainerWrapper } from 'components';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { MainPage } from 'pages/MainPage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { GlobalStyle } from 'UI';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage'));
const ChoosedMonth = lazy(() => import('./Calendar/ChoosedMonth/ChoosedMonth'));
const ChoosedDay = lazy(() => import('./Calendar/ChoosedDay/ChoosedDay'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense fallback={<loader />}>
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Layout />}>
              {isLoggedIn ? (
                <>
                  <Route path="/account" element={<div>AccountPage</div>} />
                  <Route path="/calendar" element={<CalendarPage />}>
                    <Route path="month" element={<ChoosedMonth />} />
                    <Route path="day" element={<ChoosedDay />} />
                  </Route>
                  <Route path="/statistics" element={<StatisticsPage />} />
                  <Route
                    path="*"
                    element={<Navigate to="/calendar/month" replace />}
                  />
                </>
              ) : (
                <>
                  <Route index element={<MainPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="*" element={<Navigate to="/login" replace />} />
                </>
              )}
            </Route>
          </Routes>
        </LocalizationProvider>
        <ToastContainerWrapper />
      </ThemeProvider>
    </Suspense>
  );
};
