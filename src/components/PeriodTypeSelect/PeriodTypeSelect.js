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
  return (
    <Navigation>
      <SelectorMonth
        to="/"
        onClick={() => {
          selectPeriod(MONTH);
          setIsActive(MONTH);
        }}
      >
        <Text>Month</Text>
      </SelectorMonth>
      <SelectorDay
        to="/"
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
