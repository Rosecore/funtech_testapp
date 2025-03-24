"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "./Carousel.scss";
import ProductCard from "../ProductCard/ProductCard";
const elements = [
  {
    title: "Sun-Glass",
    currentBit: "0.1",
    imageUrl: "/image5.png",
  },
  {
    title: "Sun-Glass",
    currentBit: "0.2",
    imageUrl: "/image5.png",
  },
  {
    title: "Sun-Glass",
    currentBit: "0.3",
    imageUrl: "/image5.png",
  },
  {
    title: "Sun-Glass",
    currentBit: "0.4",
    imageUrl: "/image5.png",
  },
  {
    title: "Sun-Glass",
    currentBit: "0.5",
    imageUrl: "/image5.png",
  },
  {
    title: "Sun-Glass",
    currentBit: "0.6",
    imageUrl: "/image5.png",
  },
  {
    title: "Sun-Glass",
    currentBit: "0.7",
    imageUrl: "/image5.png",
  },
  {
    title: "Sun-Glass",
    currentBit: "0.8",
    imageUrl: "/image5.png",
  },
];

const Carousel = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(5);

  const updateSlidesPerView = () => {
    if (typeof window === "undefined") return;
    if (window.innerWidth <= 375) {
      setSlidesPerView(1);
    } else if (window.innerWidth <= 768) {
      setSlidesPerView(2);
    } else if (window.innerWidth <= 1024) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(5);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  return (
    <div
      className="carousel"
      role="region"
      aria-label="Карусель товаров"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <p className="carousel__title">Weekly - Top NFT</p>
      <Swiper
        spaceBetween={20}
        slidesPerView={slidesPerView}
        loop={true}
        speed={500}
        grabCursor={true}
        onSwiper={setSwiper}
        className="carousel__container"
        wrapperClass="carousel__track"
      >
        {elements.map((item, index) => (
          <SwiperSlide
            key={"item" + item.currentBit + index}
            virtualIndex={index}
            className="carousel__item"
          >
            <ProductCard
              title={item.title}
              imageUrl={item.imageUrl}
              currentBid={item.currentBit}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="carousel__controls">
        <button
          className="carousel__button carousel__button--prev"
          onClick={handlePrev}
          aria-label="Предыдущий слайд"
        />
        <button
          className="carousel__button carousel__button--next"
          onClick={handleNext}
          aria-label="Следующий слайд"
        />
      </div>
    </div>
  );
};

export default Carousel;
