import styled from 'styled-components';

const DayCellStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .date-badge-wrapper {
    margin-top: 6px;
  }

  .date-wrapper {
    text-align: center;

    ${({ pointer }) =>
      pointer &&
      `
    cursor: pointer;
  `}
  }
`;

export default DayCellStyled;
