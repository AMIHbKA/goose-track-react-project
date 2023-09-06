import { useEffect, useState } from 'react';
import { useAuth } from 'hooks';
import { getWeekDatesForDate } from 'utilities/dateHelpers';
import CalendarHead from '../CalendarHead/CalendarHead';
import TasksColumnList from './TasksColumnList/TasksColumnList';
import ChoosedDayContainer from './ChoosedDayContainer';
import { api } from 'utilities';
import { useSelector } from 'react-redux';
import { getTasks } from 'redux/tasks/selectors';
import { useLocation } from 'react-router';
import { getDate } from 'redux/date/selectors';

const ChoosedDay = () => {
  const tasks = useSelector(getTasks)

  const date = useSelector(getDate);
  console.log('date', date)
  const weekDates = getWeekDatesForDate(date);
  // const [tasks, setTasks] = useState([]);
  
  // const { isLoggedIn } = useAuth();

  if (tasks) {
    console.log('tasks', tasks);
  }

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     setTasks([]);

  //     return;
  //   }

  //   const fetchTasks = async () => {
  //     const response = await api.instance.get('/tasks', {
  //       year: 2023,
  //       month: 9,
  //     });

  //     setTasks(response.data.tasks);
  //   };

  //   fetchTasks();
  // }, [isLoggedIn]);

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
