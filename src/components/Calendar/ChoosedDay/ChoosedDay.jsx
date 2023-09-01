import React from 'react';
import { getWeekDatesForDate } from 'utilities/dateHelpers';
import CalendarHead from '../CalendarHead/CalendarHead';

const ChoosedDay = () => {
  const date = new Date('2023-09-01');
  const weekDates = getWeekDatesForDate(date);

  console.log(date);
  console.log(weekDates);

  return (
    <>
      <CalendarHead weekDates={weekDates} activeDate={date} />
    </>
  );
};

export default ChoosedDay;
