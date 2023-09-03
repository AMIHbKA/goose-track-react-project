import { Outlet } from 'react-router';
import { CalendarToolbar } from 'components';
import CalendarPageContainer from 'components/Calendar/CalendarPageContainer';

// TODO: запит за тасками і запис в глобальний стейт

function CalendarPage() {
  return (
    <CalendarPageContainer>
      <CalendarToolbar />
      <Outlet />
    </CalendarPageContainer>
  );
}

export default CalendarPage;
