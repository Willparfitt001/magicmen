'use client';
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import MagicMenLayout from '@/components/home/naviagation';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
import CustomH1 from '@/components/home/heading';
import VideoCard from '@/components/home/videoCard';
import BookingTable from '@/components/global/BookingTable';
import Enquire from '@/components/global/Enquire';
import ShowSchedule from '@/components/global/table';
import Footer from '@/components/home/Footer';
import { PerformerCard } from '@/components/home/stripperCard';
import Faq from '@/components/home/faq';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { FaRegImages } from 'react-icons/fa';
import { FaRegCalendar } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import ImageCarousel from '@/components/home/3DImage';

// Sample performer data  880067686
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

const faqs_data = [
  {
    question: 'Can I buy tickets at the door?',
    answer: `
While we do sell tickets at the door, we’re usually booked out well in advance, by as much as 3-4 weeks! We strongly recommend making a booking, not just because it guarantees you a ticket, but because seats are reserved. This way, you can choose the best seats in the house instead of being stuck with standing tickets if you buy them on the night.
  `,
  },
  {
    question: 'Are men allowed to come?',
    answer: `

Of course! Everyone is invited to join in the party. Magic Men is an LGBTQ+ friendly and all-inclusive venue.`,
  },
  {
    question: 'Does our hen or birthday girl get to go up on stage?',
    answer: `

If you’ve booked your hens night, birthday, or girls’ night in advance and we know it’s a special event, you can be sure the guest of honor is up for a night to remember. We’ll bring them up on stage at some point throughout the show to experience the magic first-hand.

We also have optional private shows available to add to your booking for a flat fee of $350 (VIC) or $380 (NSW & QLD). These are held in a separate area with just your group and the man of your choice. They’re great for making your night just a little more special.
 `,
  },
  {
    question: 'Can I reserve seating for the show?',
    answer: `
Silver seating (Our basic seating) is always allocated based on the time of booking and the size of your group. Usually, seats will be reserved based on how early you make your deposit, so the earlier you place your deposit the better the seating you’ll get. And trust us, we know where the best seats are!

If you want to book specific seats, such as in a booth or in the front row, you can request to upgrade your booking once you’ve made it. You can upgrade to Platinum VIP seating (Front 3 rows closest to the stage) or Gold priority seating (4th row to middle of the venue).`,
  },
  {
    question: 'Can I take photos on the night?',
    answer: `

It is not permitted to take photos or record the event while the show is happening. However, while the waiters are topless during the intermission you’re free to take as many photos as you want with them. We also have a professional photographer who comes by to take photographs throughout the night. All pictures are uploaded to this site on Monday after the weekend. CLICK HERE to see the photos.`,
  },
  {
    question: 'HOW WILL I COORDINATE WITH THE STRIPPER ABOUT HIS SHOW?',
    answer: `

A: Our Melbourne male strippers will inform you what time he will arrive, giving you enough time to get ready for his show. If your party venue is in a hotel or a private location, to make sure that the show will go on time as planned, it may be necessary to meet him or have someone pick him up, or give him access to your party place.`,
  },
  {
    question: 'Do you do parties?',
    answer: `


We do! You can even book one of our hunks for a private show at a location of your choice. Choose your male stripper, set your time and location, and we’ll rock up to give you a fun night and the show of a lifetime. It’s the perfect thing to spice up your hens party, girls night or birthday party.`,
  },
];

const sampleTicketOptions = [
  {
    id: 'general',
    label: 'A. GENERAL STANDING',
    price: '$50',
    benefits: [
      'tickets are for Standing area only',
      'Complimentary glass of Champagne.',
      'Tickets to the after party',
      'Hot finger food',
    ],
    buttonText: 'BUY TICKETS',
  },
  {
    id: 'silver',
    label: 'B. SILVER SEATING',
    price: '$50',
    benefits: [
      'Silver reserved seating',
      'Complimentary glass of Champagne',
      'Tickets to the after party',
      ' Hot finger food',
    ],
    buttonText: 'BUY TICKETS',
  },
  {
    id: 'priority',
    label: 'C. PRIORITY SEATING',
    price: '$75',
    benefits: [
      'Gold reserved seating',
      'Complimentary glass of Champagne',
      'Tickets to the after party',
      ' Hot finger food',
    ],
    buttonText: 'BUY TICKETS',
  },
  {
    id: 'vip',
    label: 'D. VIP SEATING',
    price: '$95',
    benefits: [
      'Guaranteed closest rows to the stage or VIP Booth on the night and priority entry into Magic Men Fever. Entry includes:',
      'Complimentary glass of Champagne',
      'Tickets to the after party',
      ' Hot finger food',
    ],
    buttonText: 'BUY TICKETS',
  },
];

const scheduleItems = [
  { time: '6:00PM', icon: '⌛', event: 'Line up and check in' },
  {
    time: '7:00PM',
    icon: '🍸',
    event: 'Pre-drinks & mingling with topless waiters',
  },
  { time: '7:15PM', icon: '🔥', event: 'Show time!' },
  { time: '15 MIN', icon: '💃', event: 'Interval 1 – dance break' },
  { time: '8:00PM', icon: '🔥', event: 'Part 2 Commences' },
  { time: '15 MIN', icon: '💃', event: 'Interval 2 – dance break' },
  { time: '9:00PM', icon: '🔥', event: 'Final Part' },
  { time: '9:30PM', icon: '🎉', event: 'Show ends & after party begins' },
];
const carouselImages = [
  {
    src: 'https://www.magicmen.com.au/wp-content/uploads/strippers7-1.jpg',
    alt: 'Male Dancer 1',
    logo: true,
    isVideo: false,
  },
  {
    src: 'https://www.magicmen.com.au/wp-content/uploads/strippers7-1.jpg',
    alt: 'Male Dancer 2',
    logo: true,
    isVideo: false,
  },
  {
    src: 'https://www.magicmen.com.au/wp-content/uploads/strippers7-1.jpg',
    alt: 'Dance Party',
    logo: true,
    isVideo: true,
  },
];

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
// Define prop types for ticket options
// ticketOptions should be an array of objects with:
// - id: unique identifier
// - label: section label (e.g., "A. GENERAL STANDING")
// - price: ticket price (e.g., "$50")
// - benefits: array of strings listing benefits
// - buttonText: text for the button (e.g., "BUY TICKETS")

export function TicketOptions({
  ticketOptions = [],
  defaultOpen = null,
  onBuyTicket = () => {},
  containerClassName = 'max-w-lg bg-black text-white border transition-colors border-purple-700 ',
}) {
  const [expandedSection, setExpandedSection] = useState(defaultOpen);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className={containerClassName}>
      {ticketOptions.map((option, index) => (
        <div
          key={option.id}
          className={
            index < ticketOptions.length - 1 ? 'border-b border-purple-700' : ''
          }>
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => toggleSection(option.id)}>
            <div className="flex items-center">
              {expandedSection === option.id ? (
                <ChevronUp className="h-4 w-4 mr-2 text-yellow-500/90" />
              ) : (
                <ChevronDown className="h-4 w-4 mr-2 text-yellow-500/90" />
              )}
              <span className="text-yellow-500/90 font-medium">
                {option.label}
              </span>
            </div>
            <span className="text-xl font-bold">{option.price}</span>
          </div>

          {expandedSection === option.id && (
            <div className="px-4 pb-6">
              <h3 className="uppercase font-bold mb-4">WHAT YOU GET</h3>
              <ul className="space-y-3">
                {option.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start">
                    <span className="text-sm mr-2">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-6 bg-green-500 hover:bg-green-600 text-black font-medium py-2 px-8 rounded"
                onClick={() => onBuyTicket(option)}>
                {option.buttonText || 'BUY TICKETS'}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const VimeoPlayer = ({ videoId = '896078977' }) => {
  return (
    <div className="relative w-full pt-[56.25%]">
      {' '}
      {/* 16:9 Aspect Ratio */}
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?autoplay=0&title=0&byline=1&portrait=5`}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo Video Player"></iframe>
    </div>
  );
};

export default function MaleStrippersPage() {
  const handleBuyTicket = (ticket) => {
    console.log('Purchasing ticket:', ticket);
    // Handle ticket purchase logic here
  };
  return (
    <div>
      <MagicMenLayout height="h-[50vh]">
        <GeneralHeroSection />
      </MagicMenLayout>
      <main className="bg-black pt-24">
        <div className="justify-center text-base text-slate-100 items-center p-3 flex flex-col">
          <CustomH1 text={'Male Strip Clubs Melbourne'} />
          {/* flex */}
          <div className=" flex justify-center space-y-3 py-11 items-start w-full md:w-4/5 gap-6">
            {/* LHS */}
            <div className="w-full md:w-1/2  space-y-3">
              <h1 className="text-center text-2xl text-yellow-500/90">
                Ladies’ Most Lavish Night Out
              </h1>
              <div className="space-y-2">
                <span className="flex items-center gap-2">
                  <FaRegCalendar className="text-yellow-500/90" />
                  <p>Saturdays</p>
                </span>
                <span className="flex items-center gap-2">
                  <FaRegClock className="text-yellow-500/90" />
                  <p>6:00 pm till 9:30 pm</p>
                </span>
                <span className="flex items-center gap-2">
                  <FaLocationDot className="text-yellow-500/90" />
                  <p>
                    <b className="text-yellow-500/90">Billboards Nightclub:</b>{' '}
                    170 Russell St, Melbourne CBD
                  </p>
                </span>
                <span className="flex items-center gap-2">
                  <FaLocationDot className="text-yellow-500/90" />
                  <p>
                    <b className="text-yellow-500/90">Love Machine:</b> 228
                    Malvern rd, Prahran
                  </p>
                </span>
              </div>
              <a
                className="bg-green-600 text-black hover:bg-green-800 w-80 p-2 block mx-auto text-center rounded-lg"
                href="#">
                Buy Tickets
              </a>
              <TicketOptions
                ticketOptions={sampleTicketOptions}
                defaultOpen="general"
                onBuyTicket={handleBuyTicket}
              />
            </div>
            {/* RHS */}
            <div className="w-full md:w-1/2 space-y-3">
              <span className="flex justify-between font-bold uppercase items-center">
                <a
                  className="flex items-center gap-2"
                  href="#">
                  <FaRegCircleQuestion className="hover:text-purple-600" />
                  FAQ
                </a>
                <a
                  className="flex items-center gap-2"
                  href="#">
                  {' '}
                  <FaRegImages className="hover:text-purple-600" />
                  SEE EVEnts PHOTOS
                </a>
              </span>
              <div className="border border-yellow-500">
                <VimeoPlayer videoId="880067686" />
              </div>
            </div>
          </div>
          <CustomH1 text={'Feel the Magic'} />

          <div className="flex flex-col items-center p-2 justify-center gap-4">
            <p className="w-full md:w-4/5 leading-7 text-center">
              Australia’s most anticipated men are heating up the town Magic
              Men’s “FEEL THE MAGIC” showcases its most talented male strippers
              in a heart-stopping live performance. Featuring the guys from
              MAGIC MEN, this one-of-a-kind stage show tears up the stage with
              hot hunks, smooth moves and lighting spectacle guaranteed to make
              it a night out to remember. Voted Australia’s BEST MALE DANCE
              GROUP, find out what makes this group of guys the talk of the
              town.
            </p>
          </div>
        </div>
        {/* Grid component */}
        <section className="flex flex-col px-4 md:px-24 gap-4 pt-8 md:flex-row md:items-start md:justify-center">
          <div className="w-full md:w-1/2">
            <img
              className="object-cover w-full h-full"
              alt="jjjh"
              src="/images/layout-1.png"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl text-white uppercase font-bold my-4 text-center">
              Show Schedule
            </h1>
            <ShowSchedule scheduleData={scheduleItems} />
          </div>
        </section>
        <div className="text-white my-6 space-y-3 text-center w-full p-4 md:w-4/5 mx-auto">
          <CustomH1
            text={`Experience Melbourne's best male strip club and show`}
          />
          <h1 className="text-2xl text-white uppercase font-bold my-4 text-center">
            SO, NEVER BEEN TO A SHOW?
          </h1>
          <p>
            Want to find out just how the magic happens at Magic Men live male
            strip shows? If you haven’t been to a live show before and you want
            to know what goes down, here are some of the amazing insights of
            what you can expect on the night and so you can better plan your
            ladies’ night out, HENS PARTY or celebrate any memorable occasion
            there is.
          </p>

          <ImageCarousel images={carouselImages} />
        </div>

        {/* Text content */}

        <div className="w-full p-4 md:w-4/5 text-center mx-auto space-y-6 my-11 text-white">
          <CustomH1 text={'Book Now and Experience the Magic'} />
          <p className="leading-7">
            You can make a booking online, over the phone, or through email. Our
            team is ready to help you and answer your questions. But don’t wait
            too long, as the leading male strip club in Melbourne, our male
            strip show is usually booked out weeks in advance! Book today to
            secure your spot.{' '}
          </p>
          <a
            href="#"
            className="uppercase rounded-md block mx-auto p-3 w-60 text-center text-white font-bold hover:bg-white hover:text-black border border-purple-800 transition-colors">
            Buy tickets
          </a>
        </div>

        <ShowFaq />
        <div className="w-full p-4 md:w-4/5 text-center mx-auto text-white">
          <CustomH1 text={`Photos from our weekly event`} />
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
      </main>
      <Footer></Footer>
    </div>
  );
}

function ShowFaq() {
  return (
    <div className="text-white">
      <span className="-mb-8">
        {' '}
        <CustomH1 text={'Frequently Asked Questions'} />
      </span>
      <Faq faqs={faqs_data} />
    </div>
  );
}

export function GallaryList({ data }) {
  return (
    <div className="text-white  ">
      <a
        className="space-y-4"
        href={data?.link}>
        <img
          className="border border-yellow-500/90 object-cover"
          alt="hjdd"
          src={data?.image}
        />
        <p className="font-bold uppercase">{data?.label}</p>
      </a>
    </div>
  );
}
