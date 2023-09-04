import { PlusIcon } from 'UI';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import TasksColumnStyled from './TasksColumnStyled';
import { useTheme } from 'styled-components';

const TasksColumn = ({ stage }) => {
  const {
    colors: { mainText },
  } = useTheme();

  return (
    <TasksColumnStyled>
      <ColumnHeadBar stage={stage} />
      <ColumnsTasksList />
      <AddTaskBtn>
        <PlusIcon size={24} stroke={mainText} /> <div>AddTask</div>
      </AddTaskBtn>
    </TasksColumnStyled>
  );
};

export default TasksColumn;
