'use client';
import { useState } from 'react';
import { MdFlight } from 'react-icons/md';
import { IoTicketOutline } from 'react-icons/io5';
import { GoGift } from 'react-icons/go';
import { RiPoliceBadgeLine } from 'react-icons/ri';
import { GiBowTieRibbon } from 'react-icons/gi';
import { GiBigDiamondRing } from 'react-icons/gi';
import VideoCard from './videoCard';

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
