import React from 'react';
import styled from 'styled-components';
import { hoverLinkStyle, shakeAnimation } from 'UI/CommonStyles/baseStyle';

export const LinkButton = ({ children, onClick, type = 'button' }) => {
  return (
    <LinkButtonStyle type={type} onClick={onClick}>
      {children}
    </LinkButtonStyle>
  );
};

const LinkButtonStyle = styled.button`
  display: block;
  margin-inline: auto;
  margin-top: 18px;
  font-size: 12px;
  font-weight: 600;
  line-height: calc(14 / 12);
  text-decoration-line: underline;
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border: transparent;

  ${hoverLinkStyle}
  ${shakeAnimation}

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;
