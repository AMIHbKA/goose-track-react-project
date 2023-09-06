import React from 'react';
import {
  MainContent,
  OderedList,
  OderedListItem,
  Title,
  TextName,
  TextDescription,
  OderedListContent,
  StyledImg,
} from './Description.styled';

import { useTranslation } from 'react-i18next';

import calendarMob from '../../../UI/images/calendar-mob.jpg';
import calendarMob2x from '../../../UI/images/calendar-mob@2x.jpg';
import calendarTab from '../../../UI/images/calendar-tab.jpg';
import calendarTab2x from '../../../UI/images/calendar-tab@2x.jpg';
import calendarDes from '../../../UI/images/calendar-des.jpg';
import calendarDes2x from '../../../UI/images/calendar-des@2x.jpg';

import sidebarMob from '../../../UI/images/sidebar-mob.jpg';
import sidebarMob2x from '../../../UI/images/sidebar-mob@2x.jpg';
import sidebarTab from '../../../UI/images/sidebar-tab.jpg';
import sidebarTab2x from '../../../UI/images/sidebar-tab@2x.jpg';
import sidebarDes from '../../../UI/images/sidebar-des.jpg';
import sidebarDes2x from '../../../UI/images/sidebar-des@2x.jpg';

import allInOneMob from '../../../UI/images/all-in-one-mob.jpg';
import allInOneMob2x from '../../../UI/images/all-in-one-mob@2x.jpg';
import allInOneTab from '../../../UI/images/all-in-one-tab.jpg';
import allInOneTab2x from '../../../UI/images/all-in-one-tab@2x.jpg';
import allInOneDes from '../../../UI/images/all-in-one-des.jpg';
import allInOneDes2x from '../../../UI/images/all-in-one-des@2x.jpg';
import { Container } from 'components';

export const Description = () => {
  const { t } = useTranslation();

  return (
    <MainContent>
      <Container main_page>
        <OderedList>
          <OderedListItem>
            <OderedListContent>
              <Title>{t('main.calendar')}</Title>
              <TextName>{t('main.view')}</TextName>
              <TextDescription>{t('main.textCalendar')}</TextDescription>
            </OderedListContent>
            <StyledImg>
              <source
                media="(max-width: 767px)"
                srcSet={`${calendarMob}, ${calendarMob2x} 2x`}
              />
              <source
                media="(min-width: 768px) and (max-width: 1439px)"
                srcSet={`${calendarTab}, ${calendarTab2x} 2x`}
              />
              <source
                media="(min-width: 1440px)"
                srcSet={`${calendarDes}, ${calendarDes2x} 2x`}
              />
              <img src={calendarMob} alt="Calendar" />
            </StyledImg>
          </OderedListItem>
          <OderedListItem>
            <OderedListContent>
              <Title>Sidebar</Title>
              <TextDescription>
                GooseTrack offers easy access to your account settings,
                calendar, and filters. The "My Account" section allows you to
                manage your profile information and preferences, while the
                calendar provides a quick and convenient way to view your
                upcoming events and tasks.
              </TextDescription>
            </OderedListContent>
            <StyledImg>
              <source
                media="(max-width: 767px)"
                srcSet={`${sidebarMob}, ${sidebarMob2x} 2x`}
              />
              <source
                media="(min-width: 768px) and (max-width: 1439px)"
                srcSet={`${sidebarTab}, ${sidebarTab2x} 2x`}
              />
              <source
                media="(min-width: 1440px)"
                srcSet={`${sidebarDes}, ${sidebarDes2x} 2x`}
              />
              <img src={`${sidebarMob}`} alt="sidebar-img" />
            </StyledImg>
          </OderedListItem>
          <OderedListItem>
            <OderedListContent>
              <Title>All in</Title>
              <TextName>one</TextName>
              <TextDescription>
                GooseTrack is an all-in-one productivity tool that helps you
                stay on top of your tasks, events, and deadlines. Say goodbye to
                scattered to-do lists and hello to streamlined productivity with
                GooseTrack.
              </TextDescription>
            </OderedListContent>
            <StyledImg>
              <source
                media="(max-width: 767px)"
                srcSet={`${allInOneMob}, ${allInOneMob2x} 2x`}
              />
              <source
                media="(min-width: 768px) and (max-width: 1439px)"
                srcSet={`${allInOneTab}, ${allInOneTab2x} 2x`}
              />
              <source
                media="(min-width: 1440px)"
                srcSet={`${allInOneDes}, ${allInOneDes2x} 2x`}
              />
              <img src={`${allInOneMob}`} alt="all-in-one-img" />
            </StyledImg>
          </OderedListItem>
        </OderedList>
      </Container>
    </MainContent>
  );
};
