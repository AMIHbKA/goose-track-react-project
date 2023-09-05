import { useState, useEffect } from 'react';
import CalendarDates from 'calendar-dates';
import CalendarTable from './CalendarTable/CalendarTable';
import MonthCell from './MonthCell/MonthCell';
import {
  getDateFromMonthString,
  trimCalendarDates,
} from 'utilities/dateHelpers';
import { api } from 'utilities';
import { useAuth, useRect } from 'hooks';
import CalendarHead from '../CalendarHead/CalendarHead';
import ChoosedMonthContainer from './ChoosedMonthContainer';
import CalendarTableWrapper from './CalendarTable/CalendarTableWrapper';

const ChoosedMonth = () => {
  const monthString = 'SEPTEMBER 2023';

  const [calendarDates, setCalendarDates] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [monthCellSizes, setMonthCellSizes] = useState(null);

  const { isLoggedIn } = useAuth();

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
    if (!isLoggedIn) {
      setTasks([]);

      return;
    }

    const fetchTasks = async () => {
      const response = await api.instance.get('/tasks', {
        year: 2023,
        month: 9,
      });

      setTasks(response.data.tasks);
    };

    fetchTasks();
  }, [isLoggedIn]);

  const tasksByDate = tasks.reduce((acc, task) => {
    const date = new Date(task.date).getDate();

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(task);

    return acc;
  }, {});

  // console.log('tasksByDate', tasksByDate);
  // console.log('tasks', tasks);
  // console.log('calendarDates', calendarDates);

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
