import styled from 'styled-components';

export const TasksColumnCardContainer = styled.div`
  padding: 14px 12px 18px 15px;

  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme.choosedDay.taskCardBorderColor};
  background-color: ${({ theme }) => theme.choosedDay.taskCardBackground};
`;

export const TaskColumnCardDescription = styled.div`
  overflow: hidden;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TaskColumnCardBottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin-top: 28px;
`;

export const TaskColumnCardBottomLeft = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  gap: 8px;
`;

export const TaskColumnCardBottomRight = styled.div`
  display: flex;
  gap: 10px;
`;

export const TaskColumnCardBottomAvatar = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  border: 1.8px solid ${({ theme }) => theme.colors.primary};
`;

export const TaskColumnCardPriorityChips = styled.div`
  padding: 4px 12px;

  text-transform: capitalize;

  font-weight: 600;
  font-size: 10px;
  line-height: 12px;

  border-radius: 4px;

  color: ${({ theme }) => theme.colors.mainBack};

  background-color: ${({ theme, priority }) =>
    priority === 'high'
      ? theme.colors.highPriority
      : priority === 'medium'
      ? theme.colors.mediumPrioroty
      : theme.colors.lowPriority};
`;

export const TaskColumnCardButton = styled.div`
  cursor: pointer;
`;
