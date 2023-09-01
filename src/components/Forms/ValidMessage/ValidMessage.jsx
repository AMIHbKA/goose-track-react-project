import styled from 'styled-components';
import { CommonInfoStringStyles } from 'UI';

export const ValidMessage = ({ name }) => {
  return <ValidMessageStyled>{`This is a CORRECT ${name}`}</ValidMessageStyled>;
};

const ValidMessageStyled = styled.span`
  ${CommonInfoStringStyles}
  color: #3cbc81;
`;
