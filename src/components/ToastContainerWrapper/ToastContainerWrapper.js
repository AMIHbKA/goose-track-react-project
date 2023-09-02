import { useTablet } from 'hooks';
import React from 'react';
import { ToastContainer } from 'react-toastify';

export const ToastContainerWrapper = () => {
  const isTablet = useTablet();

  console.log('isTablet', isTablet);

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
