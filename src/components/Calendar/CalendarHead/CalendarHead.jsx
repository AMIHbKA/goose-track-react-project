import React from 'react';
import CalendarHeadStyled from './CalendarHeadStyled';
import DayCell from './DayCell/DayCell';
import { useTranslation } from 'react-i18next';

const CalendarHead = ({ weekDates, activeDate, onDateClick }) => {
  const { t } = useTranslation();

  const daysOfWeekTranslations = t('daysOfWeek', { returnObjects: true });
  const translatedDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(
    day => daysOfWeekTranslations[day] || day
  );
  // const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <CalendarHeadStyled condensed={weekDates}>
      {translatedDays.map((day, index) => (
        <DayCell
          key={day}
          day={day}
          date={weekDates ? weekDates[index] : null}
          activeDate={activeDate}
          onDateClick={onDateClick && onDateClick}
        />
      ))}
    </CalendarHeadStyled>
  );
};

export default CalendarHead;
