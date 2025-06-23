'use client';
import React, { useState } from 'react';
import VideoHeroSection from '@/components/Shows/hero-2';
import Footer from '@/components/home/Footer';
import CustomH1 from '@/components/home/heading';
import MagicMenLayout from '@/components/home/naviagation';
import { GallaryList } from '../shows/male-strip-clubs/page';
import { ChevronDown } from 'lucide-react';

const gallary_data = [
  {
    link: '/19th-feb-melb',
    label: '19th Feb Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC09124-320x220.jpg',
  },
  {
    link: '/12th-feb-melb',
    label: '12th Feb Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC08760-320x220.jpg',
  },
  {
    link: '/5th-feb-melb',
    label: '5th Feb Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC8990-320x220.jpg',
  },
  {
    link: '#',
    label: '8th Feb Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC08200-320x220.jpeg',
  },
];

const search_location = [''];
export default function TouringShowPage() {
  return (
    <div>
      <MagicMenLayout height="h-[0vh]">
        {/* <VideoHeroSection /> */}
      </MagicMenLayout>
      <VideoHeroSection />

      <main className="text-white p-4 w-full md:w-4/5 font-roboto-mono space-y-6 mx-auto text-center">
        <CustomH1 text={`Australia’s No.1 Ladies night comes to you.`} />
        <h1 className="font-roboto-mono text-xl  font-bold">
          When we’re not doing our REGULAR stage shows in MELBOURNE, SYDNEY AND
          BRISBANE – Australia’s hottest Magic Men are touring each city around
          the country and we’re coming for you.{' '}
        </h1>
        <p className="font-roboto-mono italic text-sm">
          If your city is not listed and you would like the Magic Men to come
          out to you – simply have your local nightclub/pub/hotel/RSL or venue
          contact us through our website to book the Magic Men.
        </p>
        <div>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/XJIjBfdt2es"
            title="Magic Men X 2019 Trailer"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
        <p className="text-sm">
          Whatever your fantasy, Magic Men aim to tease, so grab your
          girlfriends, mum’s, sisters and cousins for the best Ladies Night Out
          in Australia! Keep an eye on this page for new local and international
          tours dates.
        </p>

        {/* Choose show */}
        <UpcomingShows />
        <span className="flex gap-4 items-center justify-center flex-wrap p-2">
          <a
            href="#"
            className="border block p-2 font-bold md:w-40 w-full hover:bg-white hover:text-black font-roboto-mono border-fuchsia-600 transition-colors rounded-full">
            FAQ
          </a>
          <a
            className="border block p-2 font-bold md:w-40 w-full hover:bg-white hover:text-black font-roboto-mono border-fuchsia-600 transition-colors rounded-full"
            href="#">
            T&C
          </a>
        </span>
      </main>

      <div className="w-full p-4 md:w-4/5 text-center mx-auto text-white">
        <h1 className="uppercase text-xl my-2 font-bold">
          Photos from our <b className="text-yellow-500/90">weekly event</b>
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {gallary_data.map((d, i) => {
            return (
              <GallaryList
                key={i}
                data={d}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const UpcomingShows = () => {
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  // Complete shows data
  const shows = [
    {
      id: 1,
      date: '31',
      month: 'MAY',
      day: 'Sat',
      city: 'MELBOURNE',
      venue: 'LOVE MACHINE',
      location: 'Victoria',
      link: 'https://www.eventbrite.com.au/e/magic-men-takeover-adelaide-tickets-1083856376599?aff=oddtdtcreator',
    },
    {
      id: 2,
      date: '31',
      month: 'MAY',
      day: 'Sat',
      city: 'SYDNEY',
      venue: 'SHARK HOTEL',
      location: 'New South Wales',
      link: 'https://www.eventbrite.com.au/e/magic-men-take-over-toowoomba-qld-tickets-1268373261569?aff=oddtdtcreator',
    },
    {
      id: 3,
      date: '31',
      month: 'MAY',
      day: 'Sat',
      city: 'BRISBANE',
      venue: 'WONDERLAND',
      location: 'Queensland',

      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319808587?aff=oddtdtcreator',
    },
    {
      id: 4,
      date: '31',
      month: 'MAY',
      day: 'Sat',
      city: 'GOLD COAST',
      venue: 'PLATINUM NIGHTCLUB',
      location: 'Queensland',
      link: 'https://www.eventbrite.com.au/e/magic-men-sydney-shark-hotel-sydney-cbd-tickets-965591629557?aff=oddtdtcreator',
    },
    {
      link: 'https://www.eventbrite.com.au/e/magic-men-gold-coast-surfers-paradise-tickets-972005894797?aff=oddtdtcreator',
      id: 5,
      date: '4',
      month: 'JUNE',
      day: 'Wed',
      city: 'AIRLIE BEACH',
      venue: 'AIRLIE BEACH HOTEL',
      location: 'Queensland',
    },
    {
      id: 6,
      date: '5',
      month: 'JUNE',
      day: 'Thu',
      city: 'YEPPOON',
      venue: 'THE CLUBHOUSE YEPPOON',
      location: 'Queensland',
      link: 'https://www.eventbrite.com.au/e/magic-men-takeover-newcastle-tickets-1083873929099?aff=oddtdtcreator',
    },
    {
      id: 7,
      date: '6',
      month: 'JUNE',
      day: 'Fri',
      city: 'MACKAY',
      venue: "SOUTH LEAGUE'S CLUB",
      location: 'Queensland',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 8,
      date: '7',
      month: 'JUNE',
      day: 'Sat',
      city: 'MELBOURNE',
      venue: 'LOVE MACHINE',
      location: 'Victoria',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 9,
      date: '7',
      month: 'JUNE',
      day: 'Sat',
      city: 'SYDNEY',
      venue: 'SHARK HOTEL',
      location: 'New South Wales',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 10,
      date: '7',
      month: 'JUNE',
      day: 'Sat',
      city: 'BRISBANE',
      venue: 'WONDERLAND',
      location: 'Queensland',
      link: `https://www.eventbrite.com.au/e/magic-men-takeover-armidale-nsw-tickets-1100701019379?aff=oddtdtcreator`,
    },
    {
      id: 11,
      date: '7',
      month: 'JUNE',
      day: 'Sat',
      city: 'GOLD COAST',
      venue: 'PLATINUM NIGHTCLUB',
      location: 'Queensland',
      link: `https://www.eventbrite.com.au/e/magic-men-takeover-armidale-nsw-tickets-1100701019379?aff=oddtdtcreator`,
    },
    {
      id: 12,
      date: '13',
      month: 'JUNE',
      day: 'Fri',
      city: 'ADELAIDE',
      venue: 'BRIDGEWAY HOTEL',
      location: 'South Australia',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 13,
      date: '13',
      month: 'JUNE',
      day: 'Fri',
      city: 'TOOWOOMBA',
      venue: 'THE POWER HOUSE',
      location: 'Queensland',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 14,
      date: '14',
      month: 'JUNE',
      day: 'Sat',
      city: 'MELBOURNE',
      venue: 'LOVE MACHINE',
      location: 'Victoria',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 15,
      date: '14',
      month: 'JUNE',
      day: 'Sat',
      city: 'SYDNEY',
      venue: 'SHARK HOTEL',
      location: 'New South Wales',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 16,
      date: '14',
      month: 'JUNE',
      day: 'Sat',
      city: 'BRISBANE',
      venue: 'WONDERLAND',
      location: 'Queensland',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 17,
      date: '14',
      month: 'JUNE',
      day: 'Sat',
      city: 'GOLD COAST',
      venue: 'PLATINUM NIGHTCLUB',
      location: 'Queensland',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 18,
      date: '20',
      month: 'JUNE',
      day: 'Fri',
      city: 'CABOOLTURE',
      venue: 'SUNDOWNER MOTEL',
      location: 'Queensland',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 19,
      date: '20',
      month: 'JUNE',
      day: 'Fri',
      city: 'TAMWORTH',
      venue: 'CAPITOL THEATRE TAMWORTH',
      location: 'New South Wales',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 20,
      date: '21',
      month: 'JUNE',
      day: 'Sat',
      city: 'NEWCASTLE',
      venue: 'NEX',
      location: 'New South Wales',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 21,
      date: '21',
      month: 'JUNE',
      day: 'Sat',
      city: 'MELBOURNE',
      venue: 'LOVE MACHINE',
      location: 'Victoria',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 22,
      date: '21',
      month: 'JUNE',
      day: 'Sat',
      city: 'SYDNEY',
      venue: 'SHARK HOTEL',
      location: 'New South Wales',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 23,
      date: '21',
      month: 'JUNE',
      day: 'Sat',
      city: 'BRISBANE',
      venue: 'WONDERLAND',
      location: 'Queensland',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 24,
      date: '21',
      month: 'JUNE',
      day: 'Sat',
      city: 'GOLD COAST',
      venue: 'PLATINUM NIGHTCLUB',
      location: 'Queensland',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 25,
      date: '25',
      month: 'JUNE',
      day: 'Wed',
      city: 'BUNBURY',
      venue: 'PRINCE OF WALES HOTEL',
      location: 'Western Australia',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 26,
      date: '26',
      month: 'JUNE',
      day: 'Thu',
      city: 'ROCKINGHAM',
      venue: 'ENCORE ROCKINGHAM',
      location: 'Western Australia',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 27,
      date: '26',
      month: 'JUNE',
      day: 'Thu',
      city: 'COBRAM',
      venue: 'GASWORKS BAR & LOUNGE',
      location: 'Victoria',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 28,
      date: '27',
      month: 'JUNE',
      day: 'Fri',
      city: 'ALBURY',
      venue: 'SSA CLUB ALBURY',
      location: 'New South Wales',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 29,
      date: '27',
      month: 'JUNE',
      day: 'Fri',
      city: 'PERTH',
      venue: 'METRO CITY CONCERT CLUB',
      location: 'Western Australia',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 30,
      date: '28',
      month: 'JUNE',
      day: 'Sat',
      city: 'MELBOURNE',
      venue: 'LOVE MACHINE',
      location: 'Victoria',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 31,
      date: '28',
      month: 'JUNE',
      day: 'Sat',
      city: 'SYDNEY',
      venue: 'SHARK HOTEL',
      location: 'New South Wales',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 32,
      date: '28',
      month: 'JUNE',
      day: 'Sat',
      city: 'BRISBANE',
      venue: 'WONDERLAND',
      location: 'Queensland',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 33,
      date: '28',
      month: 'JUNE',
      day: 'Sat',
      city: 'FREMANTLE',
      venue: 'METROPOLIS FREMANTLE',
      location: 'Western Australia',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 34,
      date: '28',
      month: 'JUNE',
      day: 'Sat',
      city: 'GOLD COAST',
      venue: 'PLATINUM NIGHTCLUB',
      location: 'Queensland',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 35,
      date: '29',
      month: 'JUNE',
      day: 'Sun',
      city: 'BROOME',
      venue: 'DIVERS TAVERN',
      location: 'Western Australia',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 36,
      date: '4',
      month: 'JULY',
      day: 'Fri',
      city: 'MORNINGSIDE',
      venue: 'COLMSLIE HOTEL',
      location: 'Queensland',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 37,
      date: '4',
      month: 'JULY',
      day: 'Fri',
      city: 'ARMIDALE',
      venue: 'ARMIDALE EX SERVICES',
      location: 'New South Wales',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 38,
      date: '4',
      month: 'JULY',
      day: 'Fri',
      city: 'CASINO',
      venue: 'CASINO RSM CLUB',
      location: 'New South Wales',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 39,
      date: '4',
      month: 'JULY',
      day: 'Fri',
      city: 'DARWIN',
      venue: 'MINDIL BEACH CASINO RESORT',
      location: 'Northern Territory',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 40,
      date: '5',
      month: 'JULY',
      day: 'Sat',
      city: 'MELBOURNE',
      venue: 'LOVE MACHINE',
      location: 'Victoria',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
    {
      id: 41,
      date: '5',
      month: 'JULY',
      day: 'Sat',
      city: 'SYDNEY',
      venue: 'SHARK HOTEL',
      location: 'New South Wales',
      link: 'https://www.eventbrite.com.au/e/magic-men-melbourne-love-machine-tickets-967319828647?aff=oddtdtcreator',
    },
  ];

  const locations = [
    'All Locations',
    'Victoria',
    'New South Wales',
    'Queensland',
    'South Australia',
    'Western Australia',
    'Northern Territory',
    'Canada',
    'New Zealand',
    'USA',
  ];

  // Filter shows based on selected location
  const filteredShows =
    selectedLocation === 'All Locations'
      ? shows
      : shows.filter((show) => show.location === selectedLocation);

  return (
    <section className="bg-transparent py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-wider">
            UPCOMING SHOWS
          </h1>

          {/* Location Filter */}
          <div className="inline-block">
            <p className="text-yellow-500/90 text-sm mb-3 uppercase tracking-wide">
              Choose your Location
            </p>
            <div className="relative">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="appearance-none bg-white text-black px-6 py-3 pr-12 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 cursor-pointer min-w-[200px] text-center">
                {locations.map((location) => (
                  <option
                    key={location}
                    value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Desktop Table View - Hidden on mobile */}
        <div className="hidden md:block overflow-hidden rounded-lg border border-gray-700">
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-gray-800/50 border-b border-gray-700">
            <div className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
              DATE
            </div>
            <div className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
              CITY
            </div>
            <div className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
              VENUE
            </div>
            <div className="px-6 py-4 text-center text-sm font-semibold text-gray-300 uppercase tracking-wider">
              TICKETS
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-gray-800/30">
            {filteredShows.length > 0 ? (
              filteredShows.map((show, index) => (
                <div
                  key={show.id}
                  className={`grid grid-cols-4 border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors duration-200 ${
                    index % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-800/10'
                  }`}>
                  {/* Date */}
                  <div className="px-6 py-6 flex items-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-400 leading-none">
                        {show.date}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        {show.month} {show.day}
                      </div>
                    </div>
                  </div>

                  {/* City */}
                  <div className="px-6 py-6 flex items-center">
                    <div className="text-xl font-bold text-orange-400 uppercase tracking-wide">
                      {show.city}
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="px-6 py-6 flex items-center">
                    <div className="text-lg font-semibold text-white uppercase">
                      {show.venue}
                    </div>
                  </div>

                  {/* Tickets */}
                  <div className="px-6 py-6 flex items-center justify-center">
                    <a
                      href={show?.link}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm uppercase tracking-wide">
                      Buy Tickets
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-12 text-center">
                <p className="text-gray-400 text-lg">
                  No shows available for the selected location.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Card View - Only visible on mobile */}
        <div className="md:hidden space-y-4">
          {filteredShows.length > 0 ? (
            filteredShows.map((show) => (
              <div
                key={show.id}
                className="bg-gray-800/40 border border-gray-700 rounded-lg overflow-hidden">
                {/* Date Row */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700/50 bg-gray-900/30">
                  <span className="text-gray-300 font-medium uppercase tracking-wide text-sm">
                    Date
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400 leading-none">
                      {show.date}
                      <span className="text-sm text-gray-400 ml-1">
                        {show.month} {show.day}
                      </span>
                    </div>
                  </div>
                </div>

                {/* City Row */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700/50">
                  <span className="text-gray-300 font-medium uppercase tracking-wide text-sm">
                    City
                  </span>
                  <div className="text-xl font-bold text-orange-400 uppercase tracking-wide">
                    {show.city}
                  </div>
                </div>

                {/* Venue Row */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700/50">
                  <span className="text-gray-300 font-medium uppercase tracking-wide text-sm">
                    Venue
                  </span>
                  <div className="text-right">
                    <div className="text-white font-semibold uppercase text-sm leading-tight max-w-[200px]">
                      {show.venue}
                    </div>
                  </div>
                </div>

                {/* Tickets Row */}
                <div className="flex items-center justify-between px-6 py-4">
                  <span className="text-gray-300 font-medium uppercase tracking-wide text-sm">
                    Tickets
                  </span>

                  <a
                    href={show?.link}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wide">
                    Buy Tickets
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-gray-800/40 border border-gray-700 rounded-lg px-6 py-12 text-center">
              <p className="text-gray-400 text-lg">
                No shows available for the selected location.
              </p>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            More dates to be announced soon. Follow us for updates!
          </p>
        </div>
      </div>
    </section>
  );
};
