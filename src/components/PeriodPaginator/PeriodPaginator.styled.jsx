import { ChevronLeftIcon, ChevronRightIcon } from 'UI';
import styled from 'styled-components';

export const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.preTablet}) {
    margin-bottom: 18px;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: auto;
  }
`;

export const Box = styled.div`
  border-radius: 8px;
  padding: 8px 12px;
  margin-right: 8px;
  background-color: ${props => props.theme.colors.primary};
`;

export const ActionBox = styled.div`
  display: flex;
  padding-right: 8px;
  padding-left: 8px;
  justify-content: space-between;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  width: 76px;
  align-items: center;
  background-color: ${props => props.theme.calendarToolBar.iconBackground};
  cursor: pointer;
`;


export const IconLeft = styled(ChevronLeftIcon)`
  stroke: ${props => props.theme.calendarToolBar.iconInactive};

  &:hover {
    stroke: ${props => props.theme.colors.mainText};
  }
`;

export const IconRight = styled(ChevronRightIcon)`
  stroke: ${props => props.theme.calendarToolBar.iconInactive};

  &:hover {
    stroke: ${props => props.theme.colors.mainText};
  }
`;

