import TaskCellStyled from './TaskCellStyled';

const TaskCell = ({ task }) => {
  return <TaskCellStyled priority={task.priority}>{task.title}</TaskCellStyled>;
};

export default TaskCell;
