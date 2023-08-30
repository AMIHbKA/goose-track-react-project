import { LogoPanel } from 'components/MenuPanel/Logo/LogoPanel';
import { MenuHeaderStyled } from './MenuHeaderStyled';
import { CloseButton } from 'components/BurgerMenu/BurgerMenu.styled';
import logoImage from '../../../UI/images/Goose_logo.png';
import { useWindowWidth } from 'hooks/useWindowWidth';

export const MenuHeader = ({ closeBurgerMenu }) => {
  const windowWidth = useWindowWidth();

  return (
    <MenuHeaderStyled>
      <LogoPanel logoImage={logoImage} logoName="GooseTrack" />
      {windowWidth < 1024 && (
        <CloseButton size="24" type="button" onClick={closeBurgerMenu} />
      )}
    </MenuHeaderStyled>
  );
};
