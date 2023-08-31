import { useState } from 'react';
import CalendarDates from 'calendar-dates';
import CalendarTable from './CalendarTable/CalendarTable';
import MonthCellStyled from './MonthCell/MonthCell';
import {
  getDateFromMonthString,
  trimCalendarDates,
} from 'utilities/dateHelpers';
import { useEffect } from 'react';

const ChoosedMonth = () => {
  const monthString = 'AUGUST 2023';

  const [calendarDates, setCalendarDates] = useState(null);

  useEffect(() => {
    const generateCalendarDates = async () => {
      const calendarDatesGenerator = new CalendarDates();

      const dates = await calendarDatesGenerator.getDates(
        getDateFromMonthString(monthString)
      );

      setCalendarDates(trimCalendarDates(dates));
    };

    generateCalendarDates();
  }, [monthString]);

  return (
    <CalendarTable>
      {calendarDates &&
        calendarDates.map(date => (
          <MonthCellStyled key={date.iso} calendarDate={date} />
        ))}
    </CalendarTable>
  );
};

export default ChoosedMonth;
