import styled from 'styled-components';

const ChoosedMonthCellStyled = styled.div`
  --yellow: #ffdd00;
  --blue: #0057b7;

  position: relative;

  overflow: hidden;

  z-index: 0;

  background-color: ${({ theme }) => theme.choosedMonth.dateBackground};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    :hover {
      ::before {
        content: '';
        position: absolute;
        z-index: -2;
        left: -50%;
        top: -50%;
        width: 200%;
        height: 200%;
        background-repeat: no-repeat;
        background-size: 50% 100%;
        background-position: 0 0, 100% 0;
        background-image: linear-gradient(var(--yellow), var(--yellow)),
          linear-gradient(var(--blue), var(--blue));
        animation: rotate 7s linear infinite;
        opacity: 0.7;
      }

      ::after {
        content: '';
        position: absolute;
        z-index: -1;
        left: 2px;
        top: 2px;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        background: ${({ theme }) => theme.choosedMonth.dateBackground};
      }
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default ChoosedMonthCellStyled;
