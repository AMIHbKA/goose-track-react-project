import { LogoPanel } from 'components/MenuPanel/Logo/LogoPanel';
import { MenuHeaderStyled } from './MenuHeaderStyled';
import { CloseButton } from 'components/BurgerMenu/BurgerMenu.styled';
import logoImage from '../../../UI/images/Goose_logo.png';
import { useWindowSize } from 'hooks';
import { useTheme } from 'styled-components';

export const MenuHeader = ({ closeBurgerMenu }) => {
  const { width } = useWindowSize();
  const {
    breakpoints: { laptop },
  } = useTheme();

  const laptopValue = parseInt(laptop);

  return (
    <MenuHeaderStyled>
      <LogoPanel logoImage={logoImage} logoName="GooseTrack" />
      {width < laptopValue && (
        <CloseButton size="24" type="button" onClick={closeBurgerMenu} />
      )}
    </MenuHeaderStyled>
  );
};
