import { PlusIcon } from 'UI';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import TasksColumnStyled from './TasksColumnStyled';
import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import { useMobile } from 'hooks';
import { Modal } from 'components';
import { AddOrEditTaskForm } from 'components/Forms/AddOrEditTaskForm/AddOrEditTaskForm';
import { useState } from 'react';

const TasksColumn = ({ stage, tasks, maxHeight }) => {
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
        {showModal && (
          <Modal onActive={onShowModal}>
            <AddOrEditTaskForm onActive={onShowModal} />
          </Modal>
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