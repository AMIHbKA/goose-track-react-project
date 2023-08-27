import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from 'components';
import { HeaderLayout } from 'components/HeaderLayout/HeaderLayout';

export const Layout = ({ currentTheme, switchTheme }) => {
  return (
    <>
      <HeaderLayout currentTheme={currentTheme} switchTheme={switchTheme} />
      <main
        style={{
          paddingRight: 20,
          paddingLeft: 20,
          paddingBottom: 20,
        }}
      >
        <Container outline>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
