import styled from 'styled-components';

const ColumnHeadBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 7px 0;

  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export default ColumnHeadBarStyled;
