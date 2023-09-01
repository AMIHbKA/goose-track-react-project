import { CalendarToolbar } from 'components';
import {
  StatisticsPageContainer,
  StatisticsPageHead,
  StatisticsPageLegend,
  StatisticsPageStyled,
} from 'components/StatisticsPage/StatisticsPageStyled';
import StatisticsChart from 'components/StatisticsPage/StatisticsChart/StatisticsChart';

const StatisticsPage = () => {
  return (
    <StatisticsPageStyled>
      <StatisticsPageContainer>
        <StatisticsPageHead>
          <CalendarToolbar />
          <StatisticsPageLegend>
            <li>By Day</li>
            <li>By Month</li>
          </StatisticsPageLegend>
        </StatisticsPageHead>
        <StatisticsChart />
      </StatisticsPageContainer>
    </StatisticsPageStyled>
  );
};

export default StatisticsPage;
