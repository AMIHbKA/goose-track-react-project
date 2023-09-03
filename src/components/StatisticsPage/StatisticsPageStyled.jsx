import styled from 'styled-components';

export const StatisticsPageWrapper = styled.div`
  height: 100%;

  padding-bottom: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding-bottom: 14px;
  }
`;

export const StatisticsPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  height: 100%;

  padding: 28px 14px 14px;

  margin-bottom: 20px;

  border-radius: 16px;

  background-color: ${({ theme }) => theme.statistics.backgroundColor};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 132px 32px 32px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 134px 113px 32px;
  }
`;

export const StatisticsPageHead = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;

    padding: 0 32px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 0 40px;
  }
`;

export const StatisticsPageLegend = styled.ul`
  display: flex;

  margin-top: 2px;

  font-weight: 400;
  line-height: 18px;

  li {
    display: flex;
    align-items: center;

    ::before {
      content: '';

      display: inline-block;

      width: 8px;
      height: 8px;

      margin-right: 8px;

      border-radius: 50%;

      background-color: ${({ theme }) => theme.colors.highPriorityBack};
    }

    :nth-child(2) {
      margin-left: 14px;

      ::before {
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
