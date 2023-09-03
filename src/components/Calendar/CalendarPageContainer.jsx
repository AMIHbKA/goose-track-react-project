import styled from 'styled-components';

const CalendarPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  height: 100%;

  padding-bottom: 32px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-bottom: 24px;
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    padding-bottom: 14px;
  }
`;

export default CalendarPageContainer;
