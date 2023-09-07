import { useTheme } from 'styled-components';
import { PlusIcon } from 'UI';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import TasksColumnStyled from './TasksColumnStyled';
import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import { useMobile } from 'hooks';

const TasksColumn = ({ stage, tasks, maxHeight }) => {
  const {
    colors: { mainText },
  } = useTheme();

  tasks.splice(9, 50);

  const isMobile = useMobile();

  const noTasks = !tasks || !tasks.length;

  return (
    <TasksColumnStyled maxHeight={maxHeight}>
      <ColumnHeadBar stage={stage} />
      <ColumnsTasksList maxHeight={maxHeight} noTasks={noTasks}>
        {tasks.map(task => (
          <TaskColumnCard key={task._id} task={task} />
        ))}
        {isMobile && (
          <AddTaskBtn noTasks={noTasks}>
            <PlusIcon size={24} /> <div>AddTask</div>
          </AddTaskBtn>
        )}
      </ColumnsTasksList>
      {isMobile || (
        <AddTaskBtn noTasks={noTasks}>
          <PlusIcon size={24} /> <div>AddTask</div>
        </AddTaskBtn>
      )}
    </TasksColumnStyled>
  );
};

export default TasksColumn;
