import styled from 'styled-components';

const AddTaskBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  /* position: absolute; */

  /* bottom: 20px;
  left: 18px;
  right: 18px; */

  /* width: calc(100vw - 40px - 18px - 18px); */

  width: 100%;

  padding: 12px;

  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  color: ${({ theme }) => theme.colors.mainText};

  background-color: ${({ theme }) => theme.choosedDay.addBtnBackground};

  border-radius: 8px;

  ${({ theme }) =>
    theme.choosedDay.addBtnBorder
      ? `border: ${theme.choosedDay.addBtnBorder};`
      : 'border: none;'}

  div {
    margin-left: 8px;
    padding-top: 2px;
  }
`;

export default AddTaskBtn;
