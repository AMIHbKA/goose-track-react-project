import { useAuth, useMobile } from 'hooks';
import { ToastContainer, Flip } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';

export const ToastContainerWrapper = () => {
  const isMobile = useMobile();
  const toastPosition = isMobile ? 'top-center' : 'top-right';
  const theme = useSelector(selectTheme);
  const { isLoggedIn } = useAuth();
  let currentTheme = '';

  if (!isLoggedIn) {
    currentTheme = 'colored';
  } else {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
  }

  return (
    <ToastContainer
      role="alert"
      theme={currentTheme}
      position={toastPosition}
      autoClose={2000}
      limit={3}
      transition={Flip}
      hideProgressBar
    />
  );
};
