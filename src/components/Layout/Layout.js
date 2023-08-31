import { Suspense } from 'react';
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
  Main,
} from './LayoutStyled';

export const Layout = ({ currentTheme, switchTheme }) => {
  const windowWidth = useWindowWidth();

  return (
    <GridContainer>
      <GridMenuPanel> {windowWidth > 1024 && <MenuPanel />}</GridMenuPanel>
      <GridUserPanel>
        <HeaderLayout currentTheme={currentTheme} switchTheme={switchTheme} />
      </GridUserPanel>
      <GridMainPanel>
        <Main>
          {/* <Container outline> */}
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
          {/* </Container> */}
        </Main>
      </GridMainPanel>
    </GridContainer>
  );
};
