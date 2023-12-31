import TaskCell from '../TaskCell/TaskCell';
import TasksContainerStyled from './TasksContainerStyled';

const TasksContainer = ({ tasks }) => {
  return (
    <TasksContainerStyled tasksNumber={tasks.length}>
      {tasks.map(task => (
        <TaskCell key={task._id} task={task}></TaskCell>
      ))}
    </TasksContainerStyled>
  );
};

export default TasksContainer;
