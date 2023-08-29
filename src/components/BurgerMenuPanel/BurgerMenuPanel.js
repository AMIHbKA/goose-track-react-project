import styled from 'styled-components';

import { LogOutIcon } from 'UI';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { Navigation } from 'components/HeaderLayout/Navigation/Navigation';
import { BurgerMenuHeader } from './BurgerMenuHeader/BurgerMenuHeader';

export const BurgerMenuPanel = ({ closeBurgerMenu }) => {
  return (
    <BurgerMenu onActive={closeBurgerMenu}>
      <div>
        <BurgerMenuHeader closeBurgerMenu={closeBurgerMenu} />
        <Navigation closeBurgerMenu={closeBurgerMenu} />
      </div>
      <LogOutButtonStyled>Log Out{<LogOutIcon size={18} />}</LogOutButtonStyled>
    </BurgerMenu>
  );
};

const LogOutButtonStyled = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 14px 28px;
  border-radius: 16px;
  border-width: 0;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-weight: 600;
  line-height: 1.286;
  cursor: pointer;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  transition: background-color 0.3s;

  :hover {
    background-color: #2b78ef;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 16px 23px;

    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;
