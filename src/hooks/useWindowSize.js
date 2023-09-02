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
  const size = parseInt(theme.breakpoints.tablet);
  const nextSize = parseInt(theme.breakpoints.laptop);

  return windowSize.width >= size && windowSize.width < nextSize;
};

export const useLaptop = () => {
  const theme = useContext(ThemeContext);
  const windowSize = useWindowSize();
  const size = parseInt(theme.breakpoints.laptop);
  return windowSize.width >= size;
};

export const useMobile = () => {
  const theme = useContext(ThemeContext);
  const windowSize = useWindowSize();
  const size = parseInt(theme.breakpoints.preTablet);
  return windowSize.width <= size;
};

export const useUpToSize = width => {
  const windowSize = useWindowSize();
  const size = parseInt(width);
  return windowSize.width < size;
};

export const useFromSize = width => {
  const windowSize = useWindowSize();
  const size = parseInt(width);
  return windowSize.width >= size;
};
