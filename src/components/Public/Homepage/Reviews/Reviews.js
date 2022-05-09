import React, { useRef, useEffect } from 'react';
import classes from './Reviews.module.scss';
import './reviews.scss';
import sahil from '../../../../assets/images/HomePage/Reviews/sahil-moosa.jpg';
import sahil2x from '../../../../assets/images/HomePage/Reviews/sahil-moosa@2x.jpg';
import marina from '../../../../assets/images/HomePage/Reviews/marina-piano.jpg';
import marina2x from '../../../../assets/images/HomePage/Reviews/marina-piano@2x.jpg';
import christian from '../../../../assets/images/HomePage/Reviews/christian-buehner.jpg';
import christian2x from '../../../../assets/images/HomePage/Reviews/christian-buehner@2x.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

const reviews = [
  {
    image: {
      quality1x: sahil,
      quality2x: sahil2x,
    },
    name: 'Mark W.',
    category: 'Jewelry store',
    review: `Now I’m making a real living wage in&nbsp;a&nbsp;job where I feel like I’m actually making an impact.`,
  },
  {
    image: {
      quality1x: marina,
      quality2x: marina2x,
    },
    name: 'Marina M.',
    category: 'Jewelry store',
    review: `Now I’m making a real living wage in&nbsp;a&nbsp;job where I feel like I’m actually making an impact.`,
  },
  {
    image: {
      quality1x: christian,
      quality2x: christian2x,
    },
    name: 'Christian A.',
    category: 'Jewelry store',
    review: `Now I’m making a real living wage in&nbsp;a&nbsp;job where I feel like I’m actually making an impact.`,
  },
];

const Reviews = () => {
  const mainSwiperRef = useRef(null);
  const additionalSwiperRef = useRef(null);

  const mainSwiperParams = {
    modules: [Navigation],
    navigation: {
      prevEl: '.reviews-left',
      nextEl: '.reviews-right',
    },
    slidesPerView: 1,
    loop: true,
  };

  const additionalSwiperParams = {
    modules: [Navigation],
    spaceBetween: 24,
    slidesPerView: 2,
    initialSlide: 1,
    navigation: {
      prevEl: '.reviews-left',
      nextEl: '.reviews-right',
    },
    loop: true,
    touchRatio: 0.2,
  };

  return (
    <section className={`section ${classes.reviews}`}>
      <div className={classes.reviewsWrapper}>
        <h2 className={`title title_size-m ${classes.reviewsTitle}`}>
          WHY CUSTOMERS TRUST US?
        </h2>
        <div className={classes.reviewsContent}>
          <div className={`title title_item ${classes.reviewsSideTitle}`}>
            [SUPPLIERS]
          </div>
          <div className={classes.reviewsNavWrapper}>
            <button className="reviews-left">
              <svg
                width="56"
                height="16"
                viewBox="0 0 56 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM56 7L1 7V9L56 9V7Z"
                  fill="#303030"
                />
              </svg>
            </button>
            <button className="reviews-right">
              <svg
                width="56"
                height="16"
                viewBox="0 0 56 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.7071 8.70711C56.0976 8.31658 56.0976 7.68342 55.7071 7.29289L49.3431 0.928932C48.9526 0.538408 48.3195 0.538408 47.9289 0.928932C47.5384 1.31946 47.5384 1.95262 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM0 9H55V7H0V9Z"
                  fill="#303030"
                />
              </svg>
            </button>
          </div>
          <div className={classes.reviewsMainSwiper}>
            <Swiper {...mainSwiperParams} ref={mainSwiperRef}>
              {reviews.map((review) => {
                return (
                  <SwiperSlide key={review.name}>
                    <div className={classes.reviewsMainSlide}>
                      <div className={classes.reviewsMainSlideImg}>
                        <img
                          width="349"
                          height="349"
                          src={review.image.quality1x}
                          srcSet={
                            review.image.quality2x
                              ? `${review.image.quality1x} 1x, ${review.image.quality2x} 2x`
                              : null
                          }
                          alt=""
                        />
                      </div>
                      <div className={classes.reviewsMainSlideName}>
                        <span className={classes.reviewsName}>
                          {review.name}
                        </span>
                        <span
                          className={`title title_item-s ${classes.reviewsCategory}`}
                        >
                          [{review.category}]
                        </span>
                      </div>
                      <div className={classes.reviewsMainSlideReview}>
                        <q
                          className="title title_item"
                          dangerouslySetInnerHTML={{ __html: review.review }}
                        ></q>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className={classes.reviewsAdditionalBlock}>
            <h4
              className={`title title_item-s ${classes.reviewsAdditionalTitle}`}
            >
              Next reviews
            </h4>
            <div className={classes.reviewsAdditionalSwiper}>
              <Swiper {...additionalSwiperParams} ref={additionalSwiperRef}>
                {reviews.map((review) => {
                  return (
                    <SwiperSlide key={review.name}>
                      <div className={classes.reviewsAdditionalImgWrapper}>
                        <img
                          width="108"
                          height="108"
                          src={review.image.quality1x}
                          srcSet={
                            review.image.quality2x
                              ? `${review.image.quality1x} 1x, ${review.image.quality2x} 2x`
                              : null
                          }
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
