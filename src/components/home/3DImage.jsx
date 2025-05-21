'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function ImageCarousel({
  images = [],
  title = 'MALE STRIPPERS WHO CAN REALLY MOVE',
  subtitle = '3 / 3 LOCATION',
}) {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle image active
  const [isLoading, setIsLoading] = useState(false);

  const goToPrevious = () => {
    setIsLoading(true);
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    setIsLoading(true);
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Function to determine which position each image should have
  const getImagePosition = (imageIndex) => {
    // 0 = left, 1 = center, 2 = right
    if (images.length <= 1) return 1;

    if (currentIndex === imageIndex) return 1;
    if (currentIndex === 0 && imageIndex === images.length - 1) return 0;
    if (currentIndex === images.length - 1 && imageIndex === 0) return 2;

    if (imageIndex < currentIndex) return 0;
    if (imageIndex > currentIndex) return 2;

    return 1; // Default (shouldn't reach here)
  };

  return (
    <div className="relative w-full  py-6">
      {/* Title and subtitle */}
      <div className="absolute top-0 left-0 z-10 flex justify-between w-full px-4 py-2">
        {/* <div className="bg-gray-900/80 rounded px-2 text-sm">
          <span className="text-white">{subtitle}</span>
        </div> */}
      </div>

      {/* Images container */}
      <div className="relative flex justify-center items-center h-64 mt-8 mb-8 mx-auto max-w-4xl">
        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="w-16 h-16 border-4 border-t-4 border-white rounded-full animate-spin"></div>
          </div>
        )}

        {/* Left arrow */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white">
          <ChevronLeft size={36} />
        </button>

        {/* Images */}
        <div className="relative w-full h-full flex justify-center items-center">
          {images.map((image, index) => {
            const position = getImagePosition(index);
            const isCenter = position === 1;

            // Position, scale, and z-index based on position
            let transformStyle = 'scale(0.8) translateZ(0)';
            let zIndex = 0;
            let opacity = 0.7;

            if (position === 0) {
              transformStyle =
                'perspective(1000px) rotateY(30deg) translateX(-30%) scale(0.85)';
              zIndex = 1;
            } else if (position === 1) {
              transformStyle =
                'perspective(1000px) rotateY(0deg) translateX(0) scale(1)';
              zIndex = 2;
              opacity = 1;
            } else if (position === 2) {
              transformStyle =
                'perspective(1000px) rotateY(-30deg) translateX(30%) scale(0.85)';
              zIndex = 1;
            }

            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-in-out w-4/5 max-w-xs"
                style={{
                  transform: transformStyle,
                  zIndex: zIndex,
                  opacity: opacity,
                  border: '1px solid #d4af37',
                  borderImageSlice: 1,
                  borderImageSource:
                    'linear-gradient(to bottom, #d4af37, #f7ef8a, #d4af37)',
                }}>
                <div className="relative aspect-square">
                  <img
                    src={image.src || '/api/placeholder/400/400'}
                    alt={image.alt || 'Carousel image'}
                    className="w-full h-full object-cover"
                  />

                  {/* Play button overlay */}
                  {image.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-white bg-opacity-30 p-4">
                        <Play
                          size={24}
                          className="text-white"
                        />
                      </div>
                    </div>
                  )}

                  {/* Logo overlay */}
                  {image.logo && (
                    <div className="absolute bottom-4 w-full flex justify-center">
                      <div
                        className="text-center text-xl font-bold"
                        style={{
                          background:
                            'linear-gradient(to right, #9c27b0, #3f51b5)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}>
                        MAGIC MEN
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white">
          <ChevronRight size={36} />
        </button>
      </div>

      {/* Navigation dots */}
      {/* <div className="flex justify-center space-x-2 my-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsLoading(true);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div> */}

      {/* Bottom title */}
      {/* <div className="flex justify-center items-center space-x-4 mt-8 mb-2">
        <div className="h-px bg-amber-500 w-8"></div>
        <h3 className="text-amber-500 font-bold text-lg uppercase">{title}</h3>
      </div> */}
    </div>
  );
}

// Example usage
export function CarouselExample() {
  const carouselImages = [
    {
      src: '/api/placeholder/400/400',
      alt: 'Male Dancer 1',
      logo: true,
      isVideo: false,
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Male Dancer 2',
      logo: true,
      isVideo: false,
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Dance Party',
      logo: true,
      isVideo: true,
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <ImageCarousel images={carouselImages} />
    </div>
  );
}
