import { useAuth } from 'hooks';
import { UnauthorizedLayout, MainLayout } from 'components';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <MainLayout /> : <UnauthorizedLayout />;
};
