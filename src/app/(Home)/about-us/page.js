import Enquire from '@/components/global/Enquire';
import Footer from '@/components/home/Footer';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
import CustomH1 from '@/components/home/heading';
import MagicMenLayout from '@/components/home/naviagation';

export default function AboutUsPage() {
  return (
    <div className="text-white font-roboto-mono space-y-6 text-center">
      <MagicMenLayout height="30vh">
        <GeneralHeroSection />
      </MagicMenLayout>
      <main className="p-2 my-11">
        <CustomH1 text={`About Us`} />
        <div className="p-4 w-full text-center md:w-4/5 mx-auto space-y-6 ">
          <p>
            In 2018 Magic Men started specializing in hens parties. They do more
            than 300 hens parties across Australia every weekend and have put
            together packages, collaborations with all hens party suppliers in
            the event space. From limo hire, to nude art classes, Magic Men now
            service and cater to hens parties of all different sizes.
          </p>
          <p>
            Which started because of COVID, we were stuck at home and we
            released that so many people weren’t able to travel and come out to
            see our weekly show in Melbourne Brisbane Sydney. So we started
            reaching out to venues and vowing to travel out and bring our show
            across the country and globe once things opened up. 2022 We have
            done just that, the show is touring across the country every week.
          </p>
          <p>
            Magic Men is the premiere male strippers experience. Our gorgeous
            men are ready to give you a night you’ll never forget, each with
            their own unique style and charm. And don’t forget; the muscles you
            see are the muscles you get!
          </p>
          <p>
            Since we first opened our doors, we made it our mission to bring
            together Australia’s best and hottest male strippers in one
            incredible show. Now that dream is reality, with more than 60 hunks
            ready to delight in both our main show and for private events.
            Whatever your type, however you like it, there’s something for
            everyone to enjoy.
          </p>
          <p>
            Our heart-stopping live show delivers 120 minutes of eye candy,
            showcasing the best our boys have to offer. And that’s not including
            the after-party! With weekly shows at our club in Melbourne, as well
            as tour locations throughout the country, you can book tickets to
            see the show wherever you are.
          </p>
          <p>
            And if that’s not enough for you, our topless waiters and male
            strippers are happy to make an appearance at your next birthday
            party, hens night, or really any occasion! Choose your man and
            they’ll arrive dressed to kill and ready to charm. They’ll be sure
            treat you and your friends to the show of a lifetime.
          </p>
        </div>

        <div className="my-11">
          <h1 className="uppercase  font-bold text-xl md:text-2xl">
            Contact us <b className="text-yellow-500">today</b>
          </h1>
          <p>
            Send us date and what you’d like to plan and we’ll get back to you
            with a INSTANT QUOTE.
          </p>
          <div className="-mt-4">
            {' '}
            <Enquire button_label="contact us" />
          </div>
        </div>
        <p>Location: {process.env.NEXT_PUBLIC_LOCTION}</p>

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
