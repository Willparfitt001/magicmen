import MagicMenLayout from '@/components/home/naviagation';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
import CustomH1 from '@/components/home/heading';
import VideoCard from '@/components/home/videoCard';
import BookingTable from '@/components/global/BookingTable';
import Enquire from '@/components/global/Enquire';
import Footer from '@/components/home/Footer';
import { PerformerCard } from '@/components/home/stripperCard';

// Sample performer data
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
    name: 'David Knight',
    bgColor: 'bg-yellow-500',
    role: '',
    image: '/images/Mathew1.jpg',
    height: '5`11',
  },
  {
    id: 3,
    name: 'Will Parfitt',
    bgColor: 'bg-white',
    role: 'Hottest Male Performer',
    image: '/images/Mathew1.jpg',
    height: '5`11',
  },
  {
    id: 4,
    name: 'Jaxon',
    bgColor: 'bg-blue-900',
    role: '',
    image: '/images/Mathew1.jpg',
    height: '5`11',
  },
  {
    id: 5,
    name: 'Jake',
    bgColor: 'bg-purple-500',
    role: '',
    image: '/images/Mathew1.jpg',
    height: '5`11',
  },
];

export default function MaleStrippersPage() {
  return (
    <div>
      <MagicMenLayout height="h-[50vh]">
        <GeneralHeroSection />
      </MagicMenLayout>
      <main className="bg-black pt-24">
        <div className="justify-center text-base text-slate-100 items-center p-3 flex flex-col">
          <CustomH1 text={'Male Strippers'} />
          <div className="md:w-1/2 w-full my-6">
            <VideoCard videoUrl={'https://youtu.be/uYpw0YXw9fA'} />
          </div>
          <h2 className="text-xl md:text-3xl text-center md:w-4/5 w-full">
            HIRE US for your next party and see for yourself why we’re voted
            <b className="text-yellow-500">
              “Australia’s No.1 Strip Entertainment!”
            </b>
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
              Imagine glistening muscles and heart-stopping smiles. Our Male
              Strippers Melbourne will captivate your attention and have every
              heart racing. But it’s not just about hot looks. You want male
              strippers who have plenty of spunk and personality, along with
              slick dance moves to match! That’s the added magic of Magic Men.
              Our guys travel anywhere in Melbourne, so if you have a party that
              is a bit further out, make sure you enquire as early as possible
              to avoid last min disappointments.
            </p>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
