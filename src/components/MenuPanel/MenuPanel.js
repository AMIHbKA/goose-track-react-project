import { NavigationPanel } from 'components/MenuPanel/NavigationPanel/NavigationPanel';
import { MenuHeader } from './MenuHeader/MenuHeader';
import { LogOutButtonStyled, MenuPanelStyled } from './MenuPanelStyled';
import { LogOutIcon } from 'UI';
// import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { logOut, refreshUser } from 'redux/auth/operations';
import { useNavigate } from 'react-router';

export const MenuPanel = ({ closeBurgerMenu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hangleLogOutClick = () => {
    console.log('hangleLogOutClick');
    dispatch(logOut());
    // dispatch(refreshUser());
    navigate('/');
  };

  return (
    <MenuPanelStyled>
      <div>
        <MenuHeader closeBurgerMenu={closeBurgerMenu} />
        <NavigationPanel closeBurgerMenu={closeBurgerMenu} />
      </div>
      <LogOutButtonStyled onClick={hangleLogOutClick}>
        Log Out{<LogOutIcon size={18} />}
      </LogOutButtonStyled>
    </MenuPanelStyled>
  );
};
