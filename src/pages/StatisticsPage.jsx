import { CalendarToolbar } from 'components';
import {
  StatisticsPageContainer,
  StatisticsPageHead,
  StatisticsPageLegend,
} from 'components/StatisticsPage/StatisticsPageStyled';
import StatisticsChart from 'components/StatisticsPage/StatisticsChart/StatisticsChart';

const StatisticsPage = () => {
  return (
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
  );
};

export default StatisticsPage;
