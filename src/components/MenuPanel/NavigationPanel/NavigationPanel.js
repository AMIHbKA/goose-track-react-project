import { CalendarCheckIcon, ChartIcon, UserCheckIcon } from 'UI';
import {
  MenuContainer,
  MenuNav,
  MenuNavLink,
  MenuTitle,
} from './NavigationPanelStyled';
import { useTranslation } from 'react-i18next';

export const NavigationPanel = ({ closeBurgerMenu }) => {
  const { t } = useTranslation();

  return (
    <MenuContainer>
      <MenuTitle>{t('navigationPanel.panel')}</MenuTitle>
      <MenuNav style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <MenuNavLink to="/account" onClick={closeBurgerMenu}>
          {<UserCheckIcon size={20} className="strokeIcon" />}
          {t('navigationPanel.account')}
        </MenuNavLink>
        <MenuNavLink to="/calendar" onClick={closeBurgerMenu}>
          {<CalendarCheckIcon size={20} className="strokeIcon" />}
          {t('navigationPanel.calendar')}
        </MenuNavLink>
        <MenuNavLink to="/statistics" onClick={closeBurgerMenu}>
          {<ChartIcon size={20} className="fillIcon" opacity="1" />}
          {t('navigationPanel.statistics')}
        </MenuNavLink>
      </MenuNav>
    </MenuContainer>
  );
};
