import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { useMobile } from 'hooks';
import { selectUser } from 'redux/auth/selectors';
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

const TaskColumnCard = ({ task }) => {
  const user = useSelector(selectUser);

  const theme = useTheme();

  const isMobile = useMobile();

  const iconSize = isMobile ? 14 : 16;

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
          <TaskColumnCardButton>
            <ArrowCircleBrokenRightIcon
              size={iconSize}
              stroke={theme.choosedDay.taskIconColor}
            />
          </TaskColumnCardButton>
          <TaskColumnCardButton>
            <PencilIcon
              size={iconSize}
              stroke={theme.choosedDay.taskIconColor}
            />
          </TaskColumnCardButton>
          <TaskColumnCardButton>
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
