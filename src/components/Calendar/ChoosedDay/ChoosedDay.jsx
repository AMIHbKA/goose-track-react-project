import { useEffect, useState } from 'react';
import { useAuth } from 'hooks';
import { getWeekDatesForDate } from 'utilities/dateHelpers';
import CalendarHead from '../CalendarHead/CalendarHead';
import TasksColumnList from './TasksColumnList/TasksColumnList';
import ChoosedDayContainer from './ChoosedDayContainer';
import { api } from 'utilities';

const ChoosedDay = () => {
  const date = new Date('2023-09-01');
  const weekDates = getWeekDatesForDate(date);

  const [tasks, setTasks] = useState([]);

  const { isLoggedIn } = useAuth();

  if (tasks) {
    console.log('tasks', tasks);
  }

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
