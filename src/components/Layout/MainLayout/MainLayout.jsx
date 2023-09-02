import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderLayout } from 'components/HeaderLayout/HeaderLayout';

import { MenuPanel } from 'components/MenuPanel/MenuPanel';
import {
  GridContainer,
  GridMainPanel,
  GridMenuPanel,
  GridUserPanel,
} from './MainLayoutStyled';

import { useWindowSize } from 'hooks';

export const MainLayout = () => {
  const { width } = useWindowSize();

  return (
    <GridContainer>
      <GridMenuPanel> {width > 1024 && <MenuPanel />}</GridMenuPanel>
      <GridUserPanel>
        <HeaderLayout />
      </GridUserPanel>
      <GridMainPanel>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </GridMainPanel>
    </GridContainer>
  );
};
