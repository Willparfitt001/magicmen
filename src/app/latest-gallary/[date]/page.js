'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import MagicMenLayout from '@/components/home/naviagation';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
import { FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

const image_gallary = [
  {
    time: '19th-feb-melb',
    images: [
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08795.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08784.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08741.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08798.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08788.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08791.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08744.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08748.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08786.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08749.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08782.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08755.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08753.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08744.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08807.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08805.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08814.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08821.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08811.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08821.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08815.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08818.jpg',
      'https://www.magicmen.com.au/gallery/melb-12feb/DSC08825.jpg',
    ],
  },
];

export default function GalleryPage() {
  const params = useParams();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get the date parameter from URL
  const timeframe = params.date;
  const processedTimeFrame = timeframe ? timeframe.split('-').join(' ') : '';

  // Find matching images based on URL parameter
  useEffect(() => {
    if (timeframe) {
      const matchingGallery = image_gallary.find(
        (gallery) => gallery.time === timeframe
      );
      if (matchingGallery) {
        setImages(matchingGallery.images);
      } else {
        // If no match is found, use the first gallery as default
        setImages(image_gallary[0].images);
      }
    } else {
      // Default to first gallery if no parameter
      setImages(image_gallary[0].images);
    }
  }, [timeframe]);

  // Open modal with selected image
  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="text-white min-h-screen bg-black">
      <MagicMenLayout height="h-[50vh]">
        <GeneralHeroSection />
      </MagicMenLayout>

      <div className="mx-auto w-full items-center py-6 justify-center md:w-4/5 text-center">
        <h1 className="text-xl md:text-6xl font-alex-brush font-bold mb-4">
          Show Galleries
        </h1>
        <h1 className="text-xl md:text-6xl text-yellow-500/90 font-alex-brush font-bold mb-4">
          {processedTimeFrame}
        </h1>
      </div>

      {/* Image gallery section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left side - Image gallery */}
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((imageSrc, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openImageModal(imageSrc)}>
                  <Image
                    src={imageSrc}
                    alt={`Gallery image ${index + 1}`}
                    width={210}
                    height={210}
                    className="w-full h-auto object-cover aspect-square"
                    unoptimized={false}
                    priority={index < 8}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Awards and info */}
          <div className="mt-8 md:mt-0">
            <div className="space-y-6">
              <Image
                alt="Award 1"
                src="/images/award01.png"
                width={300}
                height={200}
                className="w-full max-w-xs mx-auto"
              />
              <Image
                alt="Award 2"
                src="/images/award02.png"
                width={300}
                height={200}
                className="w-full max-w-xs mx-auto"
              />
              <Image
                alt="Award 3"
                src="/images/award03.png"
                width={300}
                height={200}
                className="w-full max-w-xs mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100/50 backdrop-blur-sm"
          onClick={closeModal}>
          <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold z-50 hover:text-yellow-500"
              onClick={closeModal}>
              ×
            </button>

            {/* Previous button */}
            <button
              className="absolute left-4 text-white text-5xl font-bold z-50 hover:text-yellow-500"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = images.indexOf(selectedImage);
                const prevIndex =
                  (currentIndex - 1 + images.length) % images.length;
                setSelectedImage(images[prevIndex]);
              }}>
              ‹
            </button>

            <div className="w-4/5 h-4/5 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Enlarged view"
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  style={{ objectFit: 'contain' }}
                  quality={100}
                  onClick={(e) => e.stopPropagation()}
                  unoptimized
                />
              </div>
            </div>

            {/* Next button */}
            <button
              className="absolute right-4 text-white text-5xl font-bold z-50 hover:text-yellow-500"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = images.indexOf(selectedImage);
                const nextIndex = (currentIndex + 1) % images.length;
                setSelectedImage(images[nextIndex]);
              }}>
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
