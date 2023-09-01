import { Outlet } from 'react-router';
import { CalendarToolbar } from 'components';
import CalendarPageStyled from 'components/Calendar/CalendarPageStyled';

// TODO: запит за тасками і запис в глобальний стейт

function CalendarPage() {
  return (
    <CalendarPageStyled>
      <CalendarToolbar />
      <Outlet />
    </CalendarPageStyled>
  );
}

export default CalendarPage;
