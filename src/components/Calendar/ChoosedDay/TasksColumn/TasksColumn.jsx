import { useState } from 'react';
import { useMobile } from 'hooks';
import { PlusIcon } from 'UI';
import { TaskModal } from 'components';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import TasksColumnStyled from './TasksColumnStyled';
import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';

const TasksColumn = ({ stage, tasks, maxHeight }) => {
  const [isShow, setIsShow] = useState(false);
  const isMobile = useMobile();

  const onShowModal = () => {
    setIsShow(!isShow);
  };

  const status = stage.split(' ').join('-').toLowerCase();

  console.log('status', status)

  const noTasks = !tasks || !tasks.length;

  const tasksLength = tasks?.length || 0;

  return (
    <TasksColumnStyled maxHeight={maxHeight} className="TasksColumnStyled">
      <ColumnHeadBar stage={stage} status={status}/>
      <ColumnsTasksList
        maxHeight={maxHeight}
        noTasks={noTasks}
        tasksLength={tasksLength}
        className="ColumnsTasksList"
      >
        {tasks.map(task => (
          <TaskColumnCard key={task._id} task={task} />
        ))}
        {isMobile && (
          <AddTaskBtn noTasks={noTasks} onClick={onShowModal}>
            <PlusIcon size={24} /> <div>AddTask</div>
          </AddTaskBtn>
        )}
        {isShow && (
          <TaskModal isShow={onShowModal} 
              option="add"
              status={status}
            />
        )}
      </ColumnsTasksList>
      {isMobile || (
        <AddTaskBtn noTasks={noTasks} onClick={onShowModal}>
          <PlusIcon size={24} /> <div>AddTask</div>
        </AddTaskBtn>
      )}
    </TasksColumnStyled>
  );
};

export default TasksColumn;
