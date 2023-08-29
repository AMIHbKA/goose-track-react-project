import { NavLink } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const MenuContainer = styled.div``;

export const MenuTitle = styled.p`
  margin-bottom: 24px;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors.userPanelLabel};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 50px;
    font-size: 14px;
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const MenuNavLink = styled(NavLink)`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 10px 12px;

  border-radius: 8px;
  font-weight: 600;
  color: ${props => props.theme.colors.userPanelLabel};

  &.active {
    background-color: #dcebf7;
    color: #3e85f3;
    padding: 10px 12px;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 10px;
    padding: 16px 20px;
    font-size: 16px;

    & > svg {
      width: 24px;
      height: 24px;
    }

    &.active {
      padding: 16px 20px;
    }
  }
`;
