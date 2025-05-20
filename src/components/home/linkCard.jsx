// 'use client';
// import { useState, useEffect } from 'react';
// import { MdFlight } from 'react-icons/md';
// import { IoTicketOutline } from 'react-icons/io5';
// import { GoGift } from 'react-icons/go';
// import { RiPoliceBadgeLine } from 'react-icons/ri';
// import { GiBowTieRibbon } from 'react-icons/gi';
// import { GiBigDiamondRing } from 'react-icons/gi';

// const data = [
//   {
//     video: 'https://youtu.be/ubd5GwdWvb8',
//     fallbackVideo: '/videos/strip-club-fallback.mp4',
//     poster:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/video1.jpg', // Add your poster image path
//     title: 'Male Strip Club',
//     location: '2 locations South Melbourne & Prahran',
//     link: {
//       href: '/shows',
//       label: 'See Dates and Buy Tickets',
//     },
//     pricing_title: 'Male strip club Melbourne is hosting',
//     pricing_des: 'the hottest show every weekend!',
//     pricing: [
//       {
//         name: 'General',
//         price: '$50',
//         limit: 'Per Person',
//         icon_data: {
//           icon: <IoTicketOutline />,
//           color: 'text-gray-500',
//         },
//       },
//       {
//         name: 'Silver',
//         price: '$50',
//         limit: 'Per Person',
//         icon_data: {
//           icon: <IoTicketOutline />,
//           color: 'text-gray-500',
//         },
//       },
//       {
//         name: 'Gold',
//         price: '$75',
//         limit: 'Per Person',
//         icon_data: {
//           icon: <IoTicketOutline />,
//           color: 'text-amber-300',
//         },
//       },
//       {
//         name: 'Plantinum',
//         price: '$95',
//         limit: 'Per Person',
//         icon_data: {
//           icon: <IoTicketOutline />,
//           color: 'text-gray-700',
//         },
//       },
//     ],
//   },
//   {
//     video: 'https://youtu.be/XJIjBfdt2es',
//     fallbackVideo: '/videos/at-your-place-fallback.mp4',
//     poster:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/video2.jpg', // Add your poster image path
//     title: 'At Your Place',
//     location: '',

//     link: {
//       href: '/shows',
//       label: 'View More details',
//     },
//     pricing_title:
//       'Hire sexy strippers and cheeky topless waiters for your next party',
//     pricing_des: 'combos available',
//     pricing: [
//       {
//         name: 'Topless Waiter',
//         price: '$100',
//         limit: 'per hour',
//         icon_data: {
//           icon: <GiBowTieRibbon />,
//           color: 'text-gray-500',
//         },
//       },
//       {
//         name: 'Partial Strip',
//         price: '$280',
//         limit: '15-20 minutes',
//         icon_data: {
//           icon: <RiPoliceBadgeLine />,
//           color: 'text-amber-300',
//         },
//       },
//       {
//         name: 'Full Strip',
//         price: '$280',
//         limit: '15-20 minutes',
//         icon_data: {
//           icon: <RiPoliceBadgeLine />,
//           color: 'text-amber-300',
//         },
//       },
//       {
//         name: 'Double Trouble',
//         price: '$560',
//         limit: '30 - 40 minutes',
//         icon_data: {
//           icon: <RiPoliceBadgeLine />,
//           color: 'text-amber-300',
//         },
//       },
//     ],
//   },
// ];

// export default function LinkCard() {
//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-11 w-full px-4 md:px-8">
//       {data?.map((d, i) => {
//         return (
//           <Card
//             key={i}
//             data={d}
//           />
//         );
//       })}
//     </div>
//   );
// }

// function Card({ data }) {
//   const [videoError, setVideoError] = useState(false);
//   const [videoId, setVideoId] = useState('');
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     // Extract YouTube video ID
//     if (data?.video) {
//       try {
//         // Handle different YouTube URL formats
//         const url = new URL(data.video);
//         if (url.hostname === 'youtu.be') {
//           setVideoId(url.pathname.substring(1));
//         } else if (
//           url.hostname === 'www.youtube.com' ||
//           url.hostname === 'youtube.com'
//         ) {
//           const params = new URLSearchParams(url.search);
//           setVideoId(params.get('v') || '');
//         }
//       } catch (error) {
//         console.error('Invalid YouTube URL:', error);
//         setVideoError(true);
//       }
//     }
//   }, [data?.video]);

//   const handlePlayVideo = () => {
//     setIsPlaying(true);
//   };

//   return (
//     <div className="text-white w-full max-w-md">
//       <div className="flex flex-col gap-2 justify-center items-center mb-4">
//         <h1 className="font-bold text-2xl uppercase">{data?.title}</h1>
//         <p className="text-amber-300 text-sm">{data?.location}</p>
//         <a
//           className="flex items-center justify-center uppercase my-6 bg-fuchsia-600 text-white py-2 px-4 rounded-full hover:bg-fuchsia-800 transition-colors"
//           href={data?.link?.href}>
//           {data?.link?.label}
//         </a>
//       </div>

//       {/* Video Container with consistent aspect ratio */}
//       <div className="relative w-full pb-[56.25%] overflow-hidden border border-yellow-700 rounded-lg">
//         {!videoError ? (
//           <>
//             {isPlaying ? (
//               <iframe
//                 src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&mute=0&loop=1&playlist=${videoId}`}
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen
//                 title="background video"
//                 className="absolute top-0 left-0 w-full h-full"
//                 onError={() => setVideoError(true)}
//               />
//             ) : (
//               <div
//                 className="absolute top-0 left-0 w-full h-full cursor-pointer"
//                 onClick={handlePlayVideo}>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="bg-black bg-opacity-50 rounded-full p-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-12 w-12 text-white"
//                       viewBox="0 0 24 24"
//                       fill="currentColor">
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   </div>
//                 </div>
//                 <img
//                   src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
//                   onError={(e) => {
//                     e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
//                   }}
//                   alt={data?.title}
//                   className="absolute top-0 left-0 w-full h-full object-cover"
//                 />
//               </div>
//             )}
//           </>
//         ) : (
//           <div className="absolute top-0 left-0 w-full h-full">
//             {data?.fallbackVideo ? (
//               isPlaying ? (
//                 <video
//                   autoPlay
//                   controls
//                   className="w-full h-full object-cover">
//                   <source
//                     src={data.fallbackVideo}
//                     type="video/mp4"
//                   />
//                   Your browser does not support the video tag.
//                 </video>
//               ) : (
//                 <div
//                   className="w-full h-full cursor-pointer"
//                   onClick={handlePlayVideo}>
//                   <div className="absolute inset-0 flex items-center justify-center z-10">
//                     <div className="bg-black bg-opacity-50 rounded-full p-4">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-12 w-12 text-white"
//                         viewBox="0 0 24 24"
//                         fill="currentColor">
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     </div>
//                   </div>
//                   <img
//                     src={data.poster || '/images/default-poster.jpg'}
//                     alt={data?.title}
//                     className="absolute top-0 left-0 w-full h-full object-cover"
//                   />
//                 </div>
//               )
//             ) : (
//               <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded-lg">
//                 <p className="text-gray-300">Video unavailable</p>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       <div className="mt-6">
//         <div className="flex flex-col justify-center text-center gap-2 items-center mb-6">
//           <h2 className="font-bold text-white">{data?.pricing_title}</h2>
//           <p className="text-sm mb-2 text-yellow-500">{data?.pricing_des}</p>
//         </div>
//         <div className="space-y-1">
//           {data?.pricing?.map((price, i) => (
//             <div
//               key={i}
//               className={`flex justify-between items-center py-3 px-2 ${
//                 i < data.pricing.length - 1 ? 'border-b border-gray-700' : ''
//               }`}>
//               <div className="flex items-center gap-2">
//                 <span className={`text-xl ${price.icon_data.color}`}>
//                   {price.icon_data.icon}
//                 </span>
//                 <span className="font-medium uppercase">{price.name}</span>
//               </div>
//               <div className="text-right">
//                 <div className="text-xl font-bold text-yellow-600">
//                   {price.price}
//                 </div>
//                 <div className="text-xs text-gray-400">{price.limit}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import { useState } from 'react';
import { MdFlight } from 'react-icons/md';
import { IoTicketOutline } from 'react-icons/io5';
import { GoGift } from 'react-icons/go';
import { RiPoliceBadgeLine } from 'react-icons/ri';
import { GiBowTieRibbon } from 'react-icons/gi';
import { GiBigDiamondRing } from 'react-icons/gi';
import VideoCard from './VideoCard'; // Adjust the path based on your file structure

const data = [
  {
    video: 'https://youtu.be/ubd5GwdWvb8',
    fallbackVideo: '/videos/strip-club-fallback.mp4',
    poster:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/video1.jpg',
    title: 'Male Strip Club',
    location: '2 locations South Melbourne & Prahran',
    link: {
      href: '/shows',
      label: 'See Dates and Buy Tickets',
    },
    pricing_title: 'Male strip club Melbourne is hosting',
    pricing_des: 'the hottest show every weekend!',
    pricing: [
      {
        name: 'General',
        price: '$50',
        limit: 'Per Person',
        icon_data: {
          icon: <IoTicketOutline />,
          color: 'text-gray-500',
        },
      },
      {
        name: 'Silver',
        price: '$50',
        limit: 'Per Person',
        icon_data: {
          icon: <IoTicketOutline />,
          color: 'text-gray-500',
        },
      },
      {
        name: 'Gold',
        price: '$75',
        limit: 'Per Person',
        icon_data: {
          icon: <IoTicketOutline />,
          color: 'text-amber-300',
        },
      },
      {
        name: 'Plantinum',
        price: '$95',
        limit: 'Per Person',
        icon_data: {
          icon: <IoTicketOutline />,
          color: 'text-gray-700',
        },
      },
    ],
  },
  {
    video: 'https://youtu.be/XJIjBfdt2es',
    fallbackVideo: '/videos/at-your-place-fallback.mp4',
    poster:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6f9d852/www.magicmen.com.au/wp-content/uploads/video2.jpg',
    title: 'At Your Place',
    location: '',
    link: {
      href: '/shows',
      label: 'View More details',
    },
    pricing_title:
      'Hire sexy strippers and cheeky topless waiters for your next party',
    pricing_des: 'combos available',
    pricing: [
      {
        name: 'Topless Waiter',
        price: '$100',
        limit: 'per hour',
        icon_data: {
          icon: <GiBowTieRibbon />,
          color: 'text-gray-500',
        },
      },
      {
        name: 'Partial Strip',
        price: '$280',
        limit: '15-20 minutes',
        icon_data: {
          icon: <RiPoliceBadgeLine />,
          color: 'text-amber-300',
        },
      },
      {
        name: 'Full Strip',
        price: '$280',
        limit: '15-20 minutes',
        icon_data: {
          icon: <RiPoliceBadgeLine />,
          color: 'text-amber-300',
        },
      },
      {
        name: 'Double Trouble',
        price: '$560',
        limit: '30 - 40 minutes',
        icon_data: {
          icon: <RiPoliceBadgeLine />,
          color: 'text-amber-300',
        },
      },
    ],
  },
];

export default function LinkCard() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-11 w-full px-4 md:px-8">
      {data?.map((d, i) => (
        <Card
          key={i}
          data={d}
        />
      ))}
    </div>
  );
}

function Card({ data }) {
  return (
    <div className="text-white w-full max-w-md">
      <div className="flex flex-col gap-2 justify-center items-center mb-4">
        <h1 className="font-bold text-2xl uppercase">{data?.title}</h1>
        <p className="text-amber-300 text-sm">{data?.location}</p>
        <a
          className="flex items-center justify-center uppercase my-6 bg-fuchsia-600 text-white py-2 px-4 rounded-full hover:bg-fuchsia-800 transition-colors"
          href={data?.link?.href}>
          {data?.link?.label}
        </a>
      </div>

      <VideoCard
        videoUrl={data.video}
        fallbackVideo={data.fallbackVideo}
        poster={data.poster}
        title={data.title}
      />

      <div className="mt-6">
        <div className="flex flex-col justify-center text-center gap-2 items-center mb-6">
          <h2 className="font-bold text-white">{data?.pricing_title}</h2>
          <p className="text-sm mb-2 text-yellow-500">{data?.pricing_des}</p>
        </div>
        <div className="space-y-1">
          {data?.pricing?.map((price, i) => (
            <div
              key={i}
              className={`flex justify-between items-center py-3 px-2 ${
                i < data.pricing.length - 1 ? 'border-b border-gray-700' : ''
              }`}>
              <div className="flex items-center gap-2">
                <span className={`text-xl ${price.icon_data.color}`}>
                  {price.icon_data.icon}
                </span>
                <span className="font-medium uppercase">{price.name}</span>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-yellow-600">
                  {price.price}
                </div>
                <div className="text-xs text-gray-400">{price.limit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
