import { useEffect, useState } from 'react';
import { useRect } from 'hooks';
import TasksColumn from '../TasksColumn/TasksColumn';
import {
  TasksColumnListContainer,
  TasksColumnListWrapper,
} from './TasksColumnListStyled';

const stages = ['To do', 'In progress', 'Done'];

const getStageByStatus = status => {
  switch (status) {
    case 'to-do':
      return 'To do';
    case 'in-progress':
      return 'In progress';
    default:
      return 'Done';
  }
};

const TasksColumnList = ({ tasks }) => {
  const [tasksColumnListWrapperHeight, setTasksColumnListWrapperHeight] =
    useState(null);

  const [tasksColumnListContainerRect, tasksColumnListContainerRef] = useRect(
    'resize',
    100,
    100
  );

  useEffect(() => {
    if (!tasksColumnListContainerRect) {
      return;
    }

    setTasksColumnListWrapperHeight(tasksColumnListContainerRect.height - 46);
  }, [tasksColumnListContainerRect]);

  const tasksByStatus = tasks.reduce(
    (acc, task) => {
      acc[getStageByStatus(task.status)].push(task);

      return acc;
    },
    { 'To do': [], 'In progress': [], Done: [] }
  );

  return (
    <TasksColumnListContainer
      className="TasksColumnListContainer"
      ref={tasksColumnListContainerRef}
    >
      {tasksColumnListWrapperHeight && (
        <TasksColumnListWrapper
          maxHeight={tasksColumnListWrapperHeight}
          className="TasksColumnListWrapper"
        >
          {stages.map(stage => (
            <TasksColumn
              key={stage}
              stage={stage}
              tasks={tasksByStatus[stage]}
              maxHeight={tasksColumnListWrapperHeight}
              className="TasksColumn"
            />
          ))}
        </TasksColumnListWrapper>
      )}
    </TasksColumnListContainer>
  );
};

export default TasksColumnList;
