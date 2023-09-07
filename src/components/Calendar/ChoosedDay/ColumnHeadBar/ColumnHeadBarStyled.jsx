import styled from 'styled-components';

export const ColumnHeadBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 7px 18px;

  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 7px 20px;

    font-size: 20px;
    line-height: 24px;
  }
`;

export const ColumnHeadBarButtons = styled.div`
  cursor: pointer;
`;
