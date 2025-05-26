// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const PerformerCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [dragStartX, setDragStartX] = useState(0);
//   const [dragging, setDragging] = useState(false);
//   const [draggedDistance, setDraggedDistance] = useState(0);
//   const carouselRef = useRef(null);
//   const slideWidth = useRef(0);
//   const slidesToShow = useRef(3);

//   // Sample performer data
//   const performerData = [
//     {
//       id: 1,
//       name: 'Matthew',
//       bgColor: 'bg-red-500',
//       role: '',
//       image: '/images/Mathew1.jpg',
//       height: '6`11',
//     },
//     {
//       id: 2,
//       name: 'ash Summer',
//       bgColor: 'bg-yellow-500',
//       role: '',
//       image: '/images/ash.webp',
//       height: '5`11',
//     },
//     {
//       id: 3,
//       name: 'Will Partrick',
//       bgColor: 'bg-white',
//       role: 'Hottest Male Performer',
//       image: '/images/Patrick-.jpg',
//       height: '7`',
//     },
//     {
//       id: 4,
//       name: 'Jaxon',
//       bgColor: 'bg-blue-900',
//       role: '',
//       image: '/images/jaxon.webp',
//       height: '6`',
//     },
//     {
//       id: 5,
//       name: 'Jake',
//       bgColor: 'bg-purple-500',
//       role: '',
//       image: '/images/Mathew1.jpg',
//       height: '6`1',
//     },
//     {
//       id: 6,
//       name: 'Blake',
//       bgColor: 'bg-purple-500',
//       role: '',
//       image: '/images/Blake.jpg',
//       height: '6`11',
//     },
//     {
//       id: 7,
//       name: 'Marco',
//       bgColor: 'bg-purple-500',
//       role: '',
//       image: '/images/marco.jpg',
//       height: '5`11',
//     },
//     {
//       id: 8,
//       name: 'Eli',
//       bgColor: 'bg-purple-500',
//       role: '',
//       image: '/images/ELI.jpg',
//       height: '5`11',
//     },
//     {
//       id: 9,
//       name: 'Francesco',
//       bgColor: 'bg-purple-500',
//       role: '',
//       image: '/images/Francesco.jpg',
//       height: '5`11',
//     },
//     {
//       id: 10,
//       name: 'Dave',
//       bgColor: 'bg-purple-500',
//       role: '',
//       image: '/images/Dave-2.jpg',
//       height: '5`11',
//     },
//   ];

//   // Handle window resize to update slides to show
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         slidesToShow.current = 1;
//       } else if (window.innerWidth < 768) {
//         slidesToShow.current = 2;
//       } else {
//         slidesToShow.current = 3;
//       }

//       if (carouselRef.current) {
//         slideWidth.current =
//           carouselRef.current.offsetWidth / slidesToShow.current;
//       }

//       // Make sure current index is valid after resize
//       if (currentIndex > performerData.length - slidesToShow.current) {
//         setCurrentIndex(
//           Math.max(0, performerData.length - slidesToShow.current)
//         );
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [currentIndex, performerData.length]);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => Math.max(0, prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) =>
//       Math.min(performerData.length - slidesToShow.current, prev + 1)
//     );
//   };

//   // Mouse and touch event handlers
//   const handleDragStart = (e) => {
//     setDragging(true);
//     setDragStartX(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX);
//     setDraggedDistance(0);
//   };

//   const handleDragMove = (e) => {
//     if (!dragging) return;

//     const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
//     const distance = currentX - dragStartX;
//     setDraggedDistance(distance);
//   };

//   const handleDragEnd = () => {
//     if (!dragging) return;

//     setDragging(false);

//     // If dragged more than 20% of slide width, change slides
//     if (Math.abs(draggedDistance) > slideWidth.current * 0.2) {
//       if (draggedDistance > 0 && currentIndex > 0) {
//         handlePrev();
//       } else if (
//         draggedDistance < 0 &&
//         currentIndex < performerData.length - slidesToShow.current
//       ) {
//         handleNext();
//       }
//     }

//     setDraggedDistance(0);
//   };

//   // Calculate transform based on current index and drag distance
//   const getTransformValue = () => {
//     const baseTransform = (-currentIndex * 100) / slidesToShow.current;
//     const dragPercent =
//       (draggedDistance / slideWidth.current) * (100 / slidesToShow.current);
//     return `translateX(${baseTransform + dragPercent}%)`;
//   };

//   // Set up event listeners for when mouse leaves the carousel
//   useEffect(() => {
//     const handleMouseUp = () => {
//       if (dragging) {
//         handleDragEnd();
//       }
//     };

//     document.addEventListener('mouseup', handleMouseUp);
//     return () => document.removeEventListener('mouseup', handleMouseUp);
//   }, [dragging]);

//   return (
//     <div className="w-full max-w-6xl mx-auto bg-transparent text-white py-8 px-4">
//       <h1 className="text-center text-3xl font-bold mb-8 text-white">
//         MEET THE MAGIC
//       </h1>

//       <div
//         className="relative"
//         ref={carouselRef}>
//         {/* Navigation buttons */}
//         <button
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//           className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full opacity-90 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity">
//           <ChevronLeft size={24} />
//         </button>

//         {/* Carousel container */}
//         <div
//           className="overflow-hidden"
//           onMouseDown={handleDragStart}
//           onMouseMove={handleDragMove}
//           onMouseUp={handleDragEnd}
//           onMouseLeave={handleDragEnd}
//           onTouchStart={handleDragStart}
//           onTouchMove={handleDragMove}
//           onTouchEnd={handleDragEnd}>
//           <div
//             className={`flex transition-transform duration-300 ${
//               !dragging ? 'ease-out' : ''
//             }`}
//             style={{ transform: getTransformValue() }}>
//             {performerData.map((performer) => (
//               <PerformerCard
//                 key={performer?.id}
//                 performer={performer}
//               />
//             ))}
//           </div>
//         </div>

//         <button
//           onClick={handleNext}
//           disabled={currentIndex >= performerData.length - slidesToShow.current}
//           className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 back-drop-sm text-black p-2 rounded-full opacity-90 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity">
//           <ChevronRight size={24} />
//         </button>
//       </div>

//       {/* Indicator dots */}
//       <div className="flex justify-center mt-6 space-x-2">
//         {Array.from({
//           length: Math.ceil(performerData.length - slidesToShow.current + 1),
//         }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full transition-colors ${
//               currentIndex === index
//                 ? 'bg-purple-500'
//                 : 'bg-gray-600 hover:bg-gray-500'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export function PerformerCard({ performer }) {
//   // Default values if performer props are missing
//   const {
//     id = '1',
//     name = 'Performer Name',
//     image = '/api/placeholder/400/600',
//     height = '6\'0"',
//   } = performer || {};

//   return (
//     <div className="w-full px-3">
//       <div className="relative  overflow-hidden shadow-lg transform transition-transform hover:scale-105 h-96">
//         {/* Image */}
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-full object-cover"
//         />

//         {/* Gradient overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               'linear-gradient(to top, rgba(0,0,0,0.99) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 100%)',
//           }}></div>

//         {/* Content */}
//         <div className="absolute inset-0 flex flex-col justify-end text-center ">
//           <h3 className="text-xl font-bold text-amber-300 mb-2">{name}</h3>

//           <button className="mx-auto mt-2 px-6 py-2 mb-4 border-2 hover:border-none border-purple-500 text-white font-semibold rounded-full hover:bg-white shadow-sm hover:text-slate-900 transition duration-300">
//             VIEW MORE
//           </button>

//           <div className="text-gray-200 ">
//             <hr className="border-gray-700" />
//             <span className="flex justify-between px-2 py-2 items-center">
//               <p className="text-amber-300">Height</p>
//               <p className="font-bold">{height}</p>
//             </span>
//             <hr className="border-gray-700" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PerformerCarousel;

// 'use client';
// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';

// const PerformerCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);

//   // Sample performer data
//   const performerData = [
//     {
//       id: 1,
//       name: 'Matthew',
//       bgColor: 'bg-red-500',
//       role: '',
//       image: '/images/Mathew1.jpg',
//       height: '6`11',
//     },
//     {
//       id: 2,
//       name: 'ash Summer',
//       bgColor: 'bg-yellow-500',
//       role: '',
//       image: '/images/ash.webp',
//       height: '5`11',
//     },
//     {
//       id: 3,
//       name: 'Will Partrick',
//       bgColor: 'bg-white',
//       role: 'Hottest Male Performer',
//       image: '/images/Patrick-.jpg',
//       height: '7`',
//     },
//     {
//       id: 4,
//       name: 'Jaxon',
//       bgColor: 'bg-blue-900',
//       role: '',
//       image: '/images/jaxon.webp',
//       height: '6`',
//     },
//     {
//       id: 5,
//       name: 'Jake',
//       bgColor: 'bg-purple-500',
//       role: '',
//       image: '/images/Mathew1.jpg',
//       height: '6`1',
//     },
//     {
//       id: 6,
//       name: 'Blake',
//       bgColor: 'bg-purple-500',
//       role: '',
//       image: '/images/Blake.jpg',
//       height: '6`11',
//     },
//     {
//       id: 7,
//       name: 'Marco',
//       bgColor: 'bg-purple-500',
//       role: '',
//       image: '/images/marco.jpg',
//       height: '5`11',
//     },
//     {
//       id: 8,
//       name: 'Eli',
//       bgColor: 'bg-purple-500',
//       role: '',
//       image: '/images/ELI.jpg',
//       height: '5`11',
//     },
//     {
//       id: 9,
//       name: 'Francesco',
//       bgColor: 'bg-purple-500',
//       role: '',
//       image: '/images/Francesco.jpg',
//       height: '5`11',
//     },
//     {
//       id: 10,
//       name: 'Dave',
//       bgColor: 'bg-purple-500',
//       role: '',
//       image: '/images/Dave-2.jpg',
//       height: '5`11',
//     },
//   ];

//   return (
//     <div className="w-full max-w-7xl mx-auto bg-transparent text-white py-12 px-4">
//       {/* Title with modern styling */}
//       <div className="text-center mb-12">
//         <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-amber-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//           MEET THE MAGIC
//         </h1>
//         <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
//       </div>

//       {/* Swiper Container */}
//       <div className="relative">
//         <Swiper
//           ref={swiperRef}
//           modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           centeredSlides={true}
//           loop={true}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           effect="coverflow"
//           coverflowEffect={{
//             rotate: 15,
//             stretch: 0,
//             depth: 300,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           navigation={{
//             nextEl: '.swiper-button-next-custom',
//             prevEl: '.swiper-button-prev-custom',
//           }}
//           pagination={{
//             el: '.swiper-pagination-custom',
//             clickable: true,
//             dynamicBullets: true,
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 40,
//             },
//           }}
//           onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//           className="performer-swiper">

//           {performerData.map((performer) => (
//             <SwiperSlide key={performer.id}>
//               <PerformerCard performer={performer} />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Navigation Buttons */}
//         <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//       {/* Custom Pagination */}
//       <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>

//       {/* Additional Info Section */}
//       <div className="text-center mt-12">
//         <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
//           Our talented performers bring energy, charisma, and unforgettable experiences to every show.
//           Each artist is carefully selected for their professionalism and stage presence.
//         </p>
//       </div>

//       {/* Custom Swiper Styles */}
//       <style jsx>{`
//         .performer-swiper {
//           padding: 20px 0 40px 0;
//         }

//         .performer-swiper .swiper-slide {
//           transition: all 0.3s ease;
//         }

//         .performer-swiper .swiper-slide:not(.swiper-slide-active) {
//           opacity: 0.7;
//           transform: scale(0.9);
//         }

//         .swiper-pagination-custom .swiper-pagination-bullet {
//           width: 12px;
//           height: 12px;
//           background: rgba(147, 51, 234, 0.3);
//           border: 2px solid rgba(147, 51, 234, 0.5);
//           opacity: 1;
//           transition: all 0.3s ease;
//         }

//         .swiper-pagination-custom .swiper-pagination-bullet-active {
//           background: linear-gradient(135deg, #8b5cf6, #ec4899);
//           border-color: #8b5cf6;
//           transform: scale(1.2);
//         }

//         .swiper-slide-shadow-left,
//         .swiper-slide-shadow-right {
//           background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3));
//         }
//       `}</style>
//     </div>
//   );
// };

// export function PerformerCard({ performer }) {
//   const {
//     id = '1',
//     name = 'Performer Name',
//     image = '/api/placeholder/400/600',
//     height = '6\'0"',
//     role = '',
//   } = performer || {};

//   return (
//     <div className="group w-full px-2">
//       <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 h-96 bg-gradient-to-br from-slate-900 to-slate-800">
//         {/* Image */}
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           loading="lazy"
//         />

//         {/* Enhanced gradient overlay */}
//         <div
//           className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"
//         />

//         {/* Animated border */}
//         <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//              style={{
//                background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #f59e0b) border-box',
//                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                WebkitMaskComposite: 'exclude'
//              }}>
//         </div>

//         {/* Content */}
//         <div className="absolute inset-0 flex flex-col justify-end text-center p-6">
//           {/* Role badge */}
//           {role && (
//             <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
//               {role}
//             </div>
//           )}

//           {/* Name with enhanced styling */}
//           <h3 className="text-2xl font-black text-transparent bg-gradient-to-r from-amber-300 to-amber-100 bg-clip-text mb-4 transform group-hover:scale-110 transition-transform duration-300">
//             {name.toUpperCase()}
//           </h3>

//           {/* View More Button */}
//           <button className="relative mx-auto mb-4 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden group/btn">
//             <span className="relative z-10">VIEW PROFILE</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
//           </button>

//           {/* Stats section */}
//           <div className="bg-black/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
//             <div className="flex justify-between items-center px-4 py-3">
//               <span className="text-amber-300 font-semibold text-sm">HEIGHT</span>
//               <span className="text-white font-bold">{height}</span>
//             </div>
//           </div>
//         </div>

//         {/* Hover effect overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//       </div>
//     </div>
//   );
// }

// export default PerformerCarousel;

'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const PerformerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Sample performer data
  const performerData = [
    {
      id: 1,
      name: 'Matthew',
      bgColor: 'bg-red-500',
      role: '',
      image: '/images/Mathew1.jpg',
      height: '6`11',
    },
    {
      id: 2,
      name: 'ash Summer',
      bgColor: 'bg-yellow-500',
      role: '',
      image: '/images/ash.webp',
      height: '5`11',
    },
    {
      id: 3,
      name: 'Will Partrick',
      bgColor: 'bg-white',
      role: 'Hottest Male Performer',
      image: '/images/Patrick-.jpg',
      height: '7`',
    },
    {
      id: 4,
      name: 'Jaxon',
      bgColor: 'bg-blue-900',
      role: '',
      image: '/images/jaxon.webp',
      height: '6`',
    },
    {
      id: 5,
      name: 'Jake',
      bgColor: 'bg-purple-500',
      role: '',
      image: '/images/Mathew1.jpg',
      height: '6`1',
    },
    {
      id: 6,
      name: 'Blake',
      bgColor: 'bg-purple-500',
      role: '',
      image: '/images/Blake.jpg',
      height: '6`11',
    },
    {
      id: 7,
      name: 'Marco',
      bgColor: 'bg-purple-500',
      role: '',
      image: '/images/marco.jpg',
      height: '5`11',
    },
    {
      id: 8,
      name: 'Eli',
      bgColor: 'bg-purple-500',
      role: '',
      image: '/images/ELI.jpg',
      height: '5`11',
    },
    {
      id: 9,
      name: 'Francesco',
      bgColor: 'bg-purple-500',
      role: '',
      image: '/images/Francesco.jpg',
      height: '5`11',
    },
    {
      id: 10,
      name: 'Dave',
      bgColor: 'bg-purple-500',
      role: '',
      image: '/images/Dave-2.jpg',
      height: '5`11',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto bg-transparent text-white py-12 px-4">
      {/* Title with modern styling */}
      <div className="text-center mb-12">
        <h1 className="text-xl md:text-2xl font-roboto-mono mb-4 b bg-clip-text text-transparent">
          MEET THE MAGIC
        </h1>
        {/* <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div> */}
      </div>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="performer-swiper">
          {performerData.map((performer) => (
            <SwiperSlide key={performer.id}>
              <PerformerCard performer={performer} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>

      {/* Additional Info Section */}
      <div className="text-center mt-12">
        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Our talented performers bring energy, charisma, and unforgettable
          experiences to every show. Each artist is carefully selected for their
          professionalism and stage presence.
        </p>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .performer-swiper {
          padding: 20px 0 40px 0;
        }

        .performer-swiper .swiper-slide {
          transition: all 0.3s ease;
        }

        .performer-swiper .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.7;
          transform: scale(0.9);
        }

        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(147, 51, 234, 0.3);
          border: 2px solid rgba(147, 51, 234, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border-color: #8b5cf6;
          transform: scale(1.2);
        }

        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.3),
            rgba(236, 72, 153, 0.3)
          );
        }
      `}</style>
    </div>
  );
};

export function PerformerCard({ performer }) {
  // Default values if performer props are missing
  const {
    id = '1',
    name = 'Performer Name',
    image = '/api/placeholder/400/600',
    height = '6\'0"',
  } = performer || {};

  return (
    <div className="w-full px-3">
      <div className="relative  overflow-hidden shadow-lg transform transition-transform hover:scale-105 h-96">
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.99) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 100%)',
          }}></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end text-center ">
          <h3 className="text-xl font-bold text-amber-300 mb-2">{name}</h3>

          <button className="mx-auto mt-2 px-6 py-2 mb-4 border-2 hover:border-none border-purple-500 text-white font-semibold rounded-full hover:bg-white shadow-sm hover:text-slate-900 transition duration-300">
            VIEW MORE
          </button>

          <div className="text-gray-200 ">
            <hr className="border-gray-700" />
            <span className="flex justify-between px-2 py-2 items-center">
              <p className="text-amber-300">Height</p>
              <p className="font-bold">{height}</p>
            </span>
            <hr className="border-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformerCarousel;
