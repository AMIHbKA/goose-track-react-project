import styled from 'styled-components';

const CalendarHeadStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  width: 100%;

  margin-top: 24px;
  margin-bottom: 14px;

  ${({ condensed }) =>
    condensed ? `padding: 15px 0 14px;` : `padding: 17px 0 16px;`};

  background-color: ${({ theme }) => theme.choosedMonth.dateBackground};

  border: 1px solid ${({ theme }) => theme.choosedMonth.borderColor};
  border-radius: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 32px;

    ${({ condensed }) =>
      condensed ? `padding: 11px 0 10px;` : `padding: 15px 0 14px;`};
  }
`;

export default CalendarHeadStyled;
