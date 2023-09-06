import React from 'react';
import CalendarHeadStyled from './CalendarHeadStyled';
import DayCell from './DayCell/DayCell';

const CalendarHead = ({ weekDates, activeDate, onDateClick }) => {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <CalendarHeadStyled condensed={weekDates}>
      {days.map((day, index) => (
        <DayCell
          key={day}
          day={day}
          date={weekDates ? weekDates[index] : null}
          activeDate={activeDate}
          onDateClick={onDateClick && onDateClick}
        />
      ))}
    </CalendarHeadStyled>
  );
};

export default CalendarHead;
