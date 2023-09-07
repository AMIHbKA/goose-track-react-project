import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { Container } from './CalendarToolbar.styled';
import { useState } from 'react';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';
import { addDays, addMonths } from 'date-fns';
import { useDispatch } from 'react-redux';
import { setDate } from 'redux/date/dateSlice';
import { getDate } from 'redux/date/selectors';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// export const DAY = t('day_translation_key');
export const DAY = 'day';
export const MONTH = 'month';
export const NEXT = 'next';
export const PREVIOUS = 'previous';

export const CalendarToolbar = ({ periodSelector = true }) => {
  const { t } = useTranslation();
  const [activePeriod, setActivePeriod] = useState(MONTH);

  const dispatch = useDispatch();

  const date = useSelector(getDate);

  const changeDate = action => {
    if (action === NEXT) {
      switch (activePeriod) {
        case MONTH:
          const month = addMonths(new Date(date), 1);
          dispatch(setDate(month));
          break;
        case DAY:
          const day = addDays(new Date(date), 1);
          dispatch(setDate(day));
          break;
        default:
          break;
      }
    } else if (action === PREVIOUS) {
      switch (activePeriod) {
        case MONTH:
          const month = addMonths(new Date(date), -1);

          dispatch(setDate(month));
          break;
        case DAY:
          const day = addDays(new Date(date), -1);
          dispatch(setDate(day));
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
      <PeriodPaginator periodType={activePeriod} changeDate={changeDate} />
      {periodSelector && (
        <PeriodTypeSelect selectPeriod={selectPeriod} date={date} />
      )}
    </Container>
  );
};
