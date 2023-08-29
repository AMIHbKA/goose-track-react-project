import styled from 'styled-components';

const ChoosedMonthContainer = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  width: 100%;
  height: 470px;

  background-color: ${({ theme }) => theme.choosedMonth.borderColor};

  border: 1px solid ${({ theme }) => theme.choosedMonth.borderColor};
  border-radius: 8px;

  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 720px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    height: 625px;
  }

  > div {
    background-color: ${({ theme }) => theme.choosedMonth.dateBackground};
  }
`;

export default ChoosedMonthContainer;
