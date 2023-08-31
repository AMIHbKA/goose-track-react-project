import React from 'react';
import MonthCellStyled from './MonthCellStyled';
import MonthBadge from './MonthBadge/MonthBadge';

const MonthCell = ({ calendarDate }) => {
  const day = parseInt(calendarDate.iso.split('-')[2], 10).toString();
  const isToday = calendarDate.iso === new Date().toISOString().split('T')[0];
  const isCurrentMonth = calendarDate.type === 'current';

  return (
    <MonthCellStyled isCurrentMonth={isCurrentMonth}>
      {isCurrentMonth && <MonthBadge isToday={isToday}>{day}</MonthBadge>}
    </MonthCellStyled>
  );
};

export default MonthCell;
