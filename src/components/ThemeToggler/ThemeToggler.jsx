import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { toogleTheme } from 'redux/theme/slice';
import { MoonIcon, SunIcon } from 'UI';
import { ThemeButton } from './ThemeTogglerStyles';

export const ThemeToggler = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleOnClick = () => dispatch(toogleTheme());

  return (
    <ThemeButton type="button" onClick={handleOnClick}>
      {theme === 'light' ? (
        <MoonIcon className="moon" size={24} />
      ) : (
        <SunIcon className="sun" size={24} />
      )}
    </ThemeButton>
  );
};
