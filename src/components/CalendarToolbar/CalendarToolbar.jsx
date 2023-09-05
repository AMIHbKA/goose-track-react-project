// import { DatePicker } from '@mui/x-date-pickers';
import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { Container } from './CalendarToolbar.styled';
import { useState } from 'react';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';
import { addDays, addMonths, 
  // getDate, getMonth, getYear 
} from 'date-fns';
// import { useEffect } from "react"
// import { useDispatch } from "react-redux"
// import { fetchTasks } from 'redux/tasks/operations';
// import { useSelector } from 'react-redux';
// import { getTasks } from 'redux/tasks/selectors';

export const DAY = 'day';
export const MONTH = 'month';
export const NEXT = 'next';
export const PREVIOUS = 'previous';

export const CalendarToolbar = ({ periodSelector = true }) => {
  const [date, setDate] = useState(Date.now());
  const [activePeriod, setActivePeriod] = useState(MONTH);
  // const dispatch = useDispatch()
  // const tasks = useSelector(getTasks)

  // const year = getYear(date)
  // const month = getMonth(date)
  // const dayOfMonth = getDate(date)


  const changeDate = action => {
    if (action === NEXT) {
      switch (activePeriod) {
        case MONTH:
          const month = addMonths(new Date(date), 1);

          setDate(month);
          break;
        case DAY:
          const day = addDays(new Date(date), 1);
          setDate(day);
          break;
        default:
          break;
      }
    } else if (action === PREVIOUS) {
      switch (activePeriod) {
        case MONTH:
          const month = addMonths(new Date(date), -1);

          setDate(month);
          break;
        case DAY:
          const day = addDays(new Date(date), -1);
          setDate(day);
          break;
        default:
          break;
      }
    }
  };

  const selectPeriod = value => {
    setActivePeriod(value);
  };

  return (
    <Container>
      <PeriodPaginator
        date={date}
        periodType={activePeriod}
        changeDate={changeDate}
      />
      {periodSelector && <PeriodTypeSelect selectPeriod={selectPeriod} />}
    </Container>
  );
};
