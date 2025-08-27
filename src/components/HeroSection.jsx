'use client';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden flex flex-col px-4 sm:px-8 lg:px-12 xl:px-10 py-3 sm:py-5 md:py-9">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
        {/* LEFT COLUMN */}
        <div className="relative flex flex-col sm:justify-center sm:min-h-[420px]">
          {/* Heading */}
          <h1 className="hidden sm:block font-medium text-[#1f242e] text-[54px] md:text-[64px] lg:text-[80px] xl:text-[88px] leading-[0.95] lg:leading-[0.92] mb-6 max-w-[680px]">
            <div>No filler,</div>
            <div className="text-[#ff5a2e]">just skills</div>
            <div>that really</div>
            <div>get results</div>
          </h1>

          <h1 className="sm:hidden font-medium text-[#1f242e] text-[12vw] leading-[12vw]">
            No filler <span className="text-[#ff5a2e]">just skills</span> that
            really get results
          </h1>

          <div className="my-3 sm:mb-1.5 sm:mt-0 md:my-4 relative">
            {/* (SCROLL) positioned to the left, centered vertically on large screens */}
            <span
              onClick={() =>
                document
                  .getElementById('next-section')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="text-sm sm:text-xs md:text-sm text-gray-400 tracking-wide cursor-pointer"
            >
              (SCROLL)
            </span>

            {/* Wavy underline (small) */}
            <Image
              src="/hero-wave.svg"
              alt="hero wave"
              width={100}
              height={100}
              className="absolute -bottom-5 sm:-bottom-10 md:-bottom-8 right-4 sm:right-2.5 md:right-12 lg:right-4 w-20 md:w-16 lg:w-20 object-cover"
              priority
            />
          </div>

          {/* Subtitle */}
          <p className="max-w-xs sm:max-w-[190px] md:max-w-[260px] lg:max-w-[300px] xl:max-w-xs text-2xl sm:text-[17px] md:text-lg lg:text-xl xl:text-2xl font-semibold text-[#323232] leading-5 sm:leading-4 md:leading-5 lg:leading-7 mb-8">
            Discover flexible online courses to grow your skills today
          </p>
        </div>

        {/* RIGHT COLUMN (image) */}
        <div className="relative w-full sm:w-1/2 md:w-3/7">
          {/* Big image area */}
          <Image
            src="/hero-image.jpg"
            alt="Person on laptop"
            width={1200}
            height={900}
            className="w-full sm:h-[360px] md:h-[420px] lg:h-[520px] object-cover"
            priority
          />

          {/* ABSOLUTE overlapping stat cards on large screens */}
          <div className="flex absolute left-2 md:-left-28 bottom-8 sm:bottom-10 items-end gap-1.5 lg:gap-3 xl:gap-5 z-40">
            <div className="transform translate-y-6">
              <StatCardBlue />
            </div>

            <div className="transform -translate-y-3">
              <StatCardDark />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCardBlue = () => (
  <div className="w-full sm:w-32 md:w-44 lg:w-52 xl:w-56 bg-[#466bf3] text-white p-3 sm:p-4 md:p-6">
    <div className="text-xs sm:text-sm md:text-base lg:text-lg font-medium opacity-95">
      Courses
    </div>
    <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight my-1">
      120+
    </div>
    <div className="text-[8px] md:text-xs lg:text-sm leading-2 sm:leading-4 opacity-90">
      Skilled tutors, great courses
    </div>
  </div>
);

const StatCardDark = () => (
  <div className="w-full sm:w-32 md:w-44 lg:w-52 xl:w-56 bg-[#050517] text-white p-3 sm:p-4 md:p-6">
    <div className="text-xs sm:text-sm md:text-base lg:text-lg font-medium opacity-95">
      Teachers
    </div>
    <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight my-1">
      60+
    </div>
    <div className="text-[8px] md:text-xs lg:text-sm leading-2 sm:leading-4 opacity-90">
      Expert teachers & top courses
    </div>
  </div>
);

export default HeroSection;
