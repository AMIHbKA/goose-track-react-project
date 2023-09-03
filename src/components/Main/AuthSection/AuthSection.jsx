import { Container } from 'components';
import React from 'react';
import { LogInIcon } from 'UI';
import logoGooseMob from '../../../UI/images/goose-mob.png';
import logoGooseMob2x from '../../../UI/images/goose-mob@2x.png';
import logoGooseTab from '../../../UI/images/goose-tab.png';
import logoGooseTab2x from '../../../UI/images/goose-tab@2x.png';

import {
  MainSection,
  Logo,
  LogoImg,
  LogoTitle,
  LoginLink,
  SignLink,
  LoginLinkText,
  LinkContainer,
} from './AuthSection.styled';

export const AuthSection = () => {
  return (
    <MainSection>
      <Container outline>
        <Logo href="/goose-track-react-project">
          <LogoImg>
            <source
              media="(min-width: 768px)"
              srcSet={`${logoGooseTab}, ${logoGooseTab2x} 2x`}
            />
            <source
              media="(min-width: 375px)"
              srcSet={`${logoGooseMob}, ${logoGooseMob2x} 2x,`}
            />
            <img src={`${logoGooseMob}`} alt="logo" />
          </LogoImg>
          <LogoTitle>
            G<i>oo</i>seTrack
          </LogoTitle>
        </Logo>
        <LinkContainer>
          <LoginLink to="/login">
            <LoginLinkText>Log in</LoginLinkText>

            <LogInIcon stroke="#3E85F3" width="18" height="18" />
          </LoginLink>
          <SignLink to="/register">Sign up</SignLink>
        </LinkContainer>
      </Container>
    </MainSection>
  );
};
