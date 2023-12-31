import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Layout,
  RefreshModal,
  ThemeProvider,
  ToastContainerWrapper,
} from 'components';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { MainPage } from 'pages/MainPage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { GlobalStyle } from 'UI';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';
// import { NotFoundPage } from './NotFoundPage/NotFoundPage';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage'));
const ChoosedMonth = lazy(() => import('./Calendar/ChoosedMonth/ChoosedMonth'));
const ChoosedDay = lazy(() => import('./Calendar/ChoosedDay/ChoosedDay'));
const AccountPage = lazy(() => import('../pages/AccountPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const { isRefreshing } = useAuth();

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch, token]);

  return isRefreshing ? (
    <>
      <RefreshModal onActive={true} />
    </>
  ) : (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            {token ? (
              <>
                <Route
                  index
                  element={<Navigate to="/calendar/month" replace />}
                />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/calendar" element={<CalendarPage />}>
                  <Route path="month" element={<ChoosedMonth />} />
                  <Route path="day" element={<ChoosedDay />} />
                  <Route
                    index
                    element={<Navigate to="/calendar/month" replace />}
                  />
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
  );
};
