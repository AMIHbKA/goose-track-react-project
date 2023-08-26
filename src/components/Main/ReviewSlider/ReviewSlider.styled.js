import styled from 'styled-components';
import { StarIcon, LeftArrow } from 'UI';

export const Rewiews = styled.footer`
  background-color: #fff;
  padding: 0 20px 86px;
`;

export const Title = styled.p`
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  font-size: 28px;
  line-height: calc(32 / 28);
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

export const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 10%);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 30px;
`;

export const Thumb = styled.div`
  display: flex;
  margin-bottom: 24px;
  gap: 18px;
`;

export const PepleImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const RewiewText = styled.div`
  color: rgba(0, 0, 0, 70%);
  line-height: calc(18 / 14);
  letter-spacing: 0.05;
`;

export const PeopleName = styled.b`
  font-size: 18px;
`;

export const Rating = styled.div`
  display: flex;
  gap: 10px;
  fill: #ffac33;
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

export const RatingStarIcon = styled(StarIcon)``;

export const ArrowContainer = styled.div`
  display: flex;
  /* text-align: center; */
  justify-content: center;
  gap: 25px;
`;

export const StyledLeftArrow = styled(LeftArrow)`
  display: block;
  height: 5px;
  width: 38px;
`;
