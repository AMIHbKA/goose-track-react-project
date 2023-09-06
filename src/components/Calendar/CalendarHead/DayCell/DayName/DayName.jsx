import styled from 'styled-components';

const DayName = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;

  text-align: center;

  ${({ theme, isWeekend }) =>
    isWeekend &&
    `
        color: ${theme.colors.primary};
    `};
`;

export default DayName;
