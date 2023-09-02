import { useAuth, useTablet } from 'hooks';
import { ToastContainer, Zoom, Flip } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';

export const ToastContainerWrapper = () => {
  const isTablet = useTablet();
  const toastPosition = isTablet ? 'top-right' : 'top-center';
  const theme = useSelector(selectTheme);
  const { isLoggedIn } = useAuth();
  let currentTheme = '';

  if (!isLoggedIn) {
    currentTheme = 'colored';
  } else {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
  }

  console.log('theme', theme);
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
