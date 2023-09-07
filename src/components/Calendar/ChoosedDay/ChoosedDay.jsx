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
import { setDate } from 'redux/date/dateSlice';

const ChoosedDay = () => {
  const tasks = useSelector(getTasks);

  const date = useSelector(getDate);

  const dispatch = useDispatch();

  const weekDates = getWeekDatesForDate(date);

  const tasksForDay = tasks.filter(task => {
    const taskDate = new Date(task.date);
    const day = taskDate.getDate();
    const month = taskDate.getMonth();
    const year = taskDate.getFullYear();
    return (
      day === new Date(date).getDate() &&
      month === new Date(date).getMonth() &&
      year === new Date(date).getFullYear()
    );
  });


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
        onDateClick={date => {
          dispatch(setDate(Number(date.dateObject)));
        }}
      />
      <TasksColumnList tasks={tasksForDay} />
    </ChoosedDayContainer>
  );
};

export default ChoosedDay;
