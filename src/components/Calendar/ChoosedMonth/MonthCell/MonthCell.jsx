import React, { useState } from 'react';
import MonthCellStyled from './MonthCellStyled';
import DateBadge from '../../DateBadge/DateBadge';
import TasksContainer from '../TasksContainer/TasksContainer';
import { useNavigate } from 'react-router';

const MonthCell = ({ calendarDate, tasks, height, width }) => {
  const isToday = calendarDate.iso === new Date().toISOString().split('T')[0];
  const [isActive, setIsActive] = useState(isToday)
  const navigate = useNavigate()
  const day = parseInt(calendarDate.iso.split('-')[2], 10).toString();
 
  const isCurrentMonth = calendarDate.type === 'current';

  return (
    <MonthCellStyled
      isCurrentMonth={isCurrentMonth}
      height={height}
      width={width}
      onClick={() => {
        setIsActive(true)
        navigate('/calendar/day')}}
    >
      {isCurrentMonth && (
        <>
          <div className="date-badge-wrapper">
            <DateBadge isActive={isActive}>{day}</DateBadge>
          </div>
          {tasks && <TasksContainer tasks={tasks} />}
        </>
      )}
    </MonthCellStyled>
  );
};

export default MonthCell;
