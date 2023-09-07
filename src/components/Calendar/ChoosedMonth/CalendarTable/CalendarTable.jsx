import styled from 'styled-components';

const CalendarTable = styled.div`
  position: absolute;

  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(7, 1fr);

  background-color: ${({ theme }) => theme.choosedMonth.borderColor};

  border: 1px solid ${({ theme }) => theme.choosedMonth.borderColor};
  border-radius: 8px;

  overflow: hidden;

  > div {
    :first-child::after {
      border-top-left-radius: 6px;
    }
    :nth-child(7)::after {
      border-top-right-radius: 6px;
    }
    :last-child::after {
      border-bottom-right-radius: 6px;
    }
    :nth-last-child(7)::after {
      border-bottom-left-radius: 6px;
    }
  }
`;

export default CalendarTable;
