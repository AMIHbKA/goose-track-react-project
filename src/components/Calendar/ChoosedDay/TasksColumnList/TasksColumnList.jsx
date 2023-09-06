import TasksColumn from './TasksColumn/TasksColumn';
import {
  TasksColumnListContainer,
  TasksColumnListWrapper,
} from './TasksColumnListStyled';

const TasksColumnList = () => {
  const stages = ['To do', 'In progress', 'Done'];

  return (
    <TasksColumnListContainer>
      <TasksColumnListWrapper>
        {stages.map(stage => (
          <TasksColumn key={stage} stage={stage} />
        ))}
      </TasksColumnListWrapper>
    </TasksColumnListContainer>
  );
};

export default TasksColumnList;
