import { LogInIcon } from 'UI';
import { Link } from 'react-router-dom';
import { Header, Logo, LogoImg } from './AuthSection.styled';

export const AuthSection = () => {
  return (
    <Header>
      <Logo href="">
        <LogoImg
          src={require('../../../UI/icons/goose-mobile.png')}
          alt="logo-img"
        />
        <strong style={{ fontFamily: 'Coolvetica', fontWeight: 'normal' }}>
          G<i>oo</i>seTrack
        </strong>
      </Logo>
      <nav>
        <Link>
          Log in
          <LogInIcon />
        </Link>
        <Link>Sign up</Link>
      </nav>
    </Header>
  );
};
