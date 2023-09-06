import styled from 'styled-components';

const TaskCellStyled = styled.div`
  flex-shrink: 0;

  padding: 4px 4px 4px 10px;

  overflow: hidden;

  font-weight: 700;
  font-size: 10px;
  line-height: 14px;

  text-overflow: ellipsis;
  white-space: nowrap;

  border-radius: 8px;

  color: ${({ priority, theme }) =>
    priority === 'high'
      ? theme.colors.highPriority
      : priority === 'medium'
      ? theme.colors.mediumPrioroty
      : theme.colors.lowPriority};

  background-color: ${({ priority, theme }) =>
    priority === 'high'
      ? theme.colors.highPriorityBack
      : priority === 'medium'
      ? theme.colors.mediumPriorotyBack
      : theme.colors.lowPriorityBack};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 4px 6px 4px 6px;

    font-size: 14px;
    line-height: 18px;
  }
`;

export default TaskCellStyled;
