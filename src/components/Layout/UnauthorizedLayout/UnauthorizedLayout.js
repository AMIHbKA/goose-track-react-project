import { Suspense } from 'react';
import { Outlet } from 'react-router';

export const UnauthorizedLayout = () => {
  return (
    <main>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};
