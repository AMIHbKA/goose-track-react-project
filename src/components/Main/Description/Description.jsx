import {
  MainContent,
  OderedList,
  OderedListItem,
  Title,
  TextName,
  TextDescription,
} from './Description.styled';

export const Description = () => {
  return (
    <MainContent>
      <OderedList>
        <OderedListItem>
          <Title>Calendar</Title>
          <TextName>view</TextName>
          <TextDescription>
            GooseTrack's Calendar view provides a comprehensive overview of your
            schedule, displaying all your tasks, events, and appointments in a
            visually appealing and intuitive layout.
          </TextDescription>
          <img
            src={require('../../../UI/icons/calendar-img-mob.jpg')}
            alt="calendar-img"
          />
        </OderedListItem>
        <OderedListItem>
          <Title>Sidebar</Title>
          <TextDescription>
            GooseTrack offers easy access to your account settings, calendar,
            and filters. The "My Account" section allows you to manage your
            profile information and preferences, while the calendar provides a
            quick and convenient way to view your upcoming events and tasks.
          </TextDescription>
          <img
            src={require('../../../UI/icons/sidebar-img-mob.jpg')}
            alt="sidebar-img"
          />
        </OderedListItem>
        <OderedListItem>
          <Title>All in</Title>
          <TextName>one</TextName>
          <TextDescription>
            GooseTrack is an all-in-one productivity tool that helps you stay on
            top of your tasks, events, and deadlines. Say goodbye to scattered
            to-do lists and hello to streamlined productivity with GooseTrack.
          </TextDescription>
          <img
            src={require('../../../UI/icons/all-in-one-img-mob.jpg')}
            alt="all-in-one-img"
          />
        </OderedListItem>
      </OderedList>
    </MainContent>
  );
};
