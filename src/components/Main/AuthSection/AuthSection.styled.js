import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  text-align: center;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.laptopL}) {
    padding: 187px 200px 200px;
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
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

export const LoginLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 14px 33px;
  border-radius: 16px;
  gap: 6px;
  color: #3e85f3;
  background-color: #fff;
  margin-bottom: 16px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 0;
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
