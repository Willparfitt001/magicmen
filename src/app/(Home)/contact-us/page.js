import Enquire from '@/components/global/Enquire';
import Footer from '@/components/home/Footer';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
import CustomH1 from '@/components/home/heading';
import MagicMenLayout from '@/components/home/naviagation';

export default function ContactUsPage() {
  return (
    <div className="text-white font-roboto-mono space-y-6 text-center">
      <MagicMenLayout height="30vh">
        <GeneralHeroSection />
      </MagicMenLayout>
      <main className="p-2 my-11">
        <CustomH1 text={`Book Online for a quick Response!`} />
        <p className="font-bold text-xl mt-4">
          Call today for the best male strippers & waiters in Australia!
        </p>
        <span className="text-xl w-full md:w-4/5 flex-wrap gap-4 mx-auto my-11 flex items-center p-2 justify-between font-bold">
          <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}>
            {process.env.NEXT_PUBLIC_PHONE}
          </a>
          <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}>
            {process.env.NEXT_PUBLIC_PHONE}
          </a>{' '}
          <a href={`mailto:info@magicmen.com.au`}>info@magicmen-au.com</a>
        </span>

        <div>
          <h1 className="uppercase font-bold text-xl md:text-2xl">
            Contact us <b className="text-yellow-500">today</b>
          </h1>
          <Enquire button_label="contact us" />
        </div>
        <p>Location: 228A MALVERN RD PRAHRAN</p>
        <p>Office: 272 CITY RD SOUTHBANK VIC 3006</p>

        <div className="p-2 my-11">
          <h1 className="uppercase font-bold text-xl md:text-2xl">
            Enter the world of magic,{' '}
            <b className="text-yellow-500">ARE YOUR READY?</b>
          </h1>
          <span className="flex justify-center items-center gap-4">
            <iframe
              width="919"
              height="450"
              src="https://www.youtube.com/embed/XJIjBfdt2es"
              title="Magic Men X 2019 Trailer"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
          </span>
        </div>
      </main>
      <Footer />
    </div>
  );
}
