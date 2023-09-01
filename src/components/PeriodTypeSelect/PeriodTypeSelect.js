import { useState } from 'react';

import {
  Navigation,
  SelectorDay,
  SelectorMonth,
  Text,
} from './PeriodTypeSelect.styled';
import { DAY, MONTH } from 'components/CalendarToolbar/CalendarToolbar';

export const PeriodTypeSelect = ({ selectPeriod }) => {
  const [isActive, setIsActive] = useState(MONTH);

  console.log('isActive', isActive);

  return (
    <Navigation>
      <SelectorMonth
        to="/calendar/month"
        onClick={() => {
          selectPeriod(MONTH);
          setIsActive(MONTH);
        }}
      >
        <Text>Month</Text>
      </SelectorMonth>
      <SelectorDay
        to="/calendar/day"
        onClick={() => {
          selectPeriod(DAY);
          setIsActive(DAY);
        }}
      >
        <Text>Day</Text>
      </SelectorDay>
    </Navigation>
  );
};
