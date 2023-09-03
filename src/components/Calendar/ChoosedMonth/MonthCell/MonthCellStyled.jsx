import styled from 'styled-components';

const MonthCellStyled = styled.div`
  --yellow: #ffdd00;
  --blue: #0057b7;

  display: flex;
  align-items: flex-start;

  position: relative;

  overflow: hidden;

  z-index: 0;

  background-color: ${({ theme }) => theme.choosedMonth.dateBackground};

  ${({ isCurrentMonth }) => isCurrentMonth && ` cursor: pointer;`};

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
        background-size: 100% 50%;
        background-position: 0 0, 0 100%;
        background-image: linear-gradient(
            to bottom,
            var(--yellow),
            var(--yellow)
          ),
          linear-gradient(to bottom, var(--blue), var(--blue));

        opacity: 0.7;

        animation: rotate 7s linear infinite;

        ${({ isCurrentMonth }) => isCurrentMonth || `display: none;`};
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

  .date-badge-wrapper {
    display: flex;

    margin-top: 8px;
    margin-right: 4px;
    margin-left: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-top: 14px;
      margin-right: 14px;
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

export default MonthCellStyled;
