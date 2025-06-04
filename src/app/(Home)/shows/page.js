import MagicMenLayout from '@/components/home/naviagation';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
import CustomH1 from '@/components/home/heading';
import VideoCard from '@/components/home/videoCard';
import BookingTable from '@/components/global/BookingTable';
import Enquire from '@/components/global/Enquire';
import Footer from '@/components/home/Footer';

export default function ShowPage({}) {
  return (
    <div className="text-white">
      <MagicMenLayout height="h-[50vh]">
        <GeneralHeroSection />
      </MagicMenLayout>
      <main className="bg-black pt-24">
        {/* Heading */}
        <div className="justify-center text-base text-slate-100 items-center flex flex-col">
          <CustomH1 text={'Home Visits'} />
          <p className="text-yellow-600 font-bold my-4">
            Let the hottest entertainment come to you
          </p>
          <p className="w-full md:w-4/5 leading-relaxed text-center">
            There’s a knock at the door. Is it the police? A tradie? A fireman?
            As the unexpected visitor enters, a sense of excitement fills the
            air. From somewhere unknown, an electrifying dance tune sets the
            mood for something fun, sexy and truly entertaining. Your Magic Man
            has arrived, and a breathtaking male strip show begins. Choose from
            our selection of shows that will rock your hens nights, girls’
            night, a birthday surprise and ladies’ night in Melbourne. Our hunks
            will ensure your guest of honour is the centre of attention- as the
            rest of the party crowd around her to cheer, blush and giggle with
            her through an exciting dance routine customised to her taste.
          </p>
          <div className="md:w-1/3 w-full my-6">
            <VideoCard videoUrl={'https://youtu.be/CkMz-NdFzSw'} />
          </div>
        </div>

        {/* Booking table */}
        <div className="flex flex-col justify-center items-center gap-6 px-2 my-11 md:px-24">
          <span className="flex md:flex-row flex-col items-center gap-4 w-full justify-center ">
            <CustomH1 text={'Private Show & Combo Special '} />
            <span className="text-yellow-600 font-bold text-lg ">Rates</span>
          </span>
          <BookingTable />
          <Enquire />

          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm leading-relaxed">
              *There are additional travel costs for areas outside the CBD. All
              shows and requests for guys are subject to availability. Travel
              fee is worked out at $1 per km from the CBD, however, if the
              distance is within 10km from the CBD then we there is no extra
              travel fee. To find out the travel fee per guy, simply give us a
              call or fill in a contact form to confirm the amount.
            </p>
            <button
              className={`flex items-center 
                     
                     text-white border border-purple-500 p-3 rounded-full hover:bg-white hover:shadow-white hover:shadow-sm hover:text-black transition-colors`}>
              <span className="">TERMS & CONDITION</span>
            </button>
          </div>
        </div>
        {/* Last child */}
        <div className="flex flex-col justify-center p-3 gap-4 mt-6 items-center text-center">
          <h1 className="font-roboto text-xl md:text-4xl uppercase">
            Enter the world of Magic{' '}
            <b className="text-yellow-500"> are you ready?</b>
          </h1>
          <button
            className={`flex items-center justify-center w-40 text-center
                     
                     text-white border border-purple-500 p-3 rounded-full hover:bg-white hover:shadow-white hover:shadow-sm hover:text-black transition-colors`}>
            <span className="">SEE OUR MEN</span>
          </button>
          <div className=" w-full md:w-1/2 ">
            <VideoCard videoUrl={'https://youtu.be/XJIjBfdt2es'} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
