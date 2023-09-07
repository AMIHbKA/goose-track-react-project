import {
  ActionBox,
  IconLeft,
  IconRight,
  Wrapper,
} from './PeriodPaginator.styled';

import { VerticalDash } from 'UI/icons';
import {
  DAY,
  MONTH,
  NEXT,
  PREVIOUS,
} from 'components/CalendarToolbar/CalendarToolbar';
import { ButtonDatePicker } from 'components/DatePicker/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setDate } from 'redux/date/dateSlice';
import { getDate } from 'redux/date/selectors';

export const formatDate = (currDate, periodType) => {
  if (periodType === MONTH) {
    const formattedDate = new Date(currDate)
      .toLocaleString('en-US', { month: 'long', year: 'numeric' })
      .toUpperCase();

    return formattedDate;
  } else if (periodType === DAY) {
    const formattedDate = `${new Date(currDate).getDate()} ${new Date(currDate)
      .toLocaleString('en-US', { month: 'short', year: 'numeric' })
      .toUpperCase()}`;
    return formattedDate;
  }
};

export const PeriodPaginator = ({ periodType, changeDate }) => {
  const date = useSelector(getDate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ButtonDatePicker
        label={formatDate(date, periodType)}
        value={date}
        onChange={newValue => {
          dispatch(setDate(Number(newValue)));

          navigate('/calendar/day');

        }}
      />

      <ActionBox>
        <IconLeft size={18} onClick={() => changeDate(PREVIOUS)} />
        <VerticalDash />
        <IconRight size={18} onClick={() => changeDate(NEXT)} />
      </ActionBox>
    </Wrapper>
  );
};
