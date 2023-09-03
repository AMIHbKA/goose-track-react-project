import styled from 'styled-components';
import { StarIcon, LeftArrow, RightArrow } from 'UI';

export const Reviews = styled.section`
  background-color: #fff;
`;

export const Title = styled.p`
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  font-size: 28px;
  line-height: calc(32 / 28);
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 50px;
  }
`;

export const TestimonialCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 10%);
  border-radius: 8px;
  padding: 24px;
  height: 100%;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 32px;
    max-width: 580px;
  }

  @media (min-width: ${props => props.theme.breakpoints.laptopL}) {
    min-width: 580px;
  }
`;

export const Thumb = styled.div`
  display: flex;
  margin-bottom: 24px;
  gap: 18px;
`;

export const PepleImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const ReviewText = styled.div`
  color: rgba(0, 0, 0, 70%);
  line-height: calc(18 / 14);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 0 18px 68px;
  }
`;

export const PeopleName = styled.b`
  font-size: 18px;
`;

export const Rating = styled.div`
  display: flex;
  gap: 10px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const RatingStarIcon = styled(StarIcon)`
  width: 14px;
  height: 14px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  padding-bottom: 64px;
  justify-content: center;
  gap: 25px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-bottom: 100px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding-bottom: 118px;
  }
`;

export const StyledButton = styled.button`
  height: 50px;
  background-color: transparent;
  border: none;
`;

export const StyledLeftArrow = styled(LeftArrow)`
  /* display: block; */
  height: 70px;
  width: 70px;
  .arrow-path {
    fill: red;
  }
`;

export const StyledRightArrow = styled(RightArrow)`
  height: 70px;
  width: 70px;
  .arrow-path {
    fill: red;
  }
`;
