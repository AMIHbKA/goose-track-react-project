import styled from 'styled-components';

const ChoosedMonthBadge = styled.div`
  margin-top: 8px;
  margin-right: 4px;
  margin-left: auto;

  padding: 4px 6px;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  ${({ isToday, theme }) =>
    isToday &&
    `
    background-color: ${theme.colors.primary};
    color: ${theme.choosedMonth.todayBadgeTextColor};
    border-radius: 6px;
  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 14px;
    margin-right: 14px;

    padding: 4px 8px;

    font-size: 16px;
    line-height: 18px;

    ${({ isToday }) =>
      isToday &&
      `
    border-radius: 8px;
  `}
  }
`;

export default ChoosedMonthBadge;
