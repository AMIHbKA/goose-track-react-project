import styled from 'styled-components';
import {
  authButtonIcon,
  hoverBackgroundStyle,
  LogInIcon,
  LogOutIcon,
  shakeAnimation,
} from 'UI';

export const AuthButton = ({
  text,
  icon = 'register',
  maxw,
  minw,
  maxh,
  minh,
  w,
  h,
  children,
  ...props
}) => {
  let iconComponent;

  switch (icon) {
    case 'register': {
      iconComponent = <LogInIconButton />;
      break;
    }
    case 'logout': {
      iconComponent = <LogOutIconButton />;
      break;
    }
    default:
      break;
  }

  return (
    <AuthButtonStyled {...props}>
      {children}
      {iconComponent}
    </AuthButtonStyled>
  );
};

const AuthButtonStyled = styled.button`
  display: flex;
  width: ${props => props.w || '100%'};
  height: ${props => props.h || '46px'};
  padding-block: 14px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  letter-spacing: -0.28px;
  color: #fff;
  background-color: ${props => props.theme.colors.primary};
  border: transparent;
  border-radius: 16px;
  box-shadow: 4px 2px 16px 0 rgb(136 165 191 / 0.48);
  margin-top: 32px;
  ${hoverBackgroundStyle}
  ${shakeAnimation}

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-block: 16px;
    font-size: 18px;
    height: ${props => props.h || '56px'};
    margin-top: 48px;
  }

  ${props => props.maxw && `max-width: ${props.maxw};`}
  ${props => props.minw && `min-width: ${props.minw};`}
    ${props => props.maxh && `max-height: ${props.maxh};`}
    ${props => props.minh && `min-height: ${props.minh};`}
    ${props => props.mt && `margin-top: ${props.mt};`};
`;

const LogInIconButton = styled(LogInIcon)`
  ${authButtonIcon}
`;

const LogOutIconButton = styled(LogOutIcon)`
  ${authButtonIcon}
`;
