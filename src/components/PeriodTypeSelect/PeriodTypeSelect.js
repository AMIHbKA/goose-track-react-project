import {
  Navigation,
  SelectorDay,
  SelectorMonth,
} from './PeriodTypeSelect.styled';
import { DAY, MONTH } from 'components/CalendarToolbar/CalendarToolbar';

export const PeriodTypeSelect = ({ selectPeriod }) => {
  return (
    <Navigation>
      <SelectorMonth
        to="/calendar/month"
        onClick={() => {
          selectPeriod(MONTH);
        }}
      >
        Month
      </SelectorMonth>
      <SelectorDay
        to="/calendar/day"
        onClick={() => {
          selectPeriod(DAY);
        }}
      >
        Day
      </SelectorDay>
    </Navigation>
  );
};
