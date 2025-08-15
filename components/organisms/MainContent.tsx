"use client";

import React, { useEffect, useRef, useState } from "react";
import mainContentData from "../../main-content-data.json";
import { useSidebar } from "../providers/SidebarProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CasinoCard from "../molecules/cards/CasinoCard";
import RewardCard from "../molecules/cards/RewardCard";
import HashCard from "../molecules/cards/HashCard";
import FutureCard from "../molecules/cards/FutureCard";
import GameCard from "../molecules/cards/GameCard";
import { Button } from "../../ui/atoms";
import { Icon } from "@iconify/react";
import Auth from "./auth/Auth";
import { AnnouncementModal } from "./auth/SuccessForm";
import Profile from "../molecules/notification/Profile";

const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

// Extract data from JSON
const {
  card1,
  card2,
  card3,
  cryptoCards,
  card4,
  card5,
  card6,
  card7,
  card9,
  brand,
  latestBets,
  gameManufacturers,
  footerContent,
} = mainContentData;

const bannerCards = [
  {
    title: (
      <>
        <span className="text-900 block text-[29.45px] lg:text-[40.56px]">
          REFER &
        </span>
        <span className="text-900 block text-[20.08px] lg:text-[30.42px]">
          REWARDS
        </span>
      </>
    ),
    button: "CLAIM NOW",
    image: "/images/banner/Banner12.jpg",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
          COMPLETE TASKS &
        </span>
        <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
          GET DAILY REWARDS!
        </span>
      </>
    ),
    button: "JOIN NOW",
    image: "/images/banner/Banner10.jpg",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
          CHECK-IN
        </span>
        <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
          REWARDS!
        </span>
      </>
    ),
    button: "JOIN NOW",
    image: "/images/banner/Banner09.png",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[29.45px] lg:text-[40.56px]">
          REFER &
        </span>
        <span className="text-900 block text-[20.08px] lg:text-[30.42px]">
          REWARDS
        </span>
      </>
    ),
    button: "CLAIM NOW",
    image: "/images/banner/Banner12.jpg",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
          COMPLETE TASKS &
        </span>
        <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
          GET DAILY REWARDS!
        </span>
      </>
    ),
    button: "JOIN NOW",
    image: "/images/banner/Banner10.jpg",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
          CHECK-IN
        </span>
        <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
          REWARDS!
        </span>
      </>
    ),
    button: "JOIN NOW",
    image: "/images/banner/Banner09.png",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[29.45px] lg:text-[40.56px]">
          REFER &
        </span>
        <span className="text-900 block text-[20.08px] lg:text-[30.42px]">
          REWARDS
        </span>
      </>
    ),
    button: "CLAIM NOW",
    image: "/images/banner/Banner12.jpg",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
          COMPLETE TASKS &
        </span>
        <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
          GET DAILY REWARDS!
        </span>
      </>
    ),
    button: "JOIN NOW",
    image: "/images/banner/Banner10.jpg",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
          CHECK-IN
        </span>
        <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
          REWARDS!
        </span>
      </>
    ),
    button: "JOIN NOW",
    image: "/images/banner/Banner09.png",
    link: "#",
  },
] as const;

const MainContent: React.FC = () => {
  const { isCollapsed } = useSidebar();
  const progressRefs = useRef<HTMLSpanElement[]>([]);
  const autoplayDelay = 3000; // ms
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSuccessForm, setShowSuccessForm] = useState(true);

  const updateProgressBars = (activeIndex: number) => {
    progressRefs.current.forEach((bar, idx) => {
      if (!bar) return;
      if (idx === activeIndex) {
        // Animate active
        bar.style.transition = "none";
        bar.style.width = "0";
        void bar.offsetWidth;
        bar.style.transition = `width ${autoplayDelay}ms linear`;
        bar.style.width = "100%";
      } else if (
        idx < activeIndex ||
        (activeIndex === 0 && idx === progressRefs.current.length - 1)
      ) {
        // Keep filled with same color
        bar.style.transition = "none";
        bar.style.width = "100%";
      } else {
        // Not visited yet
        bar.style.transition = "none";
        bar.style.width = "0";
      }
    });
  };

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  const swiperRef = useRef<SwiperType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSuccessForm = () => {
    setIsOpen(!isOpen);
    let successForm = document.getElementById("success-form");
    if (successForm) {
      successForm.style.display = isOpen ? "block" : "none";
    }
  };
  return (
    <div
      className={`px-6 py-12 w-full bg-[111923] overflow-x-hidden margin auto  ${
        isCollapsed
          ? "lg:w-[calc(100vw-80px)] xl:w-[calc(100vw-80px)]"
          : "xl:w-[calc(100vw-315px)] lg:w-[calc(100vw-315px)]  2xl:w-[calc(100vw-315px)]"
      }`}
      style={{ margin: "auto" }}
    >
      <AnnouncementModal isOpen={isOpen} onClose={toggleSuccessForm} />
      <Profile />
      <div className="mb-12">
        <Swiper
          modules={[Autoplay, Pagination]}
          centeredSlides={true}
          onSwiper={(swiper) => {
            setTimeout(() => {
              progressRefs.current = Array.from(
                swiper.pagination.el.querySelectorAll<HTMLSpanElement>(
                  ".progress-bar"
                )
              );
              updateProgressBars(swiper.realIndex);
            }, 0);
          }}
          slidesPerView={3.2}
          spaceBetween={20}
          loop
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1440: { slidesPerView: 3.2 },
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} relative w-8 h-1.5 bg-gray-300 rounded overflow-hidden">
               <span class="progress-bar absolute  opacity-100 left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-500 to-blue-600"></span>
             </span>`,
          }}
          onSlideChange={(swiper) => {
            updateProgressBars(swiper.realIndex);
          }}
        >
          {bannerCards.map((card, index) => (
            <SwiperSlide key={index}>
              <RewardCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img className="grayscale" src="/icons/Home.svg" alt="home" />
          New Launches
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          centeredSlides={true}
          onSwiper={(swiper) => {
            setTimeout(() => {
              progressRefs.current = Array.from(
                swiper.pagination.el.querySelectorAll<HTMLSpanElement>(
                  ".progress-bar"
                )
              );
              updateProgressBars(swiper.realIndex);
            }, 0);
          }}
          slidesPerView={7.4}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            375: { slidesPerView: 2.1 },
            425: { slidesPerView: 3.4 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5.4, spaceBetween: 20 },
            1440: { slidesPerView: 7.4 },
          }}
          loop
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          onSlideChange={(swiper) => {
            updateProgressBars(swiper.realIndex);
          }}
        >
          {card1.map((card, index) => (
            <SwiperSlide key={index}>
              <CasinoCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Live Casino Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img className="grayscale" src="/icons/Casino1.svg" alt="home" />
          Live Casino
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          centeredSlides={true}
          onSwiper={(swiper) => {
            setTimeout(() => {
              progressRefs.current = Array.from(
                swiper.pagination.el.querySelectorAll<HTMLSpanElement>(
                  ".progress-bar"
                )
              );
              updateProgressBars(swiper.realIndex);
            }, 0);
          }}
          slidesPerView={7.4}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            375: { slidesPerView: 2.1 },
            425: { slidesPerView: 3.4 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5.4, spaceBetween: 20 },
            1440: { slidesPerView: 7.4 },
          }}
          loop
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          onSlideChange={(swiper) => {
            updateProgressBars(swiper.realIndex);
          }}
        >
          {card2.map((card, index) => (
            <SwiperSlide key={index}>
              <CasinoCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[Autoplay, Pagination]}
          centeredSlides={true}
          onSwiper={(swiper) => {
            setTimeout(() => {
              progressRefs.current = Array.from(
                swiper.pagination.el.querySelectorAll<HTMLSpanElement>(
                  ".progress-bar"
                )
              );
              updateProgressBars(swiper.realIndex);
            }, 0);
          }}
          slidesPerView={7.4}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            375: { slidesPerView: 2.1 },
            425: { slidesPerView: 3.4 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5.4, spaceBetween: 20 },
            1440: { slidesPerView: 7.4 },
          }}
          loop
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          onSlideChange={(swiper) => {
            updateProgressBars(swiper.realIndex);
          }}
        >
          {card2.map((card, index) => (
            <SwiperSlide key={index}>
              <CasinoCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Hash Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img className="grayscale" src="/icons/Hash.svg" alt="hash" />
          Hash
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            centeredSlides={true}
            onSwiper={(swiper) => {
              setTimeout(() => {
                progressRefs.current = Array.from(
                  swiper.pagination.el.querySelectorAll<HTMLSpanElement>(
                    ".progress-bar"
                  )
                );
                updateProgressBars(swiper.realIndex);
              }, 0);
            }}
            // slidesPerView={4.5}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1.1 },
              375: { slidesPerView: 1.8 },
              425: { slidesPerView: 3.4 },
              768: { slidesPerView: 4.3 },
              1024: { slidesPerView: 5.4 },
              1440: { slidesPerView: 7.4 },
            }}
            loop
            autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
            onSlideChange={(swiper) => {
              updateProgressBars(swiper.realIndex);
            }}
          >
            {card9.map((card, index) => (
              <SwiperSlide key={index} className="!w-[320px]">
                <HashCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Slots Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img className="grayscale" src="/icons/Slots.svg" alt="slots" />
          Slots
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          centeredSlides={true}
          onSwiper={(swiper) => {
            setTimeout(() => {
              progressRefs.current = Array.from(
                swiper.pagination.el.querySelectorAll<HTMLSpanElement>(
                  ".progress-bar"
                )
              );
              updateProgressBars(swiper.realIndex);
            }, 0);
          }}
          slidesPerView={7.4}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            375: { slidesPerView: 2.1 },
            425: { slidesPerView: 3.4 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5.4, spaceBetween: 20 },
            1440: { slidesPerView: 7.4 },
          }}
          loop
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          onSlideChange={(swiper) => {
            updateProgressBars(swiper.realIndex);
          }}
        >
          {card3.map((card, index) => (
            <SwiperSlide key={index}>
              <CasinoCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[Autoplay, Pagination]}
          centeredSlides={true}
          onSwiper={(swiper) => {
            setTimeout(() => {
              progressRefs.current = Array.from(
                swiper.pagination.el.querySelectorAll<HTMLSpanElement>(
                  ".progress-bar"
                )
              );
              updateProgressBars(swiper.realIndex);
            }, 0);
          }}
          slidesPerView={7.4}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            375: { slidesPerView: 2.1 },
            425: { slidesPerView: 3.4 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5.4, spaceBetween: 20 },
            1440: { slidesPerView: 7.4 },
          }}
          loop
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          onSlideChange={(swiper) => {
            updateProgressBars(swiper.realIndex);
          }}
        >
          {card3.map((card, index) => (
            <SwiperSlide key={index}>
              <CasinoCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* P/F Futures Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img className="grayscale" src="/icons/Futures1.svg" alt="future" />
          P/F Futures
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 ">
          <Swiper
            className="w-full"
            modules={[Autoplay, Pagination]}
            centeredSlides={true}
            onSwiper={(swiper) => {
              setTimeout(() => {
                progressRefs.current = Array.from(
                  swiper.pagination.el.querySelectorAll<HTMLSpanElement>(
                    ".progress-bar"
                  )
                );
                updateProgressBars(swiper.realIndex);
              }, 0);
            }}
            slidesPerView={5.4}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1.5 },
              375: { slidesPerView: 2.1 },
              425: { slidesPerView: 2.2 },
              768: { slidesPerView: 4.3 },
              1024: { slidesPerView: 5.4, spaceBetween: 20 },
              1440: { slidesPerView: 5.4 },
            }}
            loop
            autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
            onSlideChange={(swiper) => {
              updateProgressBars(swiper.realIndex);
            }}
          >
            {cryptoCards.map((card, index) => (
              <SwiperSlide key={index}>
                <FutureCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Cryptogra Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img
            className="grayscale"
            src="/icons/Cryptogra1.svg"
            alt="cryptogra"
          />
          Cryptogra
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            centeredSlides={true}
            onSwiper={(swiper) => {
              setTimeout(() => {
                progressRefs.current = Array.from(
                  swiper.pagination.el.querySelectorAll<HTMLSpanElement>(
                    ".progress-bar"
                  )
                );
                updateProgressBars(swiper.realIndex);
              }, 0);
            }}
            slidesPerView={7.4}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1.5 },
              375: { slidesPerView: 2.1 },
              425: { slidesPerView: 3.4 },
              768: { slidesPerView: 4.3 },
              1024: { slidesPerView: 5.4, spaceBetween: 20 },
              1440: { slidesPerView: 7.4 },
            }}
            loop
            autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
            onSlideChange={(swiper) => {
              updateProgressBars(swiper.realIndex);
            }}
          >
            {card4.map((card, index) => (
              <SwiperSlide key={index}>
                <CasinoCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Sport Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img className="grayscale" src="/icons/Sport.svg" alt="Sport" />
          Sport
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            centeredSlides={true}
            onSwiper={(swiper) => {
              setTimeout(() => {
                progressRefs.current = Array.from(
                  swiper.pagination.el.querySelectorAll<HTMLSpanElement>(
                    ".progress-bar"
                  )
                );
                updateProgressBars(swiper.realIndex);
              }, 0);
            }}
            slidesPerView={7.4}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1.5 },
              375: { slidesPerView: 2.1 },
              425: { slidesPerView: 3.4 },
              768: { slidesPerView: 4.3 },
              1024: { slidesPerView: 5.4, spaceBetween: 20 },
              1440: { slidesPerView: 7.4 },
            }}
            loop
            autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
            onSlideChange={(swiper) => {
              updateProgressBars(swiper.realIndex);
            }}
          >
            {card5.map((card, index) => (
              <SwiperSlide key={index}>
                <CasinoCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Chess and cards Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img
            className="grayscale"
            src="/icons/tablegame.svg"
            alt="tablegame"
          />
          Chess and cards
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            centeredSlides={true}
            onSwiper={(swiper) => {
              setTimeout(() => {
                progressRefs.current = Array.from(
                  swiper.pagination.el.querySelectorAll<HTMLSpanElement>(
                    ".progress-bar"
                  )
                );
                updateProgressBars(swiper.realIndex);
              }, 0);
            }}
            slidesPerView={7.4}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1.5 },
              375: { slidesPerView: 2.1 },
              425: { slidesPerView: 3.4 },
              768: { slidesPerView: 4.3 },
              1024: { slidesPerView: 5.4, spaceBetween: 20 },
              1440: { slidesPerView: 7.4 },
            }}
            loop
            autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
            onSlideChange={(swiper) => {
              updateProgressBars(swiper.realIndex);
            }}
          >
            {card6.map((card, index) => (
              <SwiperSlide key={index}>
                <CasinoCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
        Latest Bets
      </h2>
      <div className="grid lg:md:grid-cols-[15%_15%_20%_15%_25%_10%] grid-cols-[20%_20%_20%_40%] gap-[6px] lg:px-8 px-[6px]">
        <div className="text-left text-[12px] font-bold py-2 text-white">
          Game
        </div>
        <div className="text-left text-[12px] font-bold py-2 text-white">
          Player
        </div>
        <div className="text-left text-[12px] hidden md:lg:block font-bold py-2 text-white">
          Time
        </div>
        <div className="text-left text-[12px] hidden md:lg:block font-bold py-2 truncate text-white">
          Bet Amount
        </div>
        <div className="text-left text-[12px] font-bold py-2 text-white">
          Multiplier
        </div>
        <div className="text-left text-[12px] font-bold py-2 text-white">
          Payout
        </div>
      </div>
      <div className="w-full relative h-[462px] mb-[64px]">
        <Swiper
          direction="vertical"
          slidesPerView={9.1}
          spaceBetween={6}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="h-full"
        >
          {latestBets.map((bet, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="bg-[#1C2532] lg:px-8 gap-[6px] px-[6px] w-full grid lg:md:grid-cols-[15%_15%_20%_15%_25%_10%] grid-cols-[20%_20%_20%_40%] rounded-[16px] h-[48px] overflow-hidden mb-[6px]"
              >
                <div className="text-white flex text-[12px] font-bold truncate  items-center gap-2">
                  <img
                    src="/images/gameLogo.png"
                    alt="game"
                    className="w-6 h-6"
                  />
                  {bet.game}
                </div>
                <div className=" text-gray-300 text-[12px] font-bold truncate  flex items-center gap-2">
                  <img
                    src="/images/avatar(1).png"
                    alt="avatar"
                    className="w-6 h-6 hidden md:lg:block"
                  />
                  {bet.player}
                </div>
                <div className=" text-gray-300 text-[12px] hidden md:lg:block font-bold truncate  flex items-center">
                  {bet.time}
                </div>
                <div className=" text-gray-300 text-[12px] hidden md:lg:block font-bold truncate  flex items-center gap-2">
                  <div className="rounded-[8px] overflow-hidden w-6 hi6">
                    <img
                      src="/icons/coin-icon/BTC.svg"
                      alt="coin"
                      className="w-full h-full"
                    />
                  </div>
                  {bet.bet}
                </div>
                <div className=" text-[#2283F6] text-[12px] font-bold truncate  flex items-center">
                  {bet.multiplier}
                </div>
                <div className=" text-green-400 text-[12px] font-bold truncate  flex items-center gap-2">
                  {bet.payout}
                  <div className="rounded-[8px] overflow-hidden !w-6 !h-6">
                    <img
                      src="/icons/coin-icon/BTC.svg"
                      alt="coin"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-0 left-0 w-full h-[254px] bg-gradient-to-b z-30 from-[#11192300] to-[#111923] pointer-events-none"></div>
      </div>
      {/* Game Manufacturers Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
            Game Manufacturers
          </h2>
          <div className="flex justify-end gap-2 mb-4">
            <div
              className="bg-gray-700 hover:bg-gray-600 px-2 py-2 rounded-lg transition-colors cursor-pointer"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <Icon
                icon="mdi:chevron-left"
                className="text-white text-[24px] hover:text-[#2A3546]"
              />
            </div>
            <div
              className="bg-gray-700 hover:bg-gray-600 px-2 py-2 rounded-lg transition-colors cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <Icon
                icon="mdi:chevron-right"
                className="text-white text-[24px] hover:text-[#2A3546]"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            centeredSlides={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper; // store instance
              setTimeout(() => {
                // your progress bar logic
                progressRefs.current = Array.from(
                  swiper.pagination.el.querySelectorAll(".progress-bar")
                );
                updateProgressBars(swiper.realIndex);
              }, 0);
            }}
            slidesPerView={4.4}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              375: { slidesPerView: 1.4 },
              425: { slidesPerView: 1.8 },
              768: { slidesPerView: 3.6 },
              1024: { slidesPerView: 4.2, spaceBetween: 20 },
              1440: { slidesPerView: 4.8 },
            }}
            loop
            autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
            onSlideChange={(swiper) => {
              updateProgressBars(swiper.realIndex);
            }}
          >
            {gameManufacturers.map((manufacturer, index) => (
              <SwiperSlide key={index}>
                <GameCard
                  {...manufacturer}
                  gameCount={manufacturer.gamesCount}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Latest earnings Section */}
      <div className="mb-8 ">
        <h2 className="text-4.5 font-bold text-white mb-4 relative top-1">
          Latest earnings
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            centeredSlides={true}
            onSwiper={(swiper) => {
              setTimeout(() => {
                progressRefs.current = Array.from(
                  swiper.pagination.el.querySelectorAll<HTMLSpanElement>(
                    ".progress-bar"
                  )
                );
                updateProgressBars(swiper.realIndex);
              }, 0);
            }}
            slidesPerView={7.4}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1.5 },
              375: { slidesPerView: 2.1 },
              425: { slidesPerView: 3.4 },
              768: { slidesPerView: 4.3 },
              1024: { slidesPerView: 5.4, spaceBetween: 20 },
              1440: { slidesPerView: 7.4 },
            }}
            loop
            autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
            onSlideChange={(swiper) => {
              updateProgressBars(swiper.realIndex);
            }}
          >
            {card7.map((card, index) => (
              <SwiperSlide key={index}>
                <CasinoCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* MAGIC88 Style Content */}
      <div className="bg-transparent rounded-lg relative p-6 text-left mb-6">
        <div className="background-linear-to-b from-[#0D131C00] to-[#0D131C]">
          <h3 className="text-2xl font-bold text-white mb-4">
            Best crypto casino - Welcome to MAGIC88
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Discover the ultimate destination for crypto gaming, where every
            transaction is transparent, and every game is provably fair. MAGIC88
            Casino combines cutting-edge technology with a wide array of gaming
            options to provide a secure and engaging environment for all
            players.
          </p>
          <h4 className="text-lg font-bold text-gray-400 mb-3">
            Web3 Transaction Hash Games
          </h4>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Experience the thrill of transaction hash games, where every result
            guarantees fairness and transparency. No account is required, simply
            send a transaction to the betting address and your winnings are sent
            back to your wallet. The outcome of every bet can be verified
            directly on the blockchain.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[254px] bg-gradient-to-b z-30 from-[#11192300] to-[#111923] pointer-events-none"></div>
        {/* Expanded Content */}
        <div
          className={`overflow-hidden transition-all  duration-700 ease-in-out ${
            isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-4 mb-4">
            <h5 className="text-md font-semibold text-gray-300">
              Advanced Features
            </h5>
            <p className="text-gray-400 leading-relaxed">
              Our platform offers advanced features including real-time odds
              calculation, instant payouts, and comprehensive game history. All
              transactions are recorded on the blockchain for complete
              transparency and auditability.
            </p>
            <h5 className="text-md font-semibold text-gray-300">
              Security & Fairness
            </h5>
            <p className="text-gray-400 leading-relaxed">
              Every game result is generated using cryptographically secure
              random number generation. The house edge is clearly displayed, and
              all winning conditions are publicly verifiable on the blockchain.
            </p>
            <h5 className="text-md font-semibold text-gray-300">
              Supported Cryptocurrencies
            </h5>
            <p className="text-gray-400 leading-relaxed">
              We support major cryptocurrencies including Bitcoin (BTC),
              Ethereum (ETH), USDT, and many others. All deposits and
              withdrawals are processed automatically with minimal fees and
              maximum security.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={toggleContent}
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center mx-auto"
          style={{ color: "#A7B5CA", fontWeight: "700" }}
        >
          {isExpanded ? "Show Less" : "Show More"}
          <svg
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainContent;
