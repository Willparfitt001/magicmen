import MagicMenLayout from '@/components/home/naviagation';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
import CustomH1 from '@/components/home/heading';
import VideoCard from '@/components/home/videoCard';
import BookingTable from '@/components/global/BookingTable';
import Enquire from '@/components/global/Enquire';
import Footer from '@/components/home/Footer';
import { PerformerCard } from '@/components/home/stripperCard';
import Faq from '@/components/home/faq';

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

const faqs_data = [
  {
    question: 'WHY CHOOSE MAGIC MEN ABOVE THE OTHER AGENCIES?',
    answer: `A: Magic Men is simply the best – that is why you can never go wrong if you choose us. Our performers are professional workers, trained and experienced to give you the best show in all of Australia.
    There are many qualities of a good male stripper in you may not be aware of, and today we are going to explore some of them in a little depth to better help you with your next male stripper booking in Melbourne, or anywhere else.
    `,
  },
  {
    question:
      'DOES THE STRIPPER IN THE PHOTO WHO I BOOKED ONLINE LOOK THE SAME IN PERSON?',
    answer: `
A: Yes. Our gorgeous male strippers look as stunning as they are in photos and up close. Because we do our best to ensure that their photos are regularly updated, what you see in their profile photos online is what they look like in person.`,
  },
  {
    question: 'HOW DO I BOOK A MALE STRIPPER FOR A PARTY OR EVENT?',
    answer: `
A: Just fill out an online form with the following details:



- Your choice of top favorite male strippers (top 3 faves)
- Details of the party – the date, time, and location of the celebration
- A phone number to reach you.
\n
- After providing us with this info, rest assured that a representative from Magic Men will contact you to finalize your reservations.
 `,
  },
  {
    question: 'HOW WILL I PAY FOR MY BOOKING?',
    answer: `
A: You may either pay through direct deposit via online bank transfer or through credit card. A small amount of deposit is required to ensure the booking of your chosen performer. We will send your receipt through email once your funds have been cleared. On the night of the event, pay the balance in cash to the performer. We advise you to read our Terms and Conditions, too.`,
  },
  {
    question: 'HOW DO I PREPARE FOR MY MALE STRIPPER’S PERFORMANCE?',
    answer: `
A: Getting ready for our stripper for the show is not much hard work. Our guys will bring the important things he may need, but there are a few things that he requests for you to prepare, as follows:

- A space for him to prepare and freshen up before the show;
- The dancing space for him to perform;
- An armless chair as dancing props; and
- The balance for full payment of services.`,
  },
  {
    question: 'HOW WILL I COORDINATE WITH THE STRIPPER ABOUT HIS SHOW?',
    answer: `

A: Our Melbourne male strippers will inform you what time he will arrive, giving you enough time to get ready for his show. If your party venue is in a hotel or a private location, to make sure that the show will go on time as planned, it may be necessary to meet him or have someone pick him up, or give him access to your party place.`,
  },
  {
    question: 'HOW LONG DO YOUR SHOWS USUALLY LAST?',
    answer: `


A: Magic Men performances usually last from 15 to 20 minutes, depending on the type of show and the performer. Each performer has his style, and the shows are spectacular, nonetheless. Full or partial strip shows last for 15 to 20 minutes, while a double trouble show runs for 30 to 40 minutes with two guys performing one after the other.`,
  },
  {
    question: 'IS PICTURE-TAKING ALLOWED DURING THE SHOW?',
    answer: `



A: You can ask permission from our male entertainers to have his photos taken during the show, although in general, taking photos is allowed. Video recording, on the other hand, is not permitted.`,
  },
  {
    question: 'CAN THE MALE STRIPPERS WEAR A DIFFERENT OUTFIT?',
    answer: `




A: Yes. You may request him to wear what you like or provide him with the costume of your choice. Each guy’s costumes are listed on his individual profiles.`,
  },
  {
    question:
      'DO YOU HAVE FUNCTION ROOMS THAT WE CAN HIRE FOR A MALE STRIP SHOW?',
    answer: `

A: We offer party packages that include the use of function rooms in certain locations. All you have to do is to be present and enjoy the event. Check out our hen’s night packages HERE.`,
  },
  {
    question: 'WHAT TYPE OF PARTY CAN YOUR HUNKS PERFORM TO?',
    answer: `
A: Our male strippers are always ready for any type of event or party that you would like them to perform at. Whether it be an all-girls, all-boys, or mixed audience – we’ll make sure to have a great show for you. Book our male strippers in Melbourne for a hens party, birthday party, or even just a girls night out! Whatever the occasion, it’s sure to be an amazing night.`,
  },
  {
    question:
      'WILL THE GUYS BE ABLE TO PERFORM IN DIFFERENT AREAS OF AUSTRALIA?',
    answer: `

A: Yes, they can! With the availability of male strippers in every Australian city, we can go where you are. For rural locations, however, we charge a travel fee of $1 per km. Be glad it’s for a one-way trip only!`,
  },
  {
    question: 'CAN YOU SUGGEST PARTY PLANS FOR ME?',
    answer: `

A: Of course, Magic Men can assist you in whatever plans you may have for your party. With our party packages carefully planned to suit your needs and preferences, you need not worry about anything, just come, have fun, and enjoy the moment.`,
  },
  {
    question: 'HOW TO BOOK?',
    answer: `


Hiring one of our male strippers in Melbourne is super easy. We have 3 simply steps:

Simply click on the entertainer you would like to reserve and on each profile, there is a ‘RESERVE ME NOW’ button which allows you to pay a deposit.

The deposit amount is $100 per guy and the rest is payable on the night when you see him.

When filling out the booking form, there is an option to leave notes for us in the ‘COMMENTS’ section. Our friendly staff does read your notes for us, so any requests you can leave for us in that section.`,
  },
  {
    question: 'CAN YOU TRAVEL TO MY LOCATION?',
    answer: `
Our guys travel all around VICTORIA (and in fact, we are a national agency). This means we can come out to you wherever you are. The travel fee we charge per guy is calculated by $1 per km from the nearest city to your location. The GOOD NEWS? You only have to pay ONE WAY.`,
  },
  {
    question: 'WHY BOOK WITH MAGIC MEN?',
    answer: `

Your party nights just got better with the presence of these fine-looking, incredibly talented, and professional male dancers. Yes, we have been awarded Australia’s BEST male strippers Melbourne 10 years running.

Magic Men has the best option for your events and get-togethers – a breathtaking show with the best “male strippers Melbourne” has to offer that promises an unforgettable event for you and your mates. You can never go wrong when you hire a male stripper in Melbourne. See them for yourself – these gorgeous guys, come with the confidence and charm that are sure to capture every girl’s heart. Simply put, their amazing performances will leave your guests wanting more!

Being in the industry for more than 10 years, you can rest assured you’ll have the best adult entertainment you can ever have. Whatever private celebrations you are organizing – be it a HENS PARTY, special birthday celebration, or simply a girl’s night – hiring a Magic Men male stripper is the ultimate entertainment you will ever have! We promise you first-rate dance shows – no more, no less!`,
  },
  {
    question: 'WHY BOOK WITH MAGIC MEN?',
    answer: `

Your party nights just got better with the presence of these fine-looking, incredibly talented, and professional male dancers. Yes, we have been awarded Australia’s BEST male strippers Melbourne 10 years running.

Magic Men has the best option for your events and get-togethers – a breathtaking show with the best “male strippers Melbourne” has to offer that promises an unforgettable event for you and your mates. You can never go wrong when you hire a male stripper in Melbourne. See them for yourself – these gorgeous guys, come with the confidence and charm that are sure to capture every girl’s heart. Simply put, their amazing performances will leave your guests wanting more!

Being in the industry for more than 10 years, you can rest assured you’ll have the best adult entertainment you can ever have. Whatever private celebrations you are organizing – be it a HENS PARTY, special birthday celebration, or simply a girl’s night – hiring a Magic Men male stripper is the ultimate entertainment you will ever have! We promise you first-rate dance shows – no more, no less!`,
  },
  {
    question: 'WHAT WE OFFER FOR PRIVATE SHOWS',
    answer: `
How much excitement can you take for our private shows – you wonder? We have what you want! Choose from the selection of our strip shows according to your preferences – partial strip, full strip, or double trouble shows.

A partial strip show is performed by our graceful dancers who will undress for you and will end with only a piece of covering left. What is covered is up for you to imagine!

For the not-so-faint-at-heart, the full male strip show will give you the thrill of a lifetime as you witness our sexy stripper bare it all, and he means all! Be alert and keep your eye on him, or you will miss the best part!

Double the fun and double the thrill with the double trouble show. Two gorgeous men will perform for you, together or one after the other. For you ladies who want more than one stripper, this show is for you!

The presence of TOPLESS WAITERS can add more zest to your already-exciting party. Half-dressed men coming to serve you as topless waiters is a sight to behold. Let them serve you cocktails and food, host games, and much more – looks and skills combined, they will make your party or ladies’ night a success.

From $250 to $450, having a stripper for your party is worth every dollar you spend. After all, happiness is priceless! Having a male stripper in Melbourne as an addition to your party or event is one exciting experience. Every lady awaits in anticipation for one explosive show that this handsome hunk will provide. Book a topless waiter for your next party today!`,
  },
  {
    question: 'DO YOU HAVE A MALE STRIP CLUB I CAN GO TO?',
    answer: `
As well as our hot male strippers making their way to you, we also have a male strip club you can visit for an incredible night out. Choose one of our two locations and get the ladies together for a fun-filled night. Our full show is something you won’t want to miss, a true Melbourne male stripper spectacular with hunky male strippers ready to show off their best. There’s even a dance floor for you to get your dance moves on after the show.

Book now for Friday night or Saturday night and strap yourself in for an unforgettable strip club experience delivered by some of the most talented strippers in Melbourne.`,
  },
  {
    question: 'HOW TO PREPARE FOR OUR MALE STRIP SHOW',
    answer: `
<b>Where to Party? </b>
<br>
Have your party in a place where you can have fun and laugh your hearts out. Consider a private place without disturbance – at home, a friend’s place, a function room – someplace where you can be comfortable and have the privacy you deserve. Inform your stripper beforehand where you would like him to perform so he’ll know where to go.

<b>Your Stripper is Ready</b>
<br/>
Our friendly stripper is sure to knock at your door just before the party. Before that, he will make sure everything is in sync by discussing with you the details of the party – such as the theme and the costumes, to name a few.

Expect your stripper to give his best performance – he is always prepared and ready to show off his dancing prowess. Being the friendly host that you are, giving in to his requests is easy. He just needs a few things to guarantee a flawless performance – a place to prepare, a space to groove, and an armless chair to sit on.

He needs a private place to prepare himself for the performance – to freshen up and change his outfits. It is also important to provide a place wide enough for him to show off his routine, and the armless chair as props for his performance.

Let our handsome and skillful stripper do the entertainment. All you need is to relax, have a fun night, and enjoy the show!

<b>Dressing Up Your Stripper</b>

You may want your stripper to adapt to your party theme. Dress him up in costumes – a FIREFIGHTER, police officer, doctor – whatever he wears adds up to his undeniable charm and confidence, an appeal ladies can’t get enough of. Witness him take off piece by piece of these clothes, and be amazed at just how great he looks with or without a costume.`,
  },
];

export default function ToplessWaitersPage() {
  return (
    <div>
      <MagicMenLayout height="h-[50vh]">
        <GeneralHeroSection />
      </MagicMenLayout>
      <main className="bg-black pt-24">
        <div className="justify-center text-base text-slate-100 items-center p-3 flex flex-col">
          <CustomH1 text={'Hire Male Topless Waiters'} />
          <div className=" w-full my-6">
            {/* <VideoCard videoUrl={'https://youtu.be/uYpw0YXw9fA'} /> */}
          </div>
          <VimeoPlayer />

          <section className="flex flex-col text-center px-2 md:px-11 py-6">
            <h1 className="uppercase text-xl  text-center mb-4 font-roboto font-bold">
              The muscles you see are the muscles you get.
            </h1>
            <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
              {performerData.map((performer) => {
                return (
                  <PerformerCard
                    key={performer.id}
                    performer={performer}
                  />
                );
              })}
            </div>
          </section>
          <h2 className="text-xl md:text-3xl text-center md:w-4/5 w-full">
            <b className="text-yellow-500">Eye-candy heaven!</b>
          </h2>

          <div className="flex flex-col items-center p-2 justify-center gap-4">
            <div className="relative my-6">
              <div className="bg-black/20 absolute opacity-90 inset-0"></div>
              <img
                alt="ggg"
                src="https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-32ca237/www.magicmen.com.au/wp-content/uploads/logo-strippers-page.jpg"
              />
            </div>
            <p className="w-full md:w-4/5 leading-7 text-center">
              Have your drinks and food served with a side of eye-candy by
              Melbourne’s hottest topless waiters at your next party! Why hire
              waiters fully clothed when you can have magic men flex their
              muscles while pouring your favorite glass of bubbles or mixing a
              deliciously tempting cocktail? You’ll be able to take photos with
              our Magic Men and talk the night away as they keep all your guests
              entertained with their looks and charm. Want to see what else out
              hunky topless waiters can do? Click Here
            </p>
          </div>
        </div>
        {/* Grid component */}

        {/* Text content */}
        <section className="text-white p-2 flex justify-center items-center flex-col text-center">
          <div className="w-full md:w-4/5 space-y-6 py-11">
            <h1 className="uppercase text-xl  text-center mb-4 font-roboto font-bold">
              Eye-Candy Heaven!
            </h1>
            <p className="leading-7">
              Each of the Magic Men has a unique style and look, so check out
              their profiles to see even more photos. We guarantee that when you
              hire topless waiters from us, there are no surprises – the guy you
              see is the guy you’ll get! Check out the Extras and FAQs for full
              details of Magic Men’s male topless waiter hire services and
              packages. The guys are available for bookings as short as two
              hours, up to all night long! If you don’t have a venue for your
              event, don’t worry- we offer a range of options for stunning
              private function rooms in some of Melbourne’s favourite bars and
              clubs. Topless waiter hire (for Melbourne events) can be booked
              online – just submit an enquiry via the form, and we will get back
              to you as soon as possible.
            </p>
          </div>
        </section>

        <ShowFaq />
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
        <CustomH1 text={'FAQ Melbourne Male Strippers'} />
      </span>
      <Faq faqs={faqs_data} />
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
