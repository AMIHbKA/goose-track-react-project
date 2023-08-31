import React from 'react';
import CalendarHeadStyled from './CalendarHeadStyled';
import DayCell from './DayCell/DayCell';

const CalendarHead = ({ dates }) => {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <CalendarHeadStyled>
      {days.map(day => (
        <DayCell key={day} day={day} />
      ))}
    </CalendarHeadStyled>
  );
};

export default CalendarHead;
