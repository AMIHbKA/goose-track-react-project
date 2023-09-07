import { NavLink } from 'react-router-dom';
import { shakeAnimation } from 'UI/CommonStyles/baseStyle';

const { default: styled } = require('styled-components');

export const MenuContainer = styled.div``;

export const MenuTitle = styled.p`
  margin-bottom: 24px;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors.userPanelLabel};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 32px;
    font-size: 14px;
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    margin-bottom: 32px;
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    gaap: 16px;
  }
`;

export const MenuNavLink = styled(NavLink)`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 10px 12px;

  border-radius: 8px;
  font-weight: 600;
  color: ${props => props.theme.colors.userPanelMainText};

  & > .strokeIcon {
    stroke: ${props => props.theme.colors.userPanelMainText};
  }
  & > .fillIcon {
    fill: ${props => props.theme.colors.userPanelMainText};
  }

  &.active {
    background-color: ${props => props.theme.colors.userPanelActiveBack};
    color: ${props => props.theme.colors.userPanelActiveText};
    padding: 10px 12px;

    & > .strokeIcon {
      stroke: ${props => props.theme.colors.userPanelActiveText};
    }
    & > .fillIcon {
      fill: ${props => props.theme.colors.userPanelActiveText};
    }
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

    ${shakeAnimation}

    &:hover {
      /* color: ${({ theme }) => theme.colors.primary}; */
      /* transform: ; */
      animation: shake 0.5s;
    }
    /* 
    &:hover .fillIcon {
      fill: ${({ theme }) => theme.colors.primary};
    }

    &:hover .strokeIcon {
      stroke: ${({ theme }) => theme.colors.primary};
    } */
  }
`;
