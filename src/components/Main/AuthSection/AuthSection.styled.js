import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainSection = styled.section`
  position: relative;
  text-align: center;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 25px;
    right: 25px;
  }
`;

export const Logo = styled.a`
  display: inline-block;
  margin-bottom: 32px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 40px;
  }
`;

export const LogoImg = styled.picture`
  display: block;
  width: 142px;
  height: 142px;
  margin: 0 auto;
  border-radius: 100px;

  img {
    width: 100%;
  }
`;

export const LogoTitle = styled.strong`
  font-family: 'Coolvetica';
  font-weight: normal;
  font-size: 44px;
  color: #fff;
  line-height: calc(48 / 44);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 100px;
    line-height: calc(130 / 100);
  }
`;

export const LinkContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 24px;
  }
`;

export const LoginLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 131px;
  height: 46px;
  align-items: center;
  border-radius: 16px;
  gap: 6px;
  color: #3e85f3;
  background-color: #fff;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 121px;
    height: 49px;
  }
`;

export const LoginLinkText = styled.span`
  display: block;
`;

export const SignLink = styled(Link)`
  display: block;
  text-decoration: underline;
  color: #fff;
`;
