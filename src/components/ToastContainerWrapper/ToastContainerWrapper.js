import React from 'react';
import { useTablet } from 'hooks/useWindowSize';
import { ToastContainer } from 'react-toastify';

export const ToastContainerWrapper = () => {
  const isTablet = useTablet();
  const toastPosition = isTablet ? 'top-center' : 'bottom-center';
  return (
    <ToastContainer
      theme="colored"
      position={toastPosition}
      autoClose={2000}
      limit={3}
      hideProgressBar
    />
  );
};
