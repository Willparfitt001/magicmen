import Enquire from '@/components/global/Enquire';
import Footer from '@/components/home/Footer';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
import CustomH1 from '@/components/home/heading';
import MagicMenLayout from '@/components/home/naviagation';
import ContactFormExample from '@/components/global/multistepform';

export default function EmploymentPage() {
  return (
    <div className="text-white font-roboto-mono space-y-6 text-center">
      <MagicMenLayout height="30vh">
        <GeneralHeroSection />
      </MagicMenLayout>
      <main className="p-2 my-11">
        <CustomH1 text={`How to Become a Male Stripper`} />
        <div className="p-4 w-full text-center md:w-4/5 mx-auto space-y-6 ">
          <section>
            <h1 className="uppercase  font-bold text-xl md:text-2xl">
              Magic <b className="text-yellow-500">Men Dancer</b>
            </h1>
            <p>
              The front line position on our various stage shows around
              Victoria. We want guys who can deliver a hard-hitting routine,
              sexy dance moves and interact with the audience. If you have no
              experience in performing than the alternative route is to start
              off applying as a topless waiter and getting an understanding of
              how the industry works. Athletic, toned, charismatic, charming and
              the ability to be able to move is essential. To learn how to
              become a male stripper
            </p>
          </section>

          <section>
            <h1 className="uppercase  font-bold text-xl md:text-2xl">
              Magic Men <b className="text-yellow-500">Topless Waiter</b>
            </h1>
            <p>
              The Magic Men Topless waiters are not just part of the service but
              are part of the show. They are often the most essential part of
              any hens night and birthday party. Great bodies, lively
              personalities and flirty charisma to join our team.
            </p>
          </section>
        </div>

        <div className="my-11">
          <h1 className="uppercase  font-bold text-xl md:text-2xl">
            Contact us <b className="text-yellow-500">today</b>
          </h1>
          <p>
            Send us date and what you’d like to plan and we’ll get back to you
            with a INSTANT QUOTE.
          </p>
          <div className="-mt-4 mx-auto flex justify-center items-center w-full">
            {' '}
            <ContactFormExample />
          </div>
        </div>
        <p>Location: 228A MALVERN RD PRAHRAN</p>
        <p>Office: 272 CITY RD SOUTHBANK VIC 3006</p>
      </main>
      <Footer />
    </div>
  );
}
