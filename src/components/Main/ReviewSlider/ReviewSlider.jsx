import React, { useRef, useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import people from '../../../utilities/data';
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

import { Navigation } from 'swiper/modules';

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://goose-track-backend-odyh.onrender.com',
});

const getReviews = async () => {
  try {
    const response = await instance.get('/reviews');
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const ReviewSlider = ({ response }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const reviews = await getReviews();
      setPeople(reviews);
    }
    fetchReviews();
  }, []);

  return (
    <>
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
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            autoplay={{ delay: 3000 }}
            className="mySwiper"
          >
            {people.map(person => {
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
                          <RatingStarIcon />
                          <RatingStarIcon />
                          <RatingStarIcon />
                          <RatingStarIcon />
                          <RatingStarIcon fill="#CEC9C1" />
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
    </>
  );
};
