import { Suspense, useEffect, useRef, useState } from 'react';
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
import { useTheme } from 'styled-components';

export const MainLayout = () => {
  const { width, height } = useWindowSize();
  const gridMenuPanelRef = useRef(null);
  const gridUserPanelRef = useRef(null);
  const gridMainPanelRef = useRef(null);

  const {
    breakpoints: { laptop },
  } = useTheme();

  const laptopValue = parseInt(laptop);

  const [dimensionsUserPanel, setDimensionsUserPanel] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const getDimensions = (ref, setDimensions) => {
      const element = ref.current;
      if (element) {
        const width = element.offsetWidth;
        const height = element.offsetHeight;
        setDimensions({ width, height });
      }
    };

    getDimensions(gridUserPanelRef, setDimensionsUserPanel);
  }, []);

  return (
    <GridContainer>
      <GridMenuPanel ref={gridMenuPanelRef}>
        {width > laptopValue && <MenuPanel />}
      </GridMenuPanel>
      <GridUserPanel ref={gridUserPanelRef}>
        <HeaderLayout />
      </GridUserPanel>
      <GridMainPanel
        ref={gridMainPanelRef}
        style={{
          height: height ? height - dimensionsUserPanel.height : '',
        }}
      >
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </GridMainPanel>
    </GridContainer>
  );
};
