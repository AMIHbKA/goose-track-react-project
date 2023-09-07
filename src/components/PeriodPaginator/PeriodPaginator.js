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
// import { useState } from 'react';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
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
  //  const [value, setValue] = useState(date);

  const date = useSelector(getDate);
  const dispatch = useDispatch();
  //  useEffect(()=> {
  //   setValue(date)
  //  }, [date])

  return (
    <Wrapper>
      <ButtonDatePicker
        label={formatDate(date, periodType)}
        value={date}
        onChange={newValue => dispatch(setDate(newValue))}
      />

      <ActionBox>
        <IconLeft size={18} onClick={() => changeDate(PREVIOUS)} />
        <VerticalDash />
        <IconRight size={18} onClick={() => changeDate(NEXT)} />
      </ActionBox>
    </Wrapper>
  );
};
