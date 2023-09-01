import styled from 'styled-components';

const CalendarPageStyled = styled.div`
  height: 100%;

  padding: 0 20px 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 32px 32px;
  }
`;

export default CalendarPageStyled;
