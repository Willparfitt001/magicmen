'use client';
import CreatorProfile from '@/components/home/profile';
import { useParams } from 'next/navigation';
import Enquire from '@/components/global/Enquire';
import MagicMenLayout from '@/components/home/naviagation';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
import Footer from '@/components/home/Footer';

// Sample performer data
const performerData = [
  {
    id: 1,
    name: 'Eli',
    bgColor: 'bg-red-500',
    role: '',
    image: '/images/Mathew1.jpg',
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
const stripper_data = [];
export default function StripperPage() {
  const performerName = 'Eli';

  const matchedPerformer = performerData.find(
    (performer) => performer.name.toLowerCase() === performerName.toLowerCase()
  );
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
  console.log(matchedPerformer);

  const params = useParams();
  return (
    <div>
      <MagicMenLayout height="30vh">
        <GeneralHeroSection />
      </MagicMenLayout>
      <CreatorProfile
        onLike={handleLike}
        onShare={handleShare}
        onMessage={handleMessage}
        onSubscribe={handleSubscribe}
        profileData={matchedPerformer}
      />
      <div>
        <Enquire button_label="check availability" />
      </div>
      <Footer />
    </div>
  );
}
