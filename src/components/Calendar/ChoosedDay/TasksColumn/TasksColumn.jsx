import { PlusIcon } from 'UI';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import TasksColumnStyled from './TasksColumnStyled';
import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import { useMobile } from 'hooks';
import { TaskModal } from 'components';
import { useState } from 'react';

const TasksColumn = ({ stage, tasks, maxHeight }) => {
  tasks.splice(9, 50);
  const [showModal, setShowModal] = useState(false);
  const isMobile = useMobile();
  const onShowModal = () => {
    setShowModal(s => !s);
  };

  const noTasks = !tasks || !tasks.length;

  return (
    <TasksColumnStyled maxHeight={maxHeight}>
      <ColumnHeadBar stage={stage} />
      <ColumnsTasksList maxHeight={maxHeight} noTasks={noTasks}>
        {tasks.map(task => (
          <TaskColumnCard key={task._id} task={task} />
        ))}
        {isMobile && (
          <AddTaskBtn noTasks={noTasks} onClick={onShowModal}>
            <PlusIcon size={24} /> <div>AddTask</div>
          </AddTaskBtn>
        )}
        {showModal && <TaskModal isShow={onShowModal} />}
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
