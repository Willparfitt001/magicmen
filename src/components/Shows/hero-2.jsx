'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  ChevronDown,
} from 'lucide-react';
import CustomH1 from '../home/heading';

const VideoHeroSection = () => {
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef(null);

  const handleShowControls = () => {
    setShowControls(true);
    clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    const handleMouseMove = () => handleShowControls();
    const handleTouchStart = () => handleShowControls();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchstart', handleTouchStart);

    handleShowControls();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchstart', handleTouchStart);
      clearTimeout(controlsTimeoutRef.current);
    };
  }, []);

  const scrollToTours = () => {
    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* YouTube Iframe Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-20">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/CkMz-NdFzSw?autoplay=1&mute=1&controls=0&loop=1&playlist=CkMz-NdFzSw&modestbranding=1&showinfo=0&rel=0"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen></iframe>
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>

        {/* Video Controls - optional */}
        <div
          className={`absolute top-4 md:top-5 right-4 md:right-5 z-20 flex flex-col gap-3 transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-30'
          }`}>
          {/* You can repurpose the controls or remove them since iframe doesn't support direct JS control */}
          <button
            onClick={scrollToTours}
            className="text-white bg-white/20 border-2 border-white/30 rounded-full px-4 py-2 text-sm hover:bg-white/30 transition">
            Scroll to Tours
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center z-10">
          <div className="text-sm uppercase tracking-widest mb-3 opacity-80">
            View Tour Dates
          </div>
          <ChevronDown className="w-6 h-6 mx-auto animate-bounce" />
        </div>
      </section>
    </>
  );
};

export default VideoHeroSection;
