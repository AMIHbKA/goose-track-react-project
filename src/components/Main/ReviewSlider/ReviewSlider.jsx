import { LeftArrow, RightArrow } from 'UI';
import {
  Rewiews,
  Title,
  Container,
  Thumb,
  RewiewText,
  PeopleName,
  Rating,
  Wrapper,
  PepleImg,
  RatingStarIcon,
  ArrowContainer,
  StyledLeftArrow,
} from './ReviewSlider.styled';

export const ReviewSlider = () => {
  return (
    <Rewiews>
      <Title>rewiews</Title>
      <Container>
        <Thumb>
          <PepleImg
            src={require('../../../UI/icons/OlenaDoe.png')}
            alt="people-img"
          />
          <Wrapper>
            <PeopleName>Olena Doe</PeopleName>
            <Rating>
              <RatingStarIcon />
              <RatingStarIcon />
              <RatingStarIcon />
              <RatingStarIcon />
              <RatingStarIcon fill="#CEC9C1" />
            </Rating>
          </Wrapper>
        </Thumb>
        <RewiewText>
          GooseTrack is impressive, the calendar view and filter options make it
          easy to stay organized and focused. Highly recommended.
        </RewiewText>
      </Container>
      <ArrowContainer>
        <StyledLeftArrow />
        <RightArrow />
      </ArrowContainer>
    </Rewiews>
  );
};
