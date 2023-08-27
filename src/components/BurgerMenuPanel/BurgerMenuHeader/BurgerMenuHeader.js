import { LogoPanel } from 'components/HeaderLayout/Logo/LogoPanel';
import { CloseButton } from '../BurgerMenu/BurgerMenu.styled';
import styled from 'styled-components';

export const BurgerMenuHeader = ({ closeBurgerMenu }) => {
  return (
    <MenuHeader>
      <LogoPanel />
      <CloseButton size="24" type="button" onClick={closeBurgerMenu} />
    </MenuHeader>
  );
};

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;
  & > svg {
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 34px;
      height: 34px;
    }
  }
`;
