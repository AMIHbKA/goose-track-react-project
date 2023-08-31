import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { debounce } from 'utilities';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const debouncedHandleResize = debounce(handleResize, 1000);
    window.addEventListener('resize', debouncedHandleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);
  return windowSize;
};

export const useTablet = () => {
  const theme = useContext(ThemeContext);
  const windowSize = useWindowSize();
  const tabletSize = parseInt(theme.breakpoints.tablet);
  return windowSize.width >= tabletSize;
};
