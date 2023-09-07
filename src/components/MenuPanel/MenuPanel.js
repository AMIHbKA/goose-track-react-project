import { NavigationPanel } from 'components/MenuPanel/NavigationPanel/NavigationPanel';
import { MenuHeader } from './MenuHeader/MenuHeader';
import { LogOutButtonStyled, MenuPanelStyled } from './MenuPanelStyled';
import { LogOutIcon } from 'UI';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

export const MenuPanel = ({ closeBurgerMenu }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hangleLogOutClick = () => {
    console.log('hangleLogOutClick');
    dispatch(logOut());
    navigate('login');
  };

  return (
    <MenuPanelStyled>
      <div>
        <MenuHeader closeBurgerMenu={closeBurgerMenu} />
        <NavigationPanel closeBurgerMenu={closeBurgerMenu} />
      </div>
      <LogOutButtonStyled onClick={hangleLogOutClick}>
        {t('buttonLogOut')}
        {<LogOutIcon size={18} />}
      </LogOutButtonStyled>
    </MenuPanelStyled>
  );
};
