'use client';
import { useState, useEffect } from 'react';

export default function VideoCard({ videoUrl, fallbackVideo, poster, title }) {
  const [videoError, setVideoError] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Extract YouTube video ID from videoUrl
    if (videoUrl) {
      try {
        const url = new URL(videoUrl);
        if (url.hostname === 'youtu.be') {
          setVideoId(url.pathname.substring(1));
        } else if (
          url.hostname === 'www.youtube.com' ||
          url.hostname === 'youtube.com'
        ) {
          const params = new URLSearchParams(url.search);
          setVideoId(params.get('v') || '');
        } else {
          // If not a YouTube URL, treat as a direct video source
          setVideoError(true); // Trigger fallback logic
        }
      } catch (error) {
        console.error('Invalid video URL:', error);
        setVideoError(true);
      }
    }
  }, [videoUrl]);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full pb-[56.25%] overflow-hidden  rounded-lg">
      {!videoError ? (
        <>
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&mute=0&loop=1&playlist=${videoId}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={title || 'background video'}
              className="absolute top-0 left-0 w-full h-full"
              onError={() => setVideoError(true)}
            />
          ) : (
            <div
              className="absolute top-0 left-0 w-full h-full cursor-pointer"
              onClick={handlePlayVideo}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-50 rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                onError={(e) => {
                  e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                }}
                alt={title || 'Video thumbnail'}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          )}
        </>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full">
          {fallbackVideo ? (
            isPlaying ? (
              <video
                autoPlay
                controls
                className="w-full h-full object-cover">
                <source
                  src={fallbackVideo}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div
                className="w-full h-full cursor-pointer"
                onClick={handlePlayVideo}>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="bg-black bg-opacity-50 rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <img
                  src={poster || '/images/default-poster.jpg'}
                  alt={title || 'Video poster'}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            )
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded-lg">
              <p className="text-gray-300">Video unavailable</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
