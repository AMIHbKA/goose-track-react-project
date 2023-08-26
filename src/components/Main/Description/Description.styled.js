import styled from 'styled-components';

export const MainContent = styled.main`
  background-color: #fff;
  padding: 64px 20px;
`;

export const OderedList = styled.ol`
  display: block;
  list-style: none;
  counter-reset: item;
`;

export const OderedListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 64px;
  }

  &:before {
    content: counters(item, '.') '.';
    counter-increment: item;
    font-weight: bold;
    display: block;
    font-size: 80px;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 14px;
  }
`;

export const Title = styled.h3`
  display: inline-block;
  padding: 8px 18px;
  background-color: #dcebf7;
  color: ${props => props.theme.colors.primary};
  font-size: 32px;
  line-height: calc(40 / 32);
  font-weight: bold;
  border-radius: 44px;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const TextName = styled.p`
  font-size: 32px;
  line-height: calc(40 / 32);
  font-weight: bold;
  margin-bottom: 14px;
  text-transform: uppercase;
`;

export const TextDescription = styled.p`
  letter-spacing: 0.05;
  margin-bottom: 40px;
`;
