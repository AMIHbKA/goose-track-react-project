import styled from 'styled-components';

const DateBadge = styled.div`
  padding: 4px 6px;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  ${({ isActive, theme }) =>
    isActive &&
    `
    background-color: ${theme.colors.primary};
    color: ${theme.choosedMonth.todayBadgeTextColor};
    border-radius: 6px;
  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4px 8px;

    font-size: 16px;
    line-height: 18px;

    ${({ isActive }) =>
      isActive &&
      `
    border-radius: 8px;
  `}
  }
`;

export default DateBadge;
