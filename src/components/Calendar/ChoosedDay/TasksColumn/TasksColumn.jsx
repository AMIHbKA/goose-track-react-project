import { useState } from 'react';
import { useMobile } from 'hooks';
import { PlusIcon } from 'UI';
import { TaskModal } from 'components';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import TasksColumnStyled from './TasksColumnStyled';
import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';

import { AddOrEditTaskForm } from 'components/Forms/AddOrEditTaskForm/AddOrEditTaskForm';

const TasksColumn = ({ stage, tasks, maxHeight }) => {
  const [showModal, setShowModal] = useState(false);
  const isMobile = useMobile();
  const onShowModal = () => {
    setShowModal(s => !s);
  };

  const status = stage.split(' ').join('-').toLowerCase()

  const noTasks = !tasks || !tasks.length;

  const tasksLength = tasks?.length || 0;

  return (
    <TasksColumnStyled maxHeight={maxHeight} className="TasksColumnStyled">
      <ColumnHeadBar stage={stage} />
      <ColumnsTasksList
        maxHeight={maxHeight}
        noTasks={noTasks}
        tasksLength={tasksLength}
        className="ColumnsTasksList"
      >
        {tasks.map(task => (
          <TaskColumnCard key={task._id} task={task} stage={stage}/>
        ))}
        {isMobile && (
          <AddTaskBtn noTasks={noTasks} onClick={onShowModal}>
            <PlusIcon size={24} /> <div>AddTask</div>
          </AddTaskBtn>
        )}
        {showModal && <TaskModal isShow={onShowModal}>
          <AddOrEditTaskForm
                onActive={onShowModal}
                option="add"
                status={status}
              /> </TaskModal>}
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
