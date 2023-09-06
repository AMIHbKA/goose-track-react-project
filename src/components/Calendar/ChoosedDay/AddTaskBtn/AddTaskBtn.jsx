import styled from 'styled-components';

const AddTaskBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

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

  @media (max-width: ${props => props.theme.breakpoints.preTablet}) {
    position: sticky;
    bottom: 0;

    width: calc(100vw - 40px - 18px - 20px);

    ${({ noTasks }) =>
      noTasks &&
      `
      margin-top: 35px;
      `}
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    ${({ tasks }) =>
      tasks ||
      `
      margin-top: 28px;
      `}
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    ${({ tasks }) =>
      tasks ||
      `
      margin-top: 32px;
      `}
  }
`;

export default AddTaskBtn;
