import React, { useState, useEffect, Suspense } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { RightArrow } from 'UI';
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
  TestimonialCard,
  StyledButton,
} from './ReviewSlider.styled';
import { getReviews } from '../../../UI/servisesHttp/getReviews';

export const ReviewSlider = () => {
  const [people, setPeople] = useState([]);
  const maxStars = 5;

  useEffect(() => {
    async function fetchReviews() {
      const reviews = await getReviews();
      setPeople(reviews);
    }
    fetchReviews();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Rewiews>
        <Title>rewiews</Title>
        <Container>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              1440: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {people?.map(person => {
              const { _id, stars, avatarUrl, name, reviewText } = person;

              return (
                <SwiperSlide
                  key={_id}
                  style={{ display: 'flex', height: 'auto' }}
                >
                  <TestimonialCard>
                    <Thumb>
                      <PepleImg src={avatarUrl} alt={name} />
                      <Wrapper>
                        <PeopleName>{name}</PeopleName>
                        <Rating>
                          {[...Array(maxStars)].map((_, index) => (
                            <RatingStarIcon
                              key={index}
                              fill={index < stars ? '#ffac33' : '#CEC9C1'}
                            />
                          ))}
                        </Rating>
                      </Wrapper>
                    </Thumb>
                    <RewiewText>{reviewText}</RewiewText>
                  </TestimonialCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
        <ArrowContainer>
          <StyledButton className="swiper-button-prev">
            <StyledLeftArrow />
          </StyledButton>
          <StyledButton className="swiper-button-next">
            <RightArrow />
          </StyledButton>
        </ArrowContainer>
      </Rewiews>
    </Suspense>
  );
};
