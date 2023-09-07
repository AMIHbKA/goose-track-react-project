import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { calendarNavLinkStyle, hoverBackgroundStyle } from 'UI';

export const SelectorMonth = styled(NavLink)`
  ${calendarNavLinkStyle}
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  ${hoverBackgroundStyle}

  &:hover {
    color: #fff;
  }
`;

export const SelectorDay = styled(NavLink)`
  ${calendarNavLinkStyle}
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  ${hoverBackgroundStyle}

  &:hover {
    color: #fff;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Text = styled.span`
  color: ${props => props.theme.colors.primary};
`;
