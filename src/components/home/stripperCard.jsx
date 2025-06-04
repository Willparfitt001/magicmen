'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import CreatorProfile from './profile';

const PerformerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Sample performer data
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

  const handleSubscribe = (subscriptionData) => {
    console.log('Subscribe clicked:', subscriptionData);
    // Handle Stripe subscription logic here
  };

  const handleMessage = (profileId) => {
    console.log('Message creator:', profileId);
  };

  const handleLike = (profileId, media = null) => {
    console.log('Like clicked:', profileId, media);
  };

  const handleShare = (profileId, media) => {
    console.log('Share clicked:', profileId, media);
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-transparent text-white py-12 px-4">
      {/* Title with modern styling */}
      <div className="text-center mb-12">
        <h1 className="text-xl md:text-2xl font-roboto-mono mb-4 b bg-clip-text text-transparent">
          MEET THE MAGIC
        </h1>
        {/* <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div> */}
      </div>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="performer-swiper">
          {performerData.map((performer) => (
            <SwiperSlide key={performer.id}>
              <PerformerCard performer={performer} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>

      {/* Additional Info Section */}
      <div className="text-center mt-12">
        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Our talented performers bring energy, charisma, and unforgettable
          experiences to every show. Each artist is carefully selected for their
          professionalism and stage presence.
        </p>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .performer-swiper {
          padding: 20px 0 40px 0;
        }

        .performer-swiper .swiper-slide {
          transition: all 0.3s ease;
        }

        .performer-swiper .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.7;
          transform: scale(0.9);
        }

        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(147, 51, 234, 0.3);
          border: 2px solid rgba(147, 51, 234, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border-color: #8b5cf6;
          transform: scale(1.2);
        }

        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.3),
            rgba(236, 72, 153, 0.3)
          );
        }
      `}</style>
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

          <a
            href={`/strippers/${name}`}
            className="mx-auto mt-2 block px-6 py-2 mb-4 border-2 hover:border-none border-purple-500 text-white font-semibold rounded-full hover:bg-white shadow-sm hover:text-slate-900 transition duration-300">
            VIEW MORE
          </a>

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
