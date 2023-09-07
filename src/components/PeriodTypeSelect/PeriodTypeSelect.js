import { useTranslation } from 'react-i18next';
import {
  Navigation,
  SelectorDay,
  SelectorMonth,
} from './PeriodTypeSelect.styled';
import { DAY, MONTH } from 'components/CalendarToolbar/CalendarToolbar';

export const PeriodTypeSelect = ({ selectPeriod }) => {
  const { t } = useTranslation();

  return (
    <Navigation>
      <SelectorMonth
        to="/calendar/month"
        onClick={() => {
          selectPeriod(MONTH);
        }}
      >
        {t('dateTime.month')}
      </SelectorMonth>
      <SelectorDay
        to="/calendar/day"
        onClick={() => {
          selectPeriod(DAY);
        }}
      >
        {t('dateTime.day')}
      </SelectorDay>
    </Navigation>
  );
};
