import React from 'react';
import DayCellStyled from './DayCellStyled';
import DayName from './DayName/DayName';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useCallback } from 'react';

const DayCell = ({ day, date }) => {
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

  return (
    <DayCellStyled>
      <DayName isWeekend={isWeekend}>{dayName()}</DayName>
    </DayCellStyled>
  );
};

export default DayCell;
