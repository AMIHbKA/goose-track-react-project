import styled from 'styled-components';

export const MainContent = styled.section`
  background-color: #fff;
`;

export const OderedList = styled.ol`
  display: block;
  list-style: none;
  counter-reset: item;
`;

export const OderedListContent = styled.div`
  margin-bottom: 40px;

  &:before {
    content: counters(item, '.') '.';
    counter-increment: item;
    font-weight: bold;
    display: block;
    font-size: 80px;
    color: ${props => props.theme.colors.primary};
    padding: 6px 18px;

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 104px;
      letter-spacing: -4px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 285px;
    margin-bottom: 48px;
  }
`;

export const OderedListItem = styled.li`
  @media (min-width: ${props => props.theme.breakpoints.laptopL}) {
    display: flex;
    justify-content: space-between;
    padding: 0 0 0 77px;
    align-items: center;
  }

  &:not(:last-child) {
    margin-bottom: 64px;
  }

  &:nth-child(even) {
    ${OderedListContent} {
      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        margin-left: auto;
      }
    }
    @media (min-width: ${props => props.theme.breakpoints.laptop}) {
      flex-direction: row-reverse;
      padding: 0 77px 0 0;
    }
  }
`;

export const StyledImg = styled.picture`
  display: block;
  img {
    width: 100%;
    border-radius: 40px;

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      border-radius: 100px;
    }
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
  margin-bottom: 8px;
  margin-top: 14px;
  text-transform: uppercase;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 40px;
    line-height: calc(44 / 40);
    margin-bottom: 14px;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 24px;
  }
`;

export const TextName = styled.p`
  color: #171820;
  font-size: 32px;
  line-height: calc(40 / 32);
  font-weight: bold;
  margin-bottom: 14px;
  text-transform: uppercase;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 24px;
    font-size: 40px;
    line-height: calc(44 / 40);
  }
`;

export const TextDescription = styled.p`
  letter-spacing: 0.05;
`;
