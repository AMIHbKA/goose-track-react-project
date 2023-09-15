import React, { useState } from 'react';
import MonthCellStyled from './MonthCellStyled';
import DateBadge from '../../DateBadge/DateBadge';
import TasksContainer from '../TasksContainer/TasksContainer';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setDate } from 'redux/date/dateSlice';

const MonthCell = ({ calendarDate, tasks, height, width }) => {
  const isToday = calendarDate.iso === new Date().toISOString().split('T')[0];
  const [isActive, setIsActive] = useState(isToday)
  const navigate = useNavigate()
  const day = parseInt(calendarDate.iso.split('-')[2], 10).toString();
 
  const isCurrentMonth = calendarDate.type === 'current';

  const dispatch = useDispatch()

  console.log('calendarDate', calendarDate)

  return (
    <MonthCellStyled
      isCurrentMonth={isCurrentMonth}
      height={height}
      width={width}
      onClick={() => {
        setIsActive(true)
        dispatch(setDate(Number(new Date(calendarDate.iso))))
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
