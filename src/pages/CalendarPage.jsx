import { Outlet } from 'react-router';
import { CalendarToolbar } from 'components';
import CalendarPageContainer from 'components/Calendar/CalendarPageContainer';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';

function CalendarPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <CalendarPageContainer>
      <CalendarToolbar />
      {/* <TaskModal /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </CalendarPageContainer>
  );
}

export default CalendarPage;
