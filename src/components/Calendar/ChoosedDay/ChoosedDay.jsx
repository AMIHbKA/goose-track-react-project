import React from 'react';

import CalendarHead from '../CalendarHead/CalendarHead';
import { getWeekDatesForDate } from 'utilities/dateHelpers';

const ChoosedDay = () => {
  const date = new Date('2023-09-01');
  const weekDates = getWeekDatesForDate(date);

  return (
    <>
      <CalendarHead
        weekDates={weekDates}
        activeDate={date}
        onDateClick={() => {}}
      />
    </>
  );
};

export default ChoosedDay;
