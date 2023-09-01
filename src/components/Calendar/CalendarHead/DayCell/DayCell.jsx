import { useContext, useCallback } from 'react';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { ThemeContext } from 'styled-components';
import DateBadge from 'components/Calendar/DateBadge/DateBadge';
import DayCellStyled from './DayCellStyled';
import DayName from './DayName/DayName';

const DayCell = ({ day, date, activeDate }) => {
  const windowWidth = useWindowWidth();

  const theme = useContext(ThemeContext);

  const dayName = useCallback(
    () =>
      windowWidth < Number.parseInt(theme.breakpoints.tablet)
        ? day.slice(0, 1)
        : day,
    [day, windowWidth, theme]
  );

  const isWeekend = !date && (day === 'SAT' || day === 'SUN');

  const isActive =
    date && activeDate && date.dateObject.getDate() === activeDate.getDate();

  if (date) {
    return (
      <DayCellStyled>
        <DayName isWeekend={isWeekend}>{dayName()}</DayName>
        <DateBadge isActive={isActive}>{day}</DateBadge>
      </DayCellStyled>
    );
  }

  return <DayName isWeekend={isWeekend}>{dayName()}</DayName>;
};

export default DayCell;
