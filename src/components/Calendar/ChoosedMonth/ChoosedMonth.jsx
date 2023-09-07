import { useState, useEffect } from 'react';
import CalendarDates from 'calendar-dates';
import CalendarTable from './CalendarTable/CalendarTable';
import MonthCell from './MonthCell/MonthCell';
import {
  getDateFromMonthString,
  trimCalendarDates,
} from 'utilities/dateHelpers';
import { useRect } from 'hooks';
import CalendarHead from '../CalendarHead/CalendarHead';
import ChoosedMonthContainer from './ChoosedMonthContainer';
import CalendarTableWrapper from './CalendarTable/CalendarTableWrapper';
import { formatDate } from 'components/PeriodPaginator/PeriodPaginator';
import { MONTH } from 'components/CalendarToolbar/CalendarToolbar';

import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
import { getMonth, getYear } from 'date-fns';
import { useSelector } from 'react-redux';
import { getTasks } from 'redux/tasks/selectors';
import { getDate } from 'redux/date/selectors';

const ChoosedMonth = () => {
  const date = useSelector(getDate);
  
  const monthString = formatDate(date, MONTH);
  
  const [calendarDates, setCalendarDates] = useState(null);
  
  const [monthCellSizes, setMonthCellSizes] = useState(null);

  const dispatch = useDispatch()

  const tasks = useSelector(getTasks)

  const [calendarTableWrapperRect, calendarTableWrapperRef] = useRect(
    'resize',
    100,
    100
  );

  useEffect(() => {
    if (!calendarTableWrapperRect) {
      return;
    }

    setMonthCellSizes({
      height: calendarTableWrapperRect.height / 5 - 1.1,
      width: calendarTableWrapperRect.width / 7 - 1.1,
    });
  }, [calendarTableWrapperRect]);

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

  useEffect(() => {
    const year = getYear(date)
    const month = getMonth(date)
    dispatch(fetchTasks({ year, month}))
  }, [dispatch, date]);

  const tasksByDate = tasks.reduce((acc, task) => {
    const date = new Date(task.date).getDate();

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(task);

    return acc;
  }, {});

  return (
    <>
      {calendarDates && monthCellSizes && (
        <ChoosedMonthContainer>
          <CalendarHead />
          <CalendarTableWrapper ref={calendarTableWrapperRef}>
            <CalendarTable>
              {monthCellSizes.height > 0 &&
                monthCellSizes.width > 0 &&
                calendarDates.map(date => (
                  <MonthCell
                    key={date.iso}
                    calendarDate={date}
                    tasks={tasksByDate[date.date]}
                    height={monthCellSizes.height}
                    width={monthCellSizes.width}
                  />
                ))}
            </CalendarTable>
          </CalendarTableWrapper>
        </ChoosedMonthContainer>
      )}
    </>
  );
};

export default ChoosedMonth;
