import { LogInIcon } from 'UI';
import {
  Header,
  Logo,
  LogoImg,
  LogoTitle,
  LoginLink,
  SignLink,
  LoginLinkText,
} from './AuthSection.styled';

export const AuthSection = () => {
  return (
    <Header>
      <Logo href="/goose-track-react-project">
        <LogoImg
          src={require('../../../UI/icons/goose-mobile.png')}
          alt="logo-img"
        />
        <LogoTitle>
          G<i>oo</i>seTrack
        </LogoTitle>
      </Logo>
      <nav>
        <LoginLink to="/login">
          <LoginLinkText>Log in</LoginLinkText>

          <LogInIcon stroke="#3E85F3" width="18" height="18" />
        </LoginLink>
        <SignLink to="/signup">Sign up</SignLink>
      </nav>
    </Header>
  );
};
