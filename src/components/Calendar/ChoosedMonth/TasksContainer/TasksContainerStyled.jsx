import styled from 'styled-components';

const TasksContainerStyled = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  gap: 5px;

  margin-top: ${({ tasksNumber }) => (tasksNumber > 1 ? '5px' : '18px')};
  margin-left: 2px;
  margin-right: 2px;
  margin-bottom: 2px;

  overflow-y: auto;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: 4px;
    margin-right: 4px;
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    margin-left: 8px;
    margin-right: 8px;
  }
`;

export default TasksContainerStyled;
