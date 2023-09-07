import { useEffect } from 'react';
import { getWeekDatesForDate } from 'utilities/dateHelpers';
import CalendarHead from '../CalendarHead/CalendarHead';
import TasksColumnList from './TasksColumnList/TasksColumnList';
import ChoosedDayContainer from './ChoosedDayContainer';
import { useSelector } from 'react-redux';
import { getTasks } from 'redux/tasks/selectors';
import { getDate } from 'redux/date/selectors';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
import { getDay, getMonth, getYear } from 'date-fns';

const ChoosedDay = () => {
  const tasks = useSelector(getTasks);

  const date = useSelector(getDate);

  const dispatch = useDispatch();

  const weekDates = getWeekDatesForDate(date);

  if (tasks) {
    // console.log('tasks', tasks);
  }

  useEffect(() => {
    const year = getYear(date);
    const month = getMonth(date);
    const day = getDay(date);
    dispatch(fetchTasks({ year, month, day }));
  }, [dispatch, date]);

  return (
    <ChoosedDayContainer>
      <CalendarHead
        weekDates={weekDates}
        activeDate={date}
        onDateClick={() => {}}
      />
      <TasksColumnList tasks={tasks} />
    </ChoosedDayContainer>
  );
};

export default ChoosedDay;
