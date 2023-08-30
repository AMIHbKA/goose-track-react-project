import React from 'react';
import ChoosedMonthCellStyled from './ChoosedMonthCellStyled';
import ChoosedMonthBadge from './ChoosedMonthBadge/ChoosedMonthBadge';

const ChoosedMonthCell = ({ calendarDate }) => {
  const day = parseInt(calendarDate.iso.split('-')[2], 10).toString();
  const isToday = calendarDate.iso === new Date().toISOString().split('T')[0];
  const isCurrentMonth = calendarDate.type === 'current';

  return (
    <ChoosedMonthCellStyled isCurrentMonth={isCurrentMonth}>
      {isCurrentMonth && (
        <ChoosedMonthBadge isToday={isToday}>{day}</ChoosedMonthBadge>
      )}
    </ChoosedMonthCellStyled>
  );
};

export default ChoosedMonthCell;
