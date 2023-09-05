import { getWeekDatesForDate } from 'utilities/dateHelpers';
import CalendarHead from '../CalendarHead/CalendarHead';
import TasksColumnList from './TasksColumnList/TasksColumnList';
import ChoosedDayContainer from './ChoosedDayContainer';

const ChoosedDay = () => {
  const date = new Date('2023-09-01');
  const weekDates = getWeekDatesForDate(date);

  return (
    <ChoosedDayContainer>
      <CalendarHead
        weekDates={weekDates}
        activeDate={date}
        onDateClick={() => {}}
      />
      <TasksColumnList />
    </ChoosedDayContainer>
  );
};

export default ChoosedDay;
