import React from 'react';
import MonthCellStyled from './MonthCellStyled';
import DateBadge from '../../DateBadge/DateBadge';

const MonthCell = ({ calendarDate }) => {
  const day = parseInt(calendarDate.iso.split('-')[2], 10).toString();
  const isToday = calendarDate.iso === new Date().toISOString().split('T')[0];
  const isCurrentMonth = calendarDate.type === 'current';

  return (
    <MonthCellStyled isCurrentMonth={isCurrentMonth}>
      {isCurrentMonth && (
        <div className="date-badge-wrapper">
          <DateBadge isActive={isToday}>{day}</DateBadge>
        </div>
      )}
    </MonthCellStyled>
  );
};

export default MonthCell;
