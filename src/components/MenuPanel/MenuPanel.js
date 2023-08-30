import { NavigationPanel } from 'components/MenuPanel/NavigationPanel/NavigationPanel';
import { MenuHeader } from './MenuHeader/MenuHeader';
import { LogOutButtonStyled, MenuPanelStyled } from './MenuPanelStyled';
import { LogOutIcon } from 'UI';

export const MenuPanel = ({ closeBurgerMenu }) => {
  return (
    <MenuPanelStyled>
      <div>
        <MenuHeader closeBurgerMenu={closeBurgerMenu} />
        <NavigationPanel closeBurgerMenu={closeBurgerMenu} />
      </div>
      <LogOutButtonStyled>Log Out{<LogOutIcon size={18} />}</LogOutButtonStyled>
    </MenuPanelStyled>
  );
};
