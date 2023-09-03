// import { useState } from 'react';

import {
  Navigation,
  SelectorDay,
  SelectorMonth,
  Text,
} from './PeriodTypeSelect.styled';
import { DAY, MONTH } from 'components/CalendarToolbar/CalendarToolbar';

export const PeriodTypeSelect = ({ selectPeriod }) => {
  return (
    <Navigation>
      <SelectorMonth
        to="/calendar/month"
        onClick={() => {
          selectPeriod(MONTH);
          // setIsActive(MONTH);
        }}
      >
        Month
      </SelectorMonth>
      <SelectorDay
        to="/calendar/day"
        onClick={() => {
          selectPeriod(DAY);
          // setIsActive(DAY);
        }}
      >
        Day
      </SelectorDay>
    </Navigation>
  );
};
