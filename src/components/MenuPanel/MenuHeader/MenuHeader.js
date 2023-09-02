import { LogoPanel } from 'components/MenuPanel/Logo/LogoPanel';
import { MenuHeaderStyled } from './MenuHeaderStyled';
import { CloseButton } from 'components/BurgerMenu/BurgerMenu.styled';
import logoImage from '../../../UI/images/Goose_logo.png';
import { useWindowSize } from 'hooks';

export const MenuHeader = ({ closeBurgerMenu }) => {
  const { width } = useWindowSize();

  return (
    <MenuHeaderStyled>
      <LogoPanel logoImage={logoImage} logoName="GooseTrack" />
      {width < 1024 && (
        <CloseButton size="24" type="button" onClick={closeBurgerMenu} />
      )}
    </MenuHeaderStyled>
  );
};
