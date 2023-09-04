import { Outlet } from 'react-router';
import { CalendarToolbar, TaskModal } from 'components';
import CalendarPageContainer from 'components/Calendar/CalendarPageContainer';
import { Suspense } from 'react';

// TODO: запит за тасками і запис в глобальний стейт

function CalendarPage() {
  return (
    <CalendarPageContainer>
      <CalendarToolbar />
      <TaskModal/>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </CalendarPageContainer>
  );
}

export default CalendarPage;
