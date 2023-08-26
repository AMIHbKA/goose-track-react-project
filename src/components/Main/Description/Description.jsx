import { MainContent, OderedList } from './Description.styled';

export const Description = () => {
  return (
    <MainContent>
      <OderedList>
        <li>
          <h3>Calendar</h3>
          <p>view</p>
          <p>
            GooseTrack's Calendar view provides a comprehensive overview of your
            schedule, displaying all your tasks, events, and appointments in a
            visually appealing and intuitive layout.
          </p>
          <img
            src={require('../../../UI/icons/calendar-img-mob.jpg')}
            alt="calendar-img"
          />
        </li>
        <li>
          <h3>Sidebar</h3>
          <p>
            GooseTrack offers easy access to your account settings, calendar,
            and filters. The "My Account" section allows you to manage your
            profile information and preferences, while the calendar provides a
            quick and convenient way to view your upcoming events and tasks.
          </p>
          <img
            src={require('../../../UI/icons/sidebar-img-mob.jpg')}
            alt="sidebar-img"
          />
        </li>
        <li>
          <h3>All in</h3>
          <p>one</p>
          <p>
            GooseTrack is an all-in-one productivity tool that helps you stay on
            top of your tasks, events, and deadlines. Say goodbye to scattered
            to-do lists and hello to streamlined productivity with GooseTrack.
          </p>
          <img
            src={require('../../../UI/icons/all-in-one-img-mob.jpg')}
            alt="all-in-one-img"
          />
        </li>
      </OderedList>
    </MainContent>
  );
};
