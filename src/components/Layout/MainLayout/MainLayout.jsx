import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import { Container } from 'components';

import { HeaderLayout } from 'components/HeaderLayout/HeaderLayout';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { MenuPanel } from 'components/MenuPanel/MenuPanel';
import {
  GridContainer,
  GridMainPanel,
  GridMenuPanel,
  GridUserPanel,
} from './MainLayoutStyled';
import { darkTheme, lightTheme } from 'UI';
import { ThemeProvider } from 'styled-components';

export const MainLayout = () => {
  const windowWidth = useWindowWidth();
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <GridContainer>
      <GridMenuPanel> {windowWidth > 1024 && <MenuPanel />}</GridMenuPanel>
      <GridUserPanel>
        <HeaderLayout currentTheme={theme} switchTheme={switchTheme} />
      </GridUserPanel>
      <GridMainPanel>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </GridMainPanel>
    </GridContainer>
  );
};
