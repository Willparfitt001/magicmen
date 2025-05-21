'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PerformerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [draggedDistance, setDraggedDistance] = useState(0);
  const carouselRef = useRef(null);
  const slideWidth = useRef(0);
  const slidesToShow = useRef(3);

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

  // Handle window resize to update slides to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        slidesToShow.current = 1;
      } else if (window.innerWidth < 768) {
        slidesToShow.current = 2;
      } else {
        slidesToShow.current = 3;
      }

      if (carouselRef.current) {
        slideWidth.current =
          carouselRef.current.offsetWidth / slidesToShow.current;
      }

      // Make sure current index is valid after resize
      if (currentIndex > performerData.length - slidesToShow.current) {
        setCurrentIndex(
          Math.max(0, performerData.length - slidesToShow.current)
        );
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, performerData.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(performerData.length - slidesToShow.current, prev + 1)
    );
  };

  // Mouse and touch event handlers
  const handleDragStart = (e) => {
    setDragging(true);
    setDragStartX(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX);
    setDraggedDistance(0);
  };

  const handleDragMove = (e) => {
    if (!dragging) return;

    const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const distance = currentX - dragStartX;
    setDraggedDistance(distance);
  };

  const handleDragEnd = () => {
    if (!dragging) return;

    setDragging(false);

    // If dragged more than 20% of slide width, change slides
    if (Math.abs(draggedDistance) > slideWidth.current * 0.2) {
      if (draggedDistance > 0 && currentIndex > 0) {
        handlePrev();
      } else if (
        draggedDistance < 0 &&
        currentIndex < performerData.length - slidesToShow.current
      ) {
        handleNext();
      }
    }

    setDraggedDistance(0);
  };

  // Calculate transform based on current index and drag distance
  const getTransformValue = () => {
    const baseTransform = (-currentIndex * 100) / slidesToShow.current;
    const dragPercent =
      (draggedDistance / slideWidth.current) * (100 / slidesToShow.current);
    return `translateX(${baseTransform + dragPercent}%)`;
  };

  // Set up event listeners for when mouse leaves the carousel
  useEffect(() => {
    const handleMouseUp = () => {
      if (dragging) {
        handleDragEnd();
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, [dragging]);

  return (
    <div className="w-full max-w-6xl mx-auto bg-transparent text-white py-8 px-4">
      <h1 className="text-center text-3xl font-bold mb-8 text-white">
        MEET THE MAGIC
      </h1>

      <div
        className="relative"
        ref={carouselRef}>
        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full opacity-90 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity">
          <ChevronLeft size={24} />
        </button>

        {/* Carousel container */}
        <div
          className="overflow-hidden"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}>
          <div
            className={`flex transition-transform duration-300 ${
              !dragging ? 'ease-out' : ''
            }`}
            style={{ transform: getTransformValue() }}>
            {performerData.map((performer) => (
              <PerformerCard
                key={performer?.id}
                performer={performer}
              />
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex >= performerData.length - slidesToShow.current}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 back-drop-sm text-black p-2 rounded-full opacity-90 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({
          length: Math.ceil(performerData.length - slidesToShow.current + 1),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index
                ? 'bg-purple-500'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
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
