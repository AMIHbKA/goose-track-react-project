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
        <LoginLink>
          <LoginLinkText>Log in</LoginLinkText>

          <LogInIcon />
        </LoginLink>
        <SignLink>Sign up</SignLink>
      </nav>
    </Header>
  );
};
