import { useContext, useCallback } from 'react';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { ThemeContext } from 'styled-components';
import DateBadge from 'components/Calendar/DateBadge/DateBadge';
import DayCellStyled from './DayCellStyled';
import DayName from '../DayName/DayName';

const DayCell = ({ day, date, activeDate, onDateClick }) => {
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
  console.log('activeDate', activeDate)

  const isActive =
    date && activeDate && date.dateObject.getDate() === new Date(activeDate).getDate();

  if (date) {
    return (
      <DayCellStyled pointer={onDateClick && true}>
        <div className="date-wrapper" onClick={onDateClick}>
          <DayName isWeekend={isWeekend}>{dayName()}</DayName>
          <div className="date-badge-wrapper">
            <DateBadge isActive={isActive}>{date.day}</DateBadge>
          </div>
        </div>
      </DayCellStyled>
    );
  }

  return <DayName isWeekend={isWeekend}>{dayName()}</DayName>;
};

export default DayCell;
