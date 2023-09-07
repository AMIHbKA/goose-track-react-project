import Drawer from '@mui/material/Drawer';
import { useTheme } from 'styled-components';

export const MobileMenu = ({ children, isOpen, onClose }) => {
  const { colors } = useTheme();

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: colors.secondBack,
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
