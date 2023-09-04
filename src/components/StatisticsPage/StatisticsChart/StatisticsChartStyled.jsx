import styled from 'styled-components';

export const StatisticsChartContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 1;

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

export const StatisticsChartWrapperExternal = styled.div`
  position: relative;

  flex-grow: 1;
`;

export const StatisticsChartWrapperInternal = styled.div`
  position: absolute;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

export const StatisticsChartWarningMessage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 12px;

  color: ${({ theme }) => theme.statistics.warningMessageColor};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;
