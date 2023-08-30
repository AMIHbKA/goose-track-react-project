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
    :first-child::after {
      border-top-left-radius: 6px;
    }
    :nth-child(7)::after {
      border-top-right-radius: 6px;
    }
    :last-child::after {
      border-bottom-right-radius: 6px;
    }
    :nth-last-child(7)::after {
      border-bottom-left-radius: 6px;
    }
  }
`;

export default ChoosedMonthContainer;
