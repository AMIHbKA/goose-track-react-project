import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { useMobile } from 'hooks';
import { selectUser } from 'redux/auth/selectors';
import { TaskModal } from 'components';
import {
  TasksColumnCardContainer,
  TaskColumnCardDescription,
  TaskColumnCardBottom,
  TaskColumnCardBottomLeft,
  TaskColumnCardBottomRight,
  TaskColumnCardBottomAvatar,
  TaskColumnCardPriorityChips,
  TaskColumnCardButton,
} from './TaskColumnCardStyled';

import { ArrowCircleBrokenRightIcon, PencilIcon, TrashIcon } from 'UI/index';
import { useDispatch } from 'react-redux';
import { deleteTask, fetchTasks, updateTask } from 'redux/tasks/operations';
import { notify } from 'utilities';
import Popup from 'reactjs-popup';
import {
  PopUpButton,
  PopUpMenuItem,
  PopUpWrap,
} from 'components/PopUpStateMenu/PopUpStateMenuStyled';


const TaskColumnCard = ({ task }) => {
  const user = useSelector(selectUser);

  const theme = useTheme();

  const isMobile = useMobile();

  const [isShow, setIsShow] = useState(false);

  const { title, start, end, date, priority, status, _id } = task;

  const year = new Date(date).getFullYear();
        console.log('year', year)
        const month = new Date(date).getMonth() + 1;
        console.log('month', month)
        const day = new Date(date).getDate();

  const dispatch = useDispatch();

  const onShowModal = () => {
    setIsShow(!isShow);
  };

  const deleteCurrentTask = () => {
    dispatch(deleteTask(_id))
      // .then(()=> dispatch(fetchTasks({ year, month, day })))
      .then(() => notify('success', 'The task was deleted successfully'))
      .catch(e => notify('error', 'An error occurred deleting this task'));
  };

  const updateTaskStatus = (update) => {
    const updatedTask = {title, start, end, date, priority, status: update}
    const id = _id
    dispatch(updateTask({id, updatedTask}))
      // .then(()=> dispatch(fetchTasks({ year, month, day })))
      .then(() => notify('success', 'The task status was updated'))
      .catch(e => notify('error', 'An error occurred updating this task'));
  }

  const iconSize = isMobile ? 14 : 16;

  //
  const ref = useRef();
  const openTooltip = () => {
    ref.current.open();

  };
  //

  return (
    <TasksColumnCardContainer>
      <TaskColumnCardDescription>{task.title}</TaskColumnCardDescription>
      <TaskColumnCardBottom>
        <TaskColumnCardBottomLeft>
          <TaskColumnCardBottomAvatar>
            <img src={user.avatarUrl} alt="User avatar" />
          </TaskColumnCardBottomAvatar>
          <TaskColumnCardPriorityChips priority={task.priority}>
            {task.priority}
          </TaskColumnCardPriorityChips>
        </TaskColumnCardBottomLeft>
        <TaskColumnCardBottomRight>
          <TaskColumnCardButton onClick={openTooltip}>
            <ArrowCircleBrokenRightIcon
              size={iconSize}
              stroke={theme.choosedDay.taskIconColor}
            />
            <Popup ref={ref} trigger={<div></div>}>
              <PopUpMenuItem>
                <PopUpWrap>
                  <PopUpButton onClick={() => updateTaskStatus("in-progress")}>In Progress
                  <ArrowCircleBrokenRightIcon size={iconSize}/>
                  </PopUpButton>
                  
                </PopUpWrap>
                <PopUpWrap>
                  <PopUpButton onClick={() => updateTaskStatus("done")}>Done
                    <ArrowCircleBrokenRightIcon size={iconSize} />
                  </PopUpButton>
                  
                </PopUpWrap>
              </PopUpMenuItem>
            </Popup>
          </TaskColumnCardButton>
          <TaskColumnCardButton onClick={onShowModal}>
            <PencilIcon
              size={iconSize}
              stroke={theme.choosedDay.taskIconColor}
            />
          </TaskColumnCardButton>
          {isShow && (
            <TaskModal isShow={onShowModal} 
            defaulValues={{ title, start, end, priority }}
            option="edit"
            date={date}
            status={status}
            id={_id}>
              {/* <AddOrEditTaskForm
                onActive={onShowModal}
                defaulValues={{ title, start, end, priority }}
                option="edit"
                date={date}
                status={status}
                id={_id}
              /> */}
            </TaskModal>
          )}
          <TaskColumnCardButton onClick={deleteCurrentTask}>
            <TrashIcon
              size={iconSize}
              stroke={theme.choosedDay.taskIconColor}
            />
          </TaskColumnCardButton>
        </TaskColumnCardBottomRight>
      </TaskColumnCardBottom>
    </TasksColumnCardContainer>
  );
};

export default TaskColumnCard;
