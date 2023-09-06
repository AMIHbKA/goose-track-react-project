import { useState } from 'react';
import CalendarDates from 'calendar-dates';
import CalendarTable from './CalendarTable/CalendarTable';
import MonthCellStyled from './MonthCell/MonthCell';
import {
  getDateFromMonthString,
  trimCalendarDates,
} from 'utilities/dateHelpers';
import { useEffect } from 'react';
import CalendarHead from '../CalendarHead/CalendarHead';
import ChoosedMonthContainer from './ChoosedMonthContainer';

const ChoosedMonth = () => {
  const monthString = 'SEPTEMBER 2023';

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
    <>
      {calendarDates && (
        <ChoosedMonthContainer>
          <CalendarHead />
          <CalendarTable>
            {calendarDates.map(date => (
              <MonthCellStyled key={date.iso} calendarDate={date} />
            ))}
          </CalendarTable>
        </ChoosedMonthContainer>
      )}
    </>
  );
};

export default ChoosedMonth;
