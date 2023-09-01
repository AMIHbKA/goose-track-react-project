import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  // ToastContainerWrapper,

  Layout,
  ThemeProvider,
} from 'components';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { MainPage } from 'pages/MainPage';
import { GlobalStyle } from 'UI';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  console.log('app isLoggedIn', isLoggedIn);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <ThemeProvider>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          {isLoggedIn ? (
            <>
              <Route path="/account" element={<div>AccountPage</div>} />

              <Route path="/calendar" element={<div>CalendarPage</div>}>
                <Route path="day/" element={<div>ChoosedDay</div>} />
                <Route path="month/" element={<div>ChoosedMonth</div>} />
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
    </ThemeProvider>
  );
};
