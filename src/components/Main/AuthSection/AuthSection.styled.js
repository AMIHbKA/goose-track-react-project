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
`;

export const Logo = styled.a`
  display: inline-block;
  margin-bottom: 32px;
`;

export const LogoImg = styled.img`
  width: 142px;
  height: 142px;
  margin: 0 auto;
`;

export const LogoTitle = styled.strong`
  font-family: 'Coolvetica';
  font-weight: normal;
  font-size: 44px;
  color: #fff;
  line-height: calc(48 / 44);
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
`;

export const LoginLinkText = styled.span`
  display: block;
`;

export const SignLink = styled(Link)`
  display: block;
  text-decoration: underline;
  color: #fff;
`;
