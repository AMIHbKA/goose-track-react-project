import styled from 'styled-components';

const StatisticsChartContainer = styled.div`
  height: 100%;
  max-height: 413px;

  padding: 40px 14px;

  border-width: ${({ theme }) => theme.statistics.linesWidth};
  border-color: ${({ theme }) => theme.statistics.linesColor};
  border-style: solid;
  border-radius: 20px;

  h2 {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;

    margin-bottom: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-height: 424px;

    padding: 32px;

    h2 {
      margin-bottom: 24px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-height: 440px;

    padding: 40px;
  }
`;

export default StatisticsChartContainer;
