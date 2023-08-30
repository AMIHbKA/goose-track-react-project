import { CalendarCheckIcon, ChartIcon, UserCheckIcon } from 'UI';
import {
  MenuContainer,
  MenuNav,
  MenuNavLink,
  MenuTitle,
} from './NavigationPanelStyled';

export const NavigationPanel = ({ closeBurgerMenu }) => {
  return (
    <MenuContainer>
      <MenuTitle>User Panel</MenuTitle>
      <MenuNav style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <MenuNavLink to="/account" onClick={closeBurgerMenu}>
          {<UserCheckIcon size={20} className="strokeIcon" />}
          My account
        </MenuNavLink>
        <MenuNavLink to="/calendar" onClick={closeBurgerMenu}>
          {<CalendarCheckIcon size={20} className="strokeIcon" />}
          Calendar
        </MenuNavLink>
        <MenuNavLink to="/statistics" onClick={closeBurgerMenu}>
          {<ChartIcon size={20} className="fillIcon" opacity="1" />}
          Statistics
        </MenuNavLink>
      </MenuNav>
    </MenuContainer>
  );
};
