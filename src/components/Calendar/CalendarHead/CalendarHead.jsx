import React from 'react';
import CalendarHeadStyled from './CalendarHeadStyled';
import DayCell from './DayCell/DayCell';

const CalendarHead = ({ weekDates, activeDate }) => {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <CalendarHeadStyled>
      {days.map((day, index) => (
        <DayCell
          key={day}
          day={day}
          activeDate={activeDate}
          date={weekDates ? weekDates[index] : null}
        />
      ))}
    </CalendarHeadStyled>
  );
};

export default CalendarHead;
