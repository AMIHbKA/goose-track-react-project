import { CalendarCheckIcon, ChartIcon, UserCheckIcon } from 'UI';
import {
  MenuContainer,
  MenuNav,
  MenuNavLink,
  MenuTitle,
} from './NavigationStyled';

export const Navigation = ({ closeBurgerMenu }) => {
  return (
    <MenuContainer>
      <MenuTitle>User Panel</MenuTitle>
      <MenuNav style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <MenuNavLink to="/account" onClick={closeBurgerMenu}>
          {<UserCheckIcon size={20} stroke="rgb(52 52 52 / 0.5)" />}
          My account
        </MenuNavLink>
        <MenuNavLink to="/calendar" onClick={closeBurgerMenu}>
          {<CalendarCheckIcon size={20} stroke="rgb(52 52 52 / 0.5)" />}
          Calendar
        </MenuNavLink>
        <MenuNavLink to="/statistics" onClick={closeBurgerMenu}>
          {<ChartIcon size={20} fill="rgb(52 52 52 / 0.5)" opacity="1" />}
          Statistics
        </MenuNavLink>
      </MenuNav>
    </MenuContainer>
  );
};
