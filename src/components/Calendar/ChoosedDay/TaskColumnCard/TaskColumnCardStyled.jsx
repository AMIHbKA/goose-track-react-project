import styled from 'styled-components';

const TasksColumnCardContainer = styled.div`
  padding: 14px 12px 18px 15px;

  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme.choosedDay.taskCardBorderColor};
  background-color: ${({ theme }) => theme.choosedDay.taskCardBackground};
`;

export default TasksColumnCardContainer;
