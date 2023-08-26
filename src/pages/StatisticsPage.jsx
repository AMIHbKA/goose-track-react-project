import {
  StatisticsPageContainer,
  StatisticsPageHead,
  StatisticsPageLegend,
} from 'components/StatisticsPage/StatisticsPageStyled';

const StatisticsPage = () => {
  return (
    <StatisticsPageContainer>
      <StatisticsPageHead>
        <div>PeriodPaginator</div>
        <StatisticsPageLegend>
          <li>By Day</li>
          <li>By Month</li>
        </StatisticsPageLegend>
      </StatisticsPageHead>
    </StatisticsPageContainer>
  );
};

export default StatisticsPage;
