import { useSelector, useDispatch } from 'react-redux';
import { toogleTheme } from 'redux/theme/slice';
import { MoonIcon, SunIcon } from 'UI';
import { ThemeButton } from './ThemeToggles';

export const ThemeToggler = () => {
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  const handleOnClick = () => dispatch(toogleTheme);
  return (
    <ThemeButton type="button" onClick={handleOnClick}>
      {theme === 'light' ? <MoonIcon size={24} /> : <SunIcon size={24} />}
    </ThemeButton>
  );
};
