import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { useMobile } from 'hooks';
import { selectUser } from 'redux/auth/selectors';
import { Modal } from 'components';
import { AddOrEditTaskForm } from 'components/Forms/AddOrEditTaskForm/AddOrEditTaskForm';
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
import { deleteTask } from 'redux/tasks/operations';
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

  const [showModal, setShowModal] = useState(false);

  const { title, start, end, date, priority, status, _id } = task;

  const dispatch = useDispatch();

  const onShowModal = () => {
    setShowModal(s => !s);
  };

  const deleteCurrentTask = () => {
    dispatch(deleteTask(_id))
      .then(() => notify('success', 'The task was deleted successfully'))
      .catch(e => notify('error', 'An error occurred deleting this task'));
  };

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
                  <PopUpButton>In Progress</PopUpButton>
                  <ArrowCircleBrokenRightIcon size={iconSize} />
                </PopUpWrap>
                <PopUpWrap>
                  <PopUpButton>Done</PopUpButton>
                  <ArrowCircleBrokenRightIcon size={iconSize} />
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
          {showModal && (
            <Modal onActive={onShowModal}>
              <AddOrEditTaskForm
                onActive={onShowModal}
                defaulValues={{ title, start, end, priority }}
                option="edit"
                date={date}
                status={status}
                id={_id}
              />
            </Modal>
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
