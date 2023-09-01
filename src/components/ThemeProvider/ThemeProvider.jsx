import { useSelector } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'UI';

export const ThemeProvider = ({ children }) => {
  const theme = useSelector(state => state.theme.theme);
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={selectedTheme}>{children}</StyledThemeProvider>
  );
};
