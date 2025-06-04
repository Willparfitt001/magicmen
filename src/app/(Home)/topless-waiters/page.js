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
