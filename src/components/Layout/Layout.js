import { useAuth } from 'hooks';
import { UnauthorizedLayout, MainLayout } from 'components';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  console.log('isLoggedIn', isLoggedIn);
  return isLoggedIn ? <MainLayout /> : <UnauthorizedLayout />;
};
