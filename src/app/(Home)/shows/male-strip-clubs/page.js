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
    name: 'Eli',
    bgColor: 'bg-red-500',
    role: '',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/wp-content/uploads/430657206_780572270209399_5286855285220364805_n-1-290x420.jpg',
    height: '6`11',
    eyes_color: ` BLUE`,
    hair_color: 'DARK BROWN',
    star_sign: 'tarus',
    shows: ['cop'],
    bio: [
      `Eli is the ultimate charismatic, cocky cop. If you break the law, this man in uniform will arrest you in the sexiest way. With his ripped and chiselled abs, he’ll take control of your party and serve you with intense and insanely hot moves that will make your heart beat hard.`,
      `This stripper has it all. When you hear him knock on your door, you know the heat will be intense, and the party is really about to start.`,
      `Girls go crazy for Eli, and there are no surprises as to why. Not only is he drop-dead gorgeous and raring to make you scream underneath it all, but he also’s the perfect gentleman and is a master of making all of your guests feel special.`,
      `So, sit back, relax and watch his seductive performance. Go wild while the night is young and this sexy cop in action will blow your mind. With Eli setting the mood at every event, your hens party will be a night to remember.`,
      `Book him today and make all your dreams come true.`,
    ],
    mediaPreview: [
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-90a4338/www.magicmen.com.au/gallery/melbourne-waiter-nick-b/cache/431105658_1142921813371059_1408044918287041199_n.jpg-nggid0566089-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-90a4338/www.magicmen.com.au/gallery/melbourne-waiter-nick-b/cache/431105658_1142921813371059_1408044918287041199_n.jpg-nggid0566089-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-90a4338/www.magicmen.com.au/gallery/melbourne-waiter-nick-b/cache/431105658_1142921813371059_1408044918287041199_n.jpg-nggid0566089-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-90a4338/www.magicmen.com.au/gallery/melbourne-waiter-nick-b/cache/431105658_1142921813371059_1408044918287041199_n.jpg-nggid0566089-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-90a4338/www.magicmen.com.au/gallery/melbourne-waiter-nick-b/cache/431105658_1142921813371059_1408044918287041199_n.jpg-nggid0566089-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.jpg',
        premium: false,
      },
    ],
    services: {
      id: 1,
      title: '1 Stripper',
      subtitle: 'Standard Combo',
      performers: '3 Total',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic19Dec161-450x300.jpg`,

      icon: '👨‍🍳',
      combo: 'STANDARD COMBO',
      description: 'Great for groups medium-sized groups up to 10-30 people',
      showDuration: '15-20 min show',
      waiterService:
        '2 hr premium waiter service for food/drinks, photos, game hosting and setting up',
      price: 700,
      deposit: 310,
    },
  },
  {
    id: 2,
    name: 'ash Summer',
    bgColor: 'bg-yellow-500',
    role: '',
    image: '/images/ash.webp',
    height: '6`0',

    eyes_color: ` BLUE`,
    hair_color: 'DARK BROWN',
    star_sign: 'tarus',
    shows: ['cop', 'soldier', 'fireman', 'cowboy'],
    bio: [
      `Ash Summers of Magic Men is suave and seductive. Ladies are captivated by his every show because of his good looks and hot and steamy performance. Just look at his smooth, sculpted body and gorgeous face. This man can make your party ravishing and phenomenal with his killer fireman routine- who could resist that man in uniform? Let your lady guests swoon over by his sexy dance moves and charming personality. You know you won’t be able to keep your hands off!`,
      `Ash will take care of your guests whilst putting on the best performance at your party. Guaranteed to make the ladies smile from ear to ear when they watch him, he’s one man you definitely don’t want to miss out on. Let Ash Summers’ seductive presence fill your private venue for all your girls to enjoy. You won’t be disappointed!`,
    ],
    mediaPreview: [
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/dave-2/thumbs/thumbs_jeremy-brown-magicmen-4.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/dave-2/thumbs/thumbs_jeremy-brown-magicmen-1.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/dave-2/thumbs/thumbs_thumbnail_jeremy-brown-magicmen-1.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/dave-2/thumbs/thumbs_Ash-Melbourne-stripper.jpeg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/dave-2/thumbs/thumbs_Stripper-Ash-Melbourne.jpeg',
        premium: false,
      },
    ],
    services: {
      id: 1,
      title: '1 Stripper',
      subtitle: 'Standard Combo',
      performers: '3 Total',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic19Dec161-450x300.jpg`,

      icon: '👨‍🍳',
      combo: 'STANDARD COMBO',
      description: 'Great for groups medium-sized groups up to 10-30 people',
      showDuration: '15-20 min show',
      waiterService:
        '2 hr premium waiter service for food/drinks, photos, game hosting and setting up',
      price: 700,
      deposit: 310,
    },
  },
  {
    id: 3,
    name: 'Will Parfitt – Hottest Male Stripper',
    bgColor: 'bg-white',
    role: 'Spunky, and Drop-dead Gorgeous Boy-next-door',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/wp-content/uploads/Will-exotic-dancer-Melbourne-e1693902739436-290x420.png',
    height: '6`0',
    mediaPreview: [
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-90a4338/www.magicmen.com.au/gallery/melbourne-waiter-nick-b/cache/431105658_1142921813371059_1408044918287041199_n.jpg-nggid0566089-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/melbourne-stripper-jaxon/thumbs/thumbs_thumbnail_IMG_3655.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/melbourne-stripper-jaxon/thumbs/thumbs_2ee55e89-951d-4f1d-8bd4-55e50e9a2562.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-90a4338/www.magicmen.com.au/gallery/melbourne-waiter-nick-b/cache/431105658_1142921813371059_1408044918287041199_n.jpg-nggid0566089-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/melbourne-stripper-jaxon/thumbs/thumbs_Jaxon4.jpg',
        premium: false,
      },
    ],
    eyes_color: ` Green`,
    hair_color: ' Brown',
    star_sign: 'Cancer',
    shows: [
      'Soldier',
      'Policeman',
      'Fireman',
      'Doctor',
      'Grease',
      '50 Shades',
      'Top Gun',
      'Cowboy',
    ],
    bio: [
      `When you look like a very popular person, you might as well cash in! With his uncanny resemblance to Channing Tatum, Will Parfitt is undoubtedly the most sought-after male stripper at MAGIC MEN.`,
      `He’s got more than just the looks. Will boasts of a repertoire of electrifying dance moves that will leave all the women breathless just by watching. It’s even better when he starts getting up close and personal at your hens party.`,
      `Will can spice up a birthday or a hens night party with his wide variety of costumes. But, did you know he can also be your very own performer at your next event?`,
      `To secure this beautiful face of Magic Men, book your event with Will months in advance. He books out fast so send a business enquiry – feel free to fill out a contact form below or call us right away. Catch him also at our MALE STRIP SHOW.`,
    ],
    services: {
      id: 1,
      title: '1 Stripper',
      subtitle: 'Premium',
      performers: '3 Total',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic19Dec161-450x300.jpg`,

      icon: '👨‍🍳',
      combo: 'STANDARD COMBO',
      description: 'Great for groups medium-sized groups up to 10-30 people',
      showDuration: '15-20 min show',
      waiterService:
        '2 hr premium waiter service for food/drinks, photos, game hosting and setting up',
      price: 1000,
      deposit: 500,
    },
  },
  {
    id: 4,
    name: 'Jaxon',
    bgColor: 'bg-blue-900',
    role: '',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/wp-content/uploads/jaxon-magi-cmen-290x420.jpeg',
    height: '6`0',
    mediaPreview: [
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-90a4338/www.magicmen.com.au/gallery/melbourne-waiter-nick-b/cache/431105658_1142921813371059_1408044918287041199_n.jpg-nggid0566089-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/melbourne-stripper-jaxon/thumbs/thumbs_thumbnail_IMG_3655.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/melbourne-stripper-jaxon/thumbs/thumbs_2ee55e89-951d-4f1d-8bd4-55e50e9a2562.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-90a4338/www.magicmen.com.au/gallery/melbourne-waiter-nick-b/cache/431105658_1142921813371059_1408044918287041199_n.jpg-nggid0566089-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/melbourne-stripper-jaxon/thumbs/thumbs_Jaxon4.jpg',
        premium: false,
      },
    ],
    eyes_color: ` BLUE`,
    hair_color: ' BLONDE',
    star_sign: 'leo',
    shows: ['Sons of Anarchy', 'Cowboy', '50 Shades of grey', 'Magic Mike'],
    bio: [
      `If you’re looking for someone sexy to set fire to your soul, then search no further than our man Jaxon. This man is hotter than hell and sure to get any party started. This stud has such a passionate gaze and will melt the heart of your guests. He is dependable with different roles in performances at hen’s parties and events.`,
      `If you want your party to be the bomb, let Jaxon work his magic and stun your ladies with his energy and charming bravado.`,
      `This Australian hottie is your go-to at making celebrations special. Send us your enquiry, now!`,
      ,
    ],
    services: {
      id: 1,
      title: '1 Stripper',
      subtitle: 'Premium',
      performers: '3 Total',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic19Dec161-450x300.jpg`,

      icon: '👨‍🍳',
      combo: 'STANDARD COMBO',
      description: 'Great for groups medium-sized groups up to 10-30 people',
      showDuration: '15-20 min show',
      waiterService:
        '2 hr premium waiter service for food/drinks, photos, game hosting and setting up',
      price: 900,
      deposit: 450,
    },
  },
  {
    id: 5,
    name: 'Blake',
    bgColor: 'bg-purple-500',
    role: '',
    image:
      'https://www.magicmen.com.au/gallery/melbourne-stripper-blake/cache/Blake-Feds-3.jpg-nggid0565634-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.jpg',
    // height: '6`1',
    height: '6`0',

    eyes_color: ` Hazel`,
    hair_color: 'DARK BROWN',
    star_sign: 'Libra',
    shows: ['cop', '50 shades', 'fireman', 'cowboy'],
    bio: [
      `Does anyone need water? It’s getting hot in here! If you’re looking for a hot hunk to sizzle up your next hens party or any event, then Blake is your guy! When Blake isn’t Maverick on our Magic Men stage, he is one of our most requested private strippers!`,
      `Oozing with sex appeal, Blake is the perfect mix of hot, cheeky, and gentle. Whilst known for his magical dance moves, Blake’s infectious smile, ripped muscles and charisma will exceed your party’s wildest dreams! Magic Men’s king of intimacy, he always leaves the party aroused and tingling!`,
      `Always aiming to please, Blake will treat the party to a night like no other! Willing to meet your deepest desires, let him know what you fancy most: Handcuffed by a cop? Rescued by a hunky firefighter? Or something else? Book him today to ensure your party goes off with a bang!`,
      `Book him for your next private party and be ready for an amazing show only he can perform.`,
    ],
    mediaPreview: [
      {
        type: 'image',
        src: 'https://www.magicmen.com.au/gallery/melbourne-stripper-blake/thumbs/thumbs_Blake-Feds-3.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/dave-2/thumbs/thumbs_jeremy-brown-magicmen-1.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/dave-2/thumbs/thumbs_thumbnail_jeremy-brown-magicmen-1.jpghttps://www.magicmen.com.au/gallery/melbourne-stripper-blake/thumbs/thumbs_Blake-Feds-4.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://www.magicmen.com.au/gallery/melbourne-stripper-blake/thumbs/thumbs_Blake-Feds-1.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://www.magicmen.com.au/gallery/melbourne-stripper-blake/thumbs/thumbs_blake-clarke-1-min-1.jpg',
        premium: false,
      },
    ],
    services: {
      id: 1,
      title: '1 Stripper',
      subtitle: 'Standard Combo',
      performers: '3 Total',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic19Dec161-450x300.jpg`,

      icon: '👨‍🍳',
      combo: 'STANDARD COMBO',
      description: 'Great for groups medium-sized groups up to 10-30 people',
      showDuration: '15-20 min show',
      waiterService:
        '2 hr premium waiter service for food/drinks, photos, game hosting and setting up',
      price: 700,
      deposit: 310,
    },
  },
  {
    id: 6,
    name: 'Blake',
    bgColor: 'bg-purple-500',
    role: '',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/jaxson/thumbs/thumbs_jesse-magicmen-6.jpg',
    height: '6`11',
    eyes_color: `blue`,
    hair_color: ' Blonde',
    star_sign: 'Libra',
    bio: [
      `Tradie by day and stripper by night, Jesse Cruze is ready to rock your world. Our bold, blonde and gorgeous Jesse knows how to get the ladies wanting more. If you need a dynamic performer with lots of energy to turn the party up a notch, then you’ve got the right guy. Jesse loves adventures the same as you do, and he knows how well to manage wild hen parties.`,
      `Do you love to invite a guy to your event who can sing and dance really well? Book him for a boyband sexy routine for a stylish, suave party everyone will talk about.`,
    ],
    shows: ['S.W.A.T', 'Sing and Strip', 'Boyband routine', 'Ken (Barbie)'],
    mediaPreview: [
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/jaxson/thumbs/thumbs_1_magicmen_3.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/jaxson/thumbs/thumbs_magicmen_1.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/jaxson/thumbs/thumbs_Stripper-Jesse-Cruze-.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/jaxson/thumbs/thumbs_Jesse-male-stripper-Magic-Men.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/jaxson/thumbs/thumbs_jesse-magicmen-6.jpg',
        premium: false,
      },
    ],
    services: {
      id: 1,
      title: '1 Stripper',
      subtitle: 'Standard Combo',
      performers: '3 Total',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic19Dec161-450x300.jpg`,

      icon: '👨‍🍳',
      combo: 'STANDARD COMBO',
      description: 'Great for groups medium-sized groups up to 10-30 people',
      showDuration: '15-20 min show',
      waiterService:
        '2 hr premium waiter service for food/drinks, photos, game hosting and setting up',
      price: 700,
      deposit: 310,
    },
  },
  {
    id: 7,
    name: 'Marco B',
    bgColor: 'bg-purple-500',
    role: '',
    image: '/images/marco.jpg',
    height: '5`11',
    bio: [
      `Meet Marco, the most gorgeous, seductive man in Melbourne. Be mesmerised by his blue eyes and stunning body. If you’re looking for someone who can make your party creative and the talk of the town, hire him to do his rendition of a prince, cowboy, and more.`,
      `He is a natural performer and a charismatic guy, perfect for events and parties. If you like a rugged look, he’ll don his cowboy boots to take you for a wild ride, book Marco and your party will be more than you ever imagined.`,
    ],
    eyes_color: `brown`,
    hair_color: ' Brown',
    star_sign: 'Capricorn',
    shows: [
      'Harry Potter',
      'cowboy',
      'Fireman',
      'Doctor',
      'Grease',
      'F1 Race Car Driver',
      'Tradie',
      'Doctor',
    ],
    mediaPreview: [
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/harleyg/thumbs/thumbs_marco-christmas-santa.jpeg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/harleyg/thumbs/thumbs_marco-male-stripper-melbourne.jpeg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/harleyg/thumbs/thumbs_marco-cowboy-red-shirt.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/harleyg/thumbs/thumbs_marco-magic-men-melbourne.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/harleyg/thumbs/thumbs_marco-male-stripper-melbourne.jpeg',
        premium: false,
      },
    ],
    services: {
      id: 1,
      title: '1 Stripper',
      subtitle: 'Premium',
      performers: '3 Total',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic19Dec161-450x300.jpg`,

      icon: '👨‍🍳',
      combo: 'STANDARD COMBO',
      description: 'Great for groups medium-sized groups up to 10-30 people',
      showDuration: '15-20 min show',
      waiterService:
        '2 hr premium waiter service for food/drinks, photos, game hosting and setting up',
      price: 1000,
      deposit: 500,
    },
  },
  {
    id: 8,
    name: 'Patrick C',
    bgColor: 'bg-purple-500',
    role: '',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/melbourne-waiter-patrick/cache/Patrick-Condidorio-4.jpg-nggid0566102-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.jpg',
    height: '5`11',
    eyes_color: `brown`,
    hair_color: ' Brown',
    star_sign: 'ARIES',
    bio: [
      `Looking for the perfect surprise for your bride-to-be or birthday girl? You can’t go wrong with Patrick. Make sure you have a fan ready- his body and face will make you feverishly hot.`,
      `He’s guaranteed to make any Hens Night or celebration one to remember with that ripped bod and killer dance moves.`,
      `The ladies adore his smile and his cheeky charm puts them at ease. This man’s cheeky sense of humour is sure to delight everyone at your party- he’ll make his way into their hearts and won’t want to leave.`,
      `Don’t miss out on Patrick. As one of our most experienced Magic Men, he knows his stuff and we know he’s always in demand. Book him now!`,
    ],
    shows: [
      'Harry Potter',
      'cowboy',
      'Fireman',
      'Doctor',
      'Grease',
      'F1 Race Car Driver',
      'Tradie',
      'Doctor',
    ],
    mediaPreview: [
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/melbourne-waiter-patrick/thumbs/thumbs_Patrick-waiter-melbourne.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/melbourne-waiter-patrick/thumbs/thumbs_Patrick-waiter-topless-melbourne.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/melbourne-waiter-patrick/thumbs/thumbs_Patrick-Condidorio-3.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/melbourne-waiter-patrick/thumbs/thumbs_Patrick-Condidorio-2.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/melbourne-waiter-patrick/thumbs/thumbs_Patrick-Condidorio-1.jpg',
        premium: false,
      },
    ],
    services: {
      id: 1,
      title: '1 Stripper',
      subtitle: 'Premium',
      performers: '3 Total',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic19Dec161-450x300.jpg`,

      icon: '👨‍🍳',
      combo: 'STANDARD COMBO',
      description: 'Great for groups medium-sized groups up to 10-30 people',
      showDuration: '15-20 min show',
      waiterService:
        '2 hr premium waiter service for food/drinks, photos, game hosting and setting up',
      price: 1000,
      deposit: 500,
    },
  },
  {
    id: 9,
    name: 'Francesco',
    bgColor: 'bg-purple-500',
    role: `
Fun, tanned and muscly`,
    image: '/images/Francesco.jpg',
    height: '6`0',
    mediaPreview: [
      {
        type: 'image',
        src: 'https://www.magicmen.com.au/gallery/melbourne-stripper-francesco/thumbs/thumbs_thumbnail_Francesco-Antonio-1.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://www.magicmen.com.au/gallery/melbourne-stripper-francesco/thumbs/thumbs_thumbnail_Francesco-Antonio-4.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://www.magicmen.com.au/gallery/melbourne-stripper-francesco/thumbs/thumbs_thumbnail_Francesco-Antonio-2.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://www.magicmen.com.au/gallery/melbourne-stripper-francesco/thumbs/thumbs_thumbnail_Francesco-Antonio-5.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://www.magicmen.com.au/gallery/melbourne-stripper-francesco/thumbs/thumbs_thumbnail_Francesco-Antonio-6.jpg',
        premium: false,
      },
    ],
    eyes_color: ` Green`,
    hair_color: ' Brown',
    star_sign: 'Cancer',
    shows: [
      'Soldier',
      'Policeman',
      'Fireman',
      'Doctor',
      'Grease',
      '50 Shades',
      'Top Gun',
      'Cowboy',
    ],
    bio: [
      `Strong and mysterious Francesco of Magic Men is sure to get every single heart pounding as he enters the room. With ripped muscles and stunning features, ladies are sure to get lost in his eyes as he spends tender loving time entertaining them at every show.`,
      `His mysterious personality is well-loved by ladies, especially as you’re never quite sure what his next surprise will be. He is quietly confident with his gorgeous looks and dancing skills – an irresistible combination.`,
      `If you’re planning a chill party with a sexy dance for a twist – Francesco got you covered. Leave the entertainment to him and be sure to have a seductive and flirty night. Book him now!`,
      // `To secure this beautiful face of Magic Men, book your event with Will months in advance. He books out fast so send a business enquiry – feel free to fill out a contact form below or call us right away. Catch him also at our MALE STRIP SHOW.`,
    ],
    services: {
      id: 1,
      title: '1 Stripper',
      subtitle: 'Premium',
      performers: '3 Total',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic19Dec161-450x300.jpg`,

      icon: '👨‍🍳',
      combo: 'STANDARD COMBO',
      description: 'Great for groups medium-sized groups up to 10-30 people',
      showDuration: '15-20 min show',
      waiterService:
        '2 hr premium waiter service for food/drinks, photos, game hosting and setting up',
      price: 1000,
      deposit: 500,
    },
  },
  {
    id: 10,
    name: 'Raf',
    bgColor: 'bg-purple-500',
    role: '',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/sebastian/cache/Raf1-1.jpg-nggid0566642-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.jpg',
    height: '5`9',
    mediaPreview: [
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/sebastian/thumbs/thumbs_Charaf-2.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/sebastian/thumbs/thumbs_Raf1-1.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/sebastian/thumbs/thumbs_Raf2-1.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/sebastian/thumbs/thumbs_Raf3-1.jpg',
        premium: false,
      },
      {
        type: 'image',
        src: 'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-0baa8f7/www.magicmen.com.au/gallery/sebastian/thumbs/thumbs_Raf5-1.jpg',
        premium: false,
      },
    ],
    eyes_color: `black`,
    hair_color: ' Black',
    star_sign: 'aries',
    shows: ['Policeman'],
    bio: [
      `Get ready to be hanging on to the edge of your seat: Magic Men is bringing you Australia’s finest in Raf to send the ladies’ pulses racing into overdrive.`,
      `With his fiery passion and strong arms, this charming stud knows just how to entertain and give a performance like no other. `,
      `If you’re looking for someone who can confidently take charge, can sweep you off your feet, and can bring a night you’ll forever remember – your search ends here.`,
      `Book Raf now and avoid missing out on this sexy, charismatic hunk!.`,
    ],
    services: {
      id: 1,
      title: '1 Stripper',
      subtitle: 'Premium',
      performers: '3 Total',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic19Dec161-450x300.jpg`,

      icon: '👨‍🍳',
      combo: 'STANDARD COMBO',
      description: 'Great for groups medium-sized groups up to 10-30 people',
      showDuration: '15-20 min show',
      waiterService:
        '2 hr premium waiter service for food/drinks, photos, game hosting and setting up',
      price: 1000,
      deposit: 500,
    },
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
