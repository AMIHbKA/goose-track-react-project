import styled from 'styled-components';

const TasksColumnStyled = styled.div`
  position: relative;

  width: calc(100vw - 40px);

  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}px;`}

  padding: 18px 18px 20px;

  background-color: ${({ theme }) => theme.choosedMonth.dateBackground};

  border: 1px solid ${({ theme }) => theme.choosedMonth.borderColor};
  border-radius: 8px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: calc((100vw - 64px - 16px) / 2);

    padding: 20px;
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    width: calc((100vw - 64px - 289px - (27px * 2)) / 3);
  }
`;

export default TasksColumnStyled;
