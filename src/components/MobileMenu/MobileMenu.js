import Drawer from '@mui/material/Drawer';

export const MobileMenu = ({ children, isOpen, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: 'transparent',
        },
      }}
      slotProps={{
        backdrop: {
          style: {
            transition: 'opacity 0.3s', // Додайте перехід для opacity
            opacity: isOpen ? 0.1 : 0, // Встановіть початкове та кінцеве значення opacity
          },
        },
      }}
    >
      {children}
    </Drawer>
  );
};
