"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Types for the component
interface SwiperSliderProps {
  // Data to render
  data: readonly any[] | any[];
  modules?: string;
  // Component to render for each slide
  renderSlide: (item: any, index: number) => React.ReactNode;
  // Swiper configuration
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  autoplayDelay?: number;
  loop?: boolean;
  centeredSlides?: boolean;
  direction?: "horizontal" | "vertical";
  // Breakpoints configuration
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
      spaceBetween?: number;
    };
  };
  // Custom classes
  className?: string;
  slideClassName?: string;
  // Progress bar functionality
  showProgressBars?: boolean;
  onProgressBarsUpdate?: (swiper: SwiperType) => void;
  // Custom pagination
  customPagination?: boolean;
  paginationRenderBullet?: (index: number, className: string) => string;
  // Navigation ref (for external control)
  navigationRef?: React.MutableRefObject<SwiperType | null>;
  // Callbacks
  onSlideChange?: (swiper: SwiperType) => void;
  onSwiper?: (swiper: SwiperType) => void;
  autoplay?: boolean;
  freeMode?: boolean;
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({
  data,
  renderSlide,
  slidesPerView = 3.2,
  spaceBetween = 20,
  autoplayDelay = 3000,
  loop = true,
  centeredSlides = true,
  direction = "horizontal",
  breakpoints,
  className = "",
  slideClassName = "",
  showProgressBars = false,
  onProgressBarsUpdate,
  customPagination = false,
  paginationRenderBullet,
  navigationRef,
  onSlideChange,
  onSwiper,
  autoplay = true,
  freeMode = false,
  modules = "autoplay",
}) => {
  const progressRefs = useRef<HTMLSpanElement[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  // Default breakpoints if none provided
  // const defaultBreakpoints = {
  //   320: { slidesPerView: 1.5 },
  //   375: { slidesPerView: 2.1 },
  //   425: { slidesPerView: 3.4 },
  //   768: { slidesPerView: 4.3 },
  //   1024: { slidesPerView: 5.4, spaceBetween: 20 },
  //   1440: { slidesPerView: slidesPerView },
  // };

  const finalBreakpoints = breakpoints || {};

  // Handle swiper initialization
  const handleSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    if (navigationRef) {
      navigationRef.current = swiper;
    }

    if (showProgressBars) {
      setTimeout(() => {
        progressRefs.current = Array.from(
          swiper.pagination.el.querySelectorAll<HTMLSpanElement>(
            ".progress-bar"
          )
        );
        if (onProgressBarsUpdate) {
          onProgressBarsUpdate(swiper);
        }
      }, 0);
    }

    if (onSwiper) {
      onSwiper(swiper);
    }
  };

  // Handle slide change
  const handleSlideChange = (swiper: SwiperType) => {
    if (onSlideChange) {
      onSlideChange(swiper);
    }
  };

  // Default pagination render bullet for progress bars
  const defaultPaginationRenderBullet = (index: number, className: string) =>
    `<span class="${className} relative w-8 h-1.5 bg-gray-300 rounded overflow-hidden">
       <span class="progress-bar absolute opacity-100 left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-500 to-blue-600"></span>
     </span>`;

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      direction={direction}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop={loop}
      centeredSlides={centeredSlides}
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
      }}
      breakpoints={finalBreakpoints}
      pagination={
        customPagination
          ? {
              clickable: true,
              renderBullet:
                paginationRenderBullet || defaultPaginationRenderBullet,
            }
          : false
      }
      onSwiper={handleSwiper}
      onSlideChange={handleSlideChange}
      className={className}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className={slideClassName}>
          {renderSlide(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
