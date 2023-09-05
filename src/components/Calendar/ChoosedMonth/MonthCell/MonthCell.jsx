import React from 'react';
import MonthCellStyled from './MonthCellStyled';
import DateBadge from '../../DateBadge/DateBadge';
import TasksContainer from '../TasksContainer/TasksContainer';

const MonthCell = ({ calendarDate, tasks, height, width }) => {
  const day = parseInt(calendarDate.iso.split('-')[2], 10).toString();
  const isToday = calendarDate.iso === new Date().toISOString().split('T')[0];
  const isCurrentMonth = calendarDate.type === 'current';

  if (tasks) {
    console.log('tasks', tasks);
  }

  return (
    <MonthCellStyled
      isCurrentMonth={isCurrentMonth}
      height={height}
      width={width}
    >
      {isCurrentMonth && (
        <>
          <div className="date-badge-wrapper">
            <DateBadge isActive={isToday}>{day}</DateBadge>
          </div>
          {tasks && <TasksContainer tasks={tasks} />}
        </>
      )}
    </MonthCellStyled>
  );
};

export default MonthCell;
