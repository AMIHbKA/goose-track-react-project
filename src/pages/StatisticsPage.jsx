import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
import { CalendarToolbar } from 'components';
import {
  StatisticsPageWrapper,
  StatisticsPageContainer,
  StatisticsPageHead,
  StatisticsPageLegend,
} from 'components/StatisticsPage/StatisticsPageStyled';
import StatisticsChart from 'components/StatisticsPage/StatisticsChart/StatisticsChart';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDate } from 'redux/date/selectors';
import { getMonth, getYear } from 'date-fns';

const StatisticsPage = () => {
  const dispatch = useDispatch();

  const date = useSelector(getDate);

  useEffect(() => {
    const year = getYear(date);
    const month = getMonth(date);
    dispatch(fetchTasks({ year, month }));
  }, [dispatch, date]);

  return (
    <StatisticsPageWrapper>
      <StatisticsPageContainer>
        <StatisticsPageHead>
          <CalendarToolbar periodSelector={false} />
          <StatisticsPageLegend>
            <li>By Day</li>
            <li>By Month</li>
          </StatisticsPageLegend>
        </StatisticsPageHead>
        <StatisticsChart />
      </StatisticsPageContainer>
    </StatisticsPageWrapper>
  );
};

export default StatisticsPage;
