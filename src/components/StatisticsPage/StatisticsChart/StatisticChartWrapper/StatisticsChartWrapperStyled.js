import styled from 'styled-components';

const StatisticsChartWrapperStyled = styled.div`
  height: calc(100% - 30px);
  width: calc(100% - 5px);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: calc(100% - 35px);
  }
`;

export default StatisticsChartWrapperStyled;
