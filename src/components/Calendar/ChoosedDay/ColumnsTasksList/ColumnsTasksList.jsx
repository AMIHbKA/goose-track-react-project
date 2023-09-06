import styled from 'styled-components';

const ColumnsTasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  max-height: ${props => props.maxHeight - 159 + 47}px;

  overflow-y: auto;

  outline: 1px solid red;

  ${({ noTasks }) =>
    noTasks ||
    `
    margin-top: 24px;
    `}
`;

export default ColumnsTasksList;
