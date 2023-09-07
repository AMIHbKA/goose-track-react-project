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

const StatisticsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

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
