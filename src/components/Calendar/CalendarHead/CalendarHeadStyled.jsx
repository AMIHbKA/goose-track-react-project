import styled from 'styled-components';

const CalendarHeadStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  width: 100%;

  margin-bottom: 14px;

  padding: 17px 0 16px;

  background-color: ${({ theme }) => theme.choosedMonth.dateBackground};

  border: 1px solid ${({ theme }) => theme.choosedMonth.borderColor};
  border-radius: 8px;
`;

export default CalendarHeadStyled;
