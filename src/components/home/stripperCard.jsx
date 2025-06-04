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
import CreatorProfile from './profile';

const PerformerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Sample performer data
  const performerData = [
    {
      id: 1,
      name: 'Eli',
      bgColor: 'bg-red-500',
      role: '',
      image: '/images/Mathew1.jpg',
      height: '6`11',
      bio: [
        `Eli is the ultimate charismatic, cocky cop. If you break the law, this man in uniform will arrest you in the sexiest way. With his ripped and chiselled abs, he’ll take control of your party and serve you with intense and insanely hot moves that will make your heart beat hard.`,
        `This stripper has it all. When you hear him knock on your door, you know the heat will be intense, and the party is really about to start.`,
        `Girls go crazy for Eli, and there are no surprises as to why. Not only is he drop-dead gorgeous and raring to make you scream underneath it all, but he also’s the perfect gentleman and is a master of making all of your guests feel special.`,
        `So, sit back, relax and watch his seductive performance. Go wild while the night is young and this sexy cop in action will blow your mind. With Eli setting the mood at every event, your hens party will be a night to remember.`,
        `Book him today and make all your dreams come true.`,
      ],
      mediaPreview: [
        { type: 'image', src: '/api/placeholder/120/160', premium: false },
      ],
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

  const handleSubscribe = (subscriptionData) => {
    console.log('Subscribe clicked:', subscriptionData);
    // Handle Stripe subscription logic here
  };

  const handleMessage = (profileId) => {
    console.log('Message creator:', profileId);
  };

  const handleLike = (profileId, media = null) => {
    console.log('Like clicked:', profileId, media);
  };

  const handleShare = (profileId, media) => {
    console.log('Share clicked:', profileId, media);
  };

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

          <a
            href={`/strippers/${name}`}
            className="mx-auto mt-2 block px-6 py-2 mb-4 border-2 hover:border-none border-purple-500 text-white font-semibold rounded-full hover:bg-white shadow-sm hover:text-slate-900 transition duration-300">
            VIEW MORE
          </a>

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
