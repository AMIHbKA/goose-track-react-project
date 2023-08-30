import { useState } from 'react';
import ChoosedMonthContainer from './ChoosedMonthContainer/ChoosedMonthContainer';
import ChoosedMonthCell from './ChoosedMonthCell/ChoosedMonthCell';
import CalendarDates from 'calendar-dates';
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
    <ChoosedMonthContainer>
      {calendarDates &&
        calendarDates.map(date => (
          <ChoosedMonthCell key={date.iso} calendarDate={date} />
        ))}
    </ChoosedMonthContainer>
  );
};

export default ChoosedMonth;
