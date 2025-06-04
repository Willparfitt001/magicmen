import MagicMenLayout from '@/components/home/naviagation';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
import CustomH1 from '@/components/home/heading';
import VideoCard from '@/components/home/videoCard';

import BookingTable from '@/components/global/BookingTable';
import Enquire from '@/components/global/Enquire';
import Footer from '@/components/home/Footer';
import { PerformerCard } from '@/components/home/stripperCard';
import Faq from '@/components/home/faq';
import { FaLocationDot } from 'react-icons/fa6';

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
const section_four = {
  title: `Dinner and Show`,
  sub_title: `Package`,
  list_items_one: [
    'Arrive at the Dinner venue for a delicious meal at your very own reserved area.',
    'Shared entre platter',
    'One main meal per guest ',
    'SEE THE VIC MENU',
    'SEE THE NSW MENU',
    'Silver Seating to watch the award-winning Magic Men show ',
    'Glass of champagne on arrival',
    'Hen gets brought up on stage (optional)',
    'Free entry to the after party',
    'Complimentary hens party invites',
  ],
  list_items_optional: [
    '3 hour drink package',
    'Private strip show for your hens’ group',
    'Burlesque, Twerk or Lap dance class',
    'Upgrade seating to Gold or Platinum',
    'Luxury limo transfer to the dinner venue',
  ],
  location: 'Available VIC & NSW',
  price: '$85 per head (min 15 people)',
  time: '5pm',
  normal_price: 'Normally $110',
  video: 'https://youtu.be/erOW_WMNy3I',
  image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/5J0A0400-768x512.jpg`,
};

const section_five = {
  title: `Party bus and show`,
  sub_title: `Package`,
  list_items_one: [
    'Pick up from your residence',
    'Enjoy a 1-hour cruise arriving',
    'Magic Men show ticket – SILVER ',
    'The bus features full music entertainment system',
    'A drink on arrival',
    'Hen gets brought up on stage (optional)',
    'After party entry to the Rnb club (venue turns into a nightclub after the show)',
    'Complimentary hens party invites',
    'Free entry to the after party',
  ],
  list_items_optional: [
    'Private Strip show on the Bus with one of our Magic Men',
    'Upgrade seating for the show to Gold or Platinum ',
    'Burlesque/Twerk/Lap dance lesson for your group ',
  ],
  location: 'Available VIC & QLD & NSW',
  price: '$85 per head (min 20 people)',
  time: '5pm',
  normal_price: 'Normally $110',
  video: 'https://youtu.be/42ht0Q1YWIw',
  image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/fyE1Eimt-768x512.jpeg`,
};

const section_six = {
  title: `Hens Day Special `,
  sub_title: `Package`,
  list_items_one: [
    '3 hours Unlimited Drinks (sparkling, house wines and soft drinks)',
    'Reserved area for your group for 3 hours',
    'Personal topless waiter',
    'Private show or Life drawing class',
    'Introductory twerk classes ',
    'Complimentary Invitations',
  ],
  list_items_optional: [
    'FINGER FOOD ($15pp extra)',
    'TRANSFER: minimum 10 pax you can have a one-way luxury limo transfer for $50pp extra',
    'SHOW TICKETS: $40pp. (discounted from $50) Complete the night and come to the Magic Men show after',
  ],
  location: ' MARRAKECH NIGHTCLUB- 25 BANK PL MELBOURNE',
  price: '$139 per head',
  time: '3:00-6:00PM',
  normal_price: 'Normally$160',
  video: 'https://youtu.be/ER91ZYGnnpg',
  image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/IMG_0553-min-768x512.jpg`,
};

const topTen_data = [
  {
    heading: `DRESS THE BRIDE `,
    desc: `The bridesmaids come together and organize the Bride-to-Be’s outfit for the evening by choosing bits and pieces of unconventional fashion styles and materials. The bride then has to wear this outfit for the entire duration of the evening, no matter where the night takes them! Now there’s a way to make sure your hen is the center of attention!`,
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/hens-games2.jpg`,
  },
  {
    heading: `HENS SCAVENGER HUNT`,
    desc: `Create a list of items that can be found around the house or venue. Be creative and try to come up with a variety of items from simple things such as a lighter from a stranger to something cheekier like boxers from a stranger. Remember that this is a Rated H (for hens) scavenger hunt so come up with cheeky and naughty items that will get everyone stepping outside their comfort zone. Once the list is created, split the hens’ party into two groups and the group that comes up with most of the items on the list will win.`,
  },
  {
    heading: `TRUTH OR DARE`,
    desc: `The perfect indoor hens’ party game. Take advantage of the flowing drinks and spirited atmosphere and gather everyone together for a round of Truth or Dare. One at a time, flip a coin or spin a bottle to decide whose turn it is to be put to the test and reveal a little (or a lot) about themselves and who has to go run around the neighbor’s yard completely nude.`,
  },
  {
    heading: `NEVER HAVE I EVER`,
    desc: `The ultimate drinking game. What better way to kick starts a night by getting everyone acquainted or to solidify some life-long friendships by revealing some intimate secrets about what each girl has and hasn’t done. One at a time, each girl will go around the circle and reveal something they have never done before (eg. ‘Never have I ever… had a three-way kiss) and the girls who have done that will then have to take a sip.

`,
  },
  {
    heading: `PIN THE WILLY ON THE STRIPPER`,
    desc: `
This game can be purchased from most adult shops or even better why not make your own. Grab a blown-up poster of a stripper and stick a photo of the groom’s head over the strippers. Make willy cut-outs for every member of the hens party and each person puts their name on that willy. The aim of the game is to blindfold one girl at a time and guide her to the poster, she then has to place the willy where she thinks it should go. This activity is sure to have the whole party in hysterics.

`,
  },
  {
    heading: `bridal trivia`,
    desc: `One girl will interview and ask the bride a bunch of random and obscure questions about many facets of her life, embarrassing moments, relationships and interesting facts that make her unique. The questions will be posted to the wedding party, and whoever gets the most questions right is deemed the winner of the game. Now add the hens’ twist and make the game interesting by making anyone who gets an incorrect answer take a swig of their drink.`,
  },
  {
    heading: `NEWLY-TO-BE`,
    desc: `This game requires some preparation in advance but definitely worth the effort. Call, email or record the groom answering a list of questions about the bride, and have he respond with what he thinks her answer will be. This game is sure to bring out a few laughs to the table as it tests how well the groom really knows the woman his going to marry. Now to reverse the table on the hen and have the groom answer the same questions about himself and see if the hen knows the man she’s about to marry.`,
  },
  {
    heading: `THE “NAUGHTY ” WORD`,
    desc: `The idea behind this game is to forbid wedding-related words from being said during the entire hens party party. Some examples are groom, wedding, bride, bridesmaid, best man and vows. Each time someone says one of these words then they must have a drink or accept a dare from the rest of the party.`,
  },
  {
    heading: ` POST-IT NOTE HENS GAME`,
    desc: `To make the night memorable for the bride, play the post-it note hens game. Provide the hens with post-it notes and pens, and have them write any remarkable experience they’ve had with the bride. Collect the notes and then placed them in an area where the bride can read them. Now the bride has to read them aloud and guess who wrote them. She then has to narrate the real story behind the experience. This activity will definitely make the bride remember some wonderful memories she had with hens that would either make her laugh or cry.`,
  },
  {
    heading: `DESIGN THE WEDDING DRESS`,
    desc: `This is perhaps one of the most popular hens party games of all time. Divide the hens into teams and instruct them to come with a unique wedding dress for the bride. They can use any material they can find in the venue or house such as toilet paper. Give them a time limit to conceptualize a design and transform it into an actual dress. Once the time is up, the teams need to choose a hen who’ll wear the wedding dress and act as a model. The bride gets to choose the team with the most beautiful design. She then has to wear the winning piece all throughout the night.`,
  },
];

export default function HensPartyPage() {
  return (
    <div>
      <MagicMenLayout height="h-[50vh]">
        <GeneralHeroSection />
      </MagicMenLayout>
      <main className="bg-black pt-24">
        <div className="justify-center text-base text-slate-100 items-center p-3 flex flex-col">
          <CustomH1 text={'Hens Party Packages'} />
          <p>The perfect hen party ideas for an unforgettable night</p>
          <p>
            Our Guarantee:{' '}
            <b className="text-yellow-500/90">
              “all-inclusive hens party packages that’ll take the stress out of
              planning a great night out…“
            </b>
          </p>

          {/* Class Flex section -1*/}
          <div className="flex flex-col md:flex-row items-start text-sm space-y-6 w-full md:w-4/5 mx-auto  gap-6 my-11">
            {/* lhs */}
            <div className="space-y-6 w-full md:w-1/2 p-4">
              <CustomH1 text={'Hens Party Special'} />
              <ul className="list-disc space-y-2 italic font-roboto-mono ">
                <li>3.5 hours Unlimited Drinks</li>
                <li>
                  Package includes all basic spirits, sparkling, beer, soft
                  drinks & house wines
                </li>
                <li>* NEW 3.5 hours of Bottomless Cocktails (VIC only)</li>
                <li>Hot finger food served by topless waiters</li>
                <li>
                  Reserved seating (Silver) for award-winning Magic Men show
                </li>
                <li>Your hen gets brought up on stage (optional)</li>
                <li>After-party entry into Rnb Club</li>
              </ul>
              <ul className="list-disc space-y-2 italic font-roboto-mono ">
                <h2 className="text-yellow-500/90 text-xl font-bold">
                  Optional Extras:
                </h2>
                <li>Private strip show for your group </li>
                <li>Limo transfer the venue</li>
                <li>Upgrade seating to Gold or Platinum </li>
                <li>Burlesque/Twerk/Lap dance lesson</li>
                <li>Nude Art Class </li>
              </ul>
              <span className="flex items-center gap-2">
                <span className="text-yellow-500/90">
                  <FaLocationDot />
                </span>
                <p>Available VIC, NSW & QLD</p>
              </span>
              <span className="flex items-center gap-2">
                <p>
                  Price:{' '}
                  <b className="border-r border-r-yellow-500/90 text-yellow-500/90 px-2">
                    $99 per head
                  </b>{' '}
                </p>
                <p>
                  Time: <b className="text-yellow-500/90 px-2">6:00-9:30pm</b>
                </p>
              </span>
              <p
                className="line-through
">
                Normally$120
              </p>
              <a
                href={`/product/Hens Party`}
                className="block bg-green-600 rounded-md text-white border border-gray-200 text-center font-bold p-3 hover:text-black">
                Reserve My Group
              </a>
              <a
                href={`#`}
                className="block bg-transparent text-white rounded-md border border-gray-200 text-center font-bold p-3 hover:bg-white hover:text-black">
                Get in Touch
              </a>
            </div>

            {/* rhs */}
            <div className="w-full md:w-1/2 p-4">
              <div className="border border-yellow-500/90">
                <img src="https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/Magic7May73-2-768x512.jpg" />
              </div>
              <div className=" w-full my-6 border border-yellow-500/90 ">
                <VideoCard videoUrl={'https://youtu.be/W-FkCWMw33A'} />
              </div>
            </div>
          </div>

          {/* SECTION 2 */}
          <section>
            <div className="flex flex-col md:flex-row items-start text-sm space-y-6 w-full md:w-4/5 mx-auto  gap-6 my-11">
              {/* lhs */}
              <div className="space-y-6 w-full md:w-1/2 p-4">
                <span className="flex flex-col md:flex-row items-center gap-2">
                  {' '}
                  <CustomH1
                    text={` 
Magic Men `}
                  />{' '}
                  <p className="text-yellow-500/90 font-roboto-mono">{`"Feel The Magic" TICKET`}</p>
                </span>
                <ul className="list-disc space-y-2 italic font-roboto-mono ">
                  <li>Glass on champagne or drink on arrival</li>
                  <li>Hot finger food served by topless hunks</li>
                  <li>
                    Reserved seating (SILVER) for the award-winning Magic Men
                    show
                  </li>
                  <li>Hen gets brought up on stage (optional)</li>
                  <li>
                    Reserved seating (Silver) for award-winning Magic Men show
                  </li>
                  <li>Your hen gets brought up on stage (optional)</li>
                  <li>Complimentary bday/hens invites</li>
                  <li>After party at the club to dance the night away</li>
                </ul>
                <ul className="list-disc space-y-2 italic font-roboto-mono ">
                  <h2 className="text-yellow-500/90 text-xl font-bold">
                    Optional Extras:
                  </h2>
                  <li>Burlesque/Twerk/Lap dance Lesson for your hens group </li>
                  <li>Nude Art Class </li>
                  <li>Upgrade seating to Gold or Platinum </li>
                  <li>Limo transfer the venue </li>
                  <li>Private strip show </li>
                </ul>
                <span className="flex items-center gap-2">
                  <span className="text-yellow-500/90">
                    <FaLocationDot />
                  </span>
                  <p>Available VIC, NSW & QLD</p>
                </span>
                <span className="flex items-center gap-2">
                  <p>
                    Price:{' '}
                    <b className="border-r border-r-yellow-500/90 text-yellow-500/90 px-2">
                      $50 per head
                    </b>{' '}
                  </p>
                  <p>
                    Time: <b className="text-yellow-500/90 px-2">6:00-9:30pm</b>
                  </p>
                </span>
                <p
                  className="line-through
">
                  Normally$70
                </p>
                <a
                  href={`/product/${'Magic Men'}`}
                  className="block bg-green-600 rounded-md text-white border border-gray-200 text-center font-bold p-3 hover:text-black">
                  Reserve My Group
                </a>
                <a
                  href="#"
                  className="block bg-transparent text-white rounded-md border border-gray-200 text-center font-bold p-3 hover:bg-white hover:text-black">
                  Get in Touch
                </a>
              </div>

              {/* rhs */}
              <div className="w-full md:w-1/2">
                <div className="border border-yellow-500/90">
                  <img src="https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/IMG_1295-768x512.jpg" />
                </div>
                <div className=" w-full my-6 border border-yellow-500/90 ">
                  <VideoCard videoUrl={'https://youtu.be/DsP3cJO0pTg'} />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section>
            <div className="flex flex-col md:flex-row items-start text-sm space-y-6 w-full md:w-4/5 mx-auto  gap-6 my-11">
              {/* lhs */}
              <div className="space-y-6 w-full md:w-1/2 p-4">
                <span className="flex flex-col md:flex-row items-center gap-2">
                  {' '}
                  <CustomH1 text={`Limo Show`} />{' '}
                  <p className="text-yellow-500/90 font-roboto-mono  text-xl capitalize">{`Package`}</p>
                </span>
                <ul className="list-disc space-y-2 italic font-roboto-mono ">
                  <li>Get picked up from approx. 5:30 PM in a luxury limo</li>
                  <li>
                    Enjoy a 1 Hour Limo Cruise arriving at the Magic Men Feel
                    The Magic Show
                  </li>
                  <li>
                    Arrive at the nightclub and have reserved Silver Seating to
                    watch the Magic Men show
                  </li>
                  <li>A drink on arrival at the show venue</li>
                  <li>Hen gets brought up on stage (optional)</li>
                  <li>
                    After party entry to the Rnb club (venue turns into a
                    nightclub after the show)
                  </li>
                  <li>Complimentary hens party invites</li>
                </ul>
                <ul className="list-disc space-y-2 italic font-roboto-mono ">
                  <h2 className="text-yellow-500/90 text-xl font-bold">
                    Optional Extras:
                  </h2>
                  <li>Private strip show for your group </li>
                  <li>Upgrade seating for the show to Gold or Platinum </li>
                  <li>Add a 3 hr beverage package </li>
                  <li>Nude art class </li>
                  <li>Burlesque lesson </li>
                </ul>
                <span className="flex items-center gap-2">
                  <span className="text-yellow-500/90">
                    <FaLocationDot />
                  </span>
                  <p>Available VIC, NSW & QLD</p>
                </span>
                <span className="flex items-center gap-2">
                  <p>
                    Price:{' '}
                    <b className="border-r border-r-yellow-500/90 text-yellow-500/90 px-2">
                      $99 per head (min 10)
                    </b>{' '}
                  </p>
                  <p>
                    Time: <b className="text-yellow-500/90 px-2">5:30pm</b>
                  </p>
                </span>
                <p
                  className="line-through
">
                  Normally$120
                </p>
                <a
                  href={`/product/${`Limo Show`}`}
                  className="block bg-green-600 rounded-md text-white border border-gray-200 text-center font-bold p-3 hover:text-black">
                  Reserve My Group
                </a>
                <a
                  href="#"
                  className="block bg-transparent text-white rounded-md border border-gray-200 text-center font-bold p-3 hover:bg-white hover:text-black">
                  Get in Touch
                </a>
              </div>

              {/* rhs */}
              <div className="w-full md:w-1/2 p-4">
                <div className="border border-yellow-500/90">
                  <img
                    src="https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/limo-show-768x513.jpg"
                    alt="hghsg"
                  />
                </div>
                <div className=" w-full my-6 border border-yellow-500/90 ">
                  <VideoCard videoUrl={'https://youtu.be/h8Lp39-KanM'} />
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <ListComponent data={section_four} />
          </section>
          {/* Section 5 */}
          <section>
            <ListComponent data={section_five} />
          </section>

          {/* Section 6*/}
          <section>
            <ListComponent data={section_six} />
          </section>
        </div>

        {/* Text section */}
        <div className="space-y-11">
          {/* Content-1 */}
          <div>
            <TextContentComponent
              data={{
                paragraphs: [
                  `Are you excited for a fun night with chitchat, laughter, and all the glitters and glamour? Make your Hens Party Melbourne way spectacular with Magic Men. We offer a full-service package of entertainment, good looks and professional service that won’t break the bank.`,
                  `Booking with Magic Men is easy – just fill out a contact form with your details of the event. You can also check our customized hen’s packages for easy and fuss-free planning.`,
                  `Magic Men is voted as Australia’s best party planner for 5 years and we take pride in our passion of giving quality entertainment and services. Creating amazing hens party in Melbourne won’t be possible without fun, teasing and laughs we at Magic Men can provide. Take your creative hen’s party idea up a notch by celebrating it with us in live shows, e-shows and private visits. Expect jaw-dropping performances from our Magic Men ready that will surely result in ear-to-ear smiles, laughs, blood-pumping excitement, and a night to remember. Have your phones ready, and capture all these details when you celebrate with us. Let’s have a blast for the last single night of your life!`,
                ],
                heading: `Hens Party Melbourne`,
                image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/He-Must-Be-Professional.jpeg`,
              }}
            />
          </div>
          {/* Content-2 */}
          <div>
            <TextContentComponent
              reverse={true}
              data={{
                paragraphs: [
                  `Plan the best hens party and make memories worth a treasure with your girlfriends. Are you dreaming of a night of amazing activities that include cocktails, epic entertainment and a night you don’t want to end? Here at Magic Men, we make those dreams come true!`,
                  `We want you to spend your valuable time on more important things like bonding with your girlfriends and looking for the best outfit for the hens party. Leave the hens packages and entertainment to us, because that’s what we do best. Awarded as Australia’s best party planner, you’ve definitely come to the right place.`,
                  `If you are expecting an off-limits, mild-to-wild action, and surprises for your hens party in Brisbane, then we’ve got you covered! We are passionate about hens parties and takes pride in giving the best kind of entertainment with whatever your heart desires. So chill out with party planning, because we made it easy and affordable for you. Our magic comes in many forms, you can watch us on our live shows, e-shows or let us come in your private residence for a wonderful hens party. So, let’s have an absolute blast at your party, and when we say blast, we mean it!`,
                ],
                heading: `Hens Party Brisbane`,
                image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/He-Must-Have-An-Oozing-Charisma.jpeg`,
              }}
            />
          </div>

          {/* Content-3 */}
          <div>
            <TextContentComponent
              data={{
                paragraphs: [
                  `Did you know there’s the easiest way to create your Hens Party Sydney? Yes, there is! Let us be with you at this awesome hen party and we will be in charge of the entertainment, with our full package services. Check that off your to-do list and gather your gang to prepare for an exciting hen party.`,
                  `We’ve got a lot of activities for every type of hen and her hens. Whatever your group fancies, we will do as you please. Spice up your night with our performances you can catch live, on e-shows, and home visits. You are just a few clicks away from turning a conventional party into an adventurous and spectacular one.`,
                  `Magic Men is the best in party planning in Australia, and we want you to experience the same kind of awesomeness and magic we provide. Just a fair warning, your hen party Sydney will have lots of smiles, giggles, laughs, jumping and fun screams. Don’t say we didn’t warn you!`,
                ],
                heading: `Hen Party Sydney`,
                image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/Seek-Opportunities-Magic-Men-Australia.jpeg`,
              }}
            />
          </div>
          {/* Content-4 */}
          <div>
            <TextContentComponent
              reverse={true}
              data={{
                paragraphs: [
                  `Create an unforgettable party with your besties as you celebrate a hens party in Perth. Having a special celebration means you have high expectations and we know exactly what to do to meet them.`,
                  `Being Australia’s best party planning means we’re doing our best and we’re great at it. We know how you deserve more for this occasion with your loved ones and we can make it happen. Our booking process is simple and you can do it with just a few clicks away. Simply fill out a contact form and let us know your details.`,
                  `Here at Magic Men, we offer the greatest quality and service to give you an unparalleled hens party in Perth. We have full-package services for every type of lady, and with every budget. Our hen’s party ideas and activities will make your bonding memorable and worthwhile. Our hunks at Magic Men will give you classy and sassy performances you’ve never seen before. So let your party planning cap on, contact us, and together, we will make the hens party of a lifetime!`,
                ],
                heading: `Hens Party Perth`,
                image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/How-To-Choose-The-Perfect-Male-Stripper-Name-scaled.jpeg`,
              }}
            />
          </div>
          {/* Content-5 */}
          <div>
            <TextContentComponent
              data={{
                paragraphs: [
                  `Save your time, money, and enjoy hassle-free party planning with us at Magic Men. Voted as Australia’s best party planner for 5 years, we take pride in our quality full-package entertainment and services.`,
                  `Whatever hens party ideas you have in mind, we have packages that will suit your taste. And have we mentioned, affordable prices, too? We know you ladies, and gentlemen just want to have a fun night, so we bring you affordable and irresistible entertainment that you deserved.`,
                  `Hens Party in Adelaide can be a classy, and epic one when you have us. We, at Magic Men, bring magical moments to you through our live shows, e-shows or private home visits. Our spunky guys can make amazing parties and a great addition to your bonding. We take pride in professional, sociable, well-chiseled men that will rock your hens party. So what are you waiting for? Book us and let us spoil you for a hens party in Adelaide.`,
                ],
                heading: `Hens Party Adelaide`,
                image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/How-To-Choose-Hot-and-Sexy-Australian-Male-Strippers-For-Your-Party.jpeg`,
              }}
            />
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div>
          <HowItWorks />
          <div className="my-16 text-white p-4 w-full md:w-4/5 mx-auto flex flex-col items-center justify-center">
            <h1 className="text-yellow-500/90 text-xl uppercase md:text-2xl font-roboto-mono">
              To book your Hens Party Special, click here:
            </h1>
            <a
              href="#"
              className="hover:bg-green-600 my-6 uppercase  font-medium font-roboto-mono text-white hover:text-black bg-transparent border-2 p-2 text-xl text-center w-full border-green-700 rounded-md">
              Get in touch
            </a>
          </div>
        </div>

        {/* Hens Party Dares & Games */}
        <div className="text-center p-4">
          <div className="my-16 text-white font-roboto-mono p-4 w-full md:w-4/5 mx-auto flex space-y-6 flex-col items-center justify-center">
            <h1 className="text-yellow-500/90 text-xl uppercase md:text-2xl font-roboto-mono">
              Hens Party Dares & Games
            </h1>
            <h1 className="text-fuchsia-500 text-xl md:text-2xl font-bold uppercase ">
              MAGIC MEN’S FAVOURITE HENS PARTY GAMES ALL IN ONE PLACE
            </h1>
            <div>
              <p>
                Hens party games are one of the essential things to consider
                when organizing the special night. Whether it’s a hens party in
                or just pre-drinks before you come to the club, we’ve got loads
                of fun ideas. These are games for you and your group to play,
                which will break the ice and have you in side-splitting laughter
                in no time. From naughty games to drinking games to fun games,
                there are many options for hens party games to plan!
              </p>
              <p>
                Party games add fun to any hens party. Drinking games such as ‘I
                Have Never and ‘Drinking Words’ give your friends the perfect
                opportunity to enforce some challenging party dares! Scavenger
                hunts and Truth or Dare are classic hens party games that
                everyone will love – just make sure to make some of the
                questions, dares, or scavenger hunt items naughty, funny, and
                very difficult! If it’s your job to arrange a hens party, you
                definitely want to plan a few games to help send the guest of
                honor off to married life in style (and laughter). When planning
                games, keep in mind that it’s a good idea to over-plan a little.
                You don’t have to play all the games; in fact, no one likes an
                over-scheduled party. However, having a few games up your sleeve
                can be a lifesaver (and an ice breaker) when entertaining a
                group of ladies, you may not know very well – or even your best
                friends. For extra fun, get your topless waiters in on the
                action – they love to play games, too!
              </p>
              <p>
                As the party planner, the pressure is on for you to organize an
                unforgettable evening. At Magic Hens, we know how to take your
                hens party to the next level. Let us help with naughty hens
                party games along with our complete party packages. Our hot male
                strippers,{' '}
                <a
                  href="/topless-waiters"
                  className="underline">
                  topless waiters
                </a>
                , exclusive venues, luxury transport, and wild party games will
                ensure that your hens party is a fun and fabulous celebration
                that you and your friends will remember for the rest of your
                lives.
              </p>
            </div>
            <span className="flex items-center justify-center flex-wrap p-3 gap-2">
              <a
                href="# "
                className="rounded-full bg-fuchsia-600 font-bold p-3 hover:bg-fuchsia-900">
                Buy tickets
              </a>
              <a
                href="# "
                className="rounded-full bg-blue-400 font-bold p-3 w-20 hover:bg-blue-900">
                FAQ
              </a>
              <a
                href="# "
                className="rounded-full bg-fuchsia-600 font-bold p-3 hover:bg-fuchsia-900">
                See Photos of Our event
              </a>
            </span>
          </div>
        </div>

        {/* Top 10 parties */}
        <div className="w-full md:w-4/5 p-4 mx-auto  text-center text-white">
          <h1 className="text-fuchsia-500 text-xl md:text-2xl font-bold">
            LET’S START THE PARTY WITH OUR TOP 10{' '}
          </h1>
          <div className="space-y-11">
            {topTen_data.map((d, i) => {
              return (
                <TopTenParty
                  index={i}
                  key={i}
                  data={d}
                />
              );
            })}
          </div>

          <div>
            <h1 className="uppercase font-bold text-xl md:text-2xl text-fuchsia-500">
              DON’T FORGET OUR GAMES ARE BETTER WITH{' '}
              <a
                className="underline"
                href="/topless-waiters">
                TOPLESS WAITERS
              </a>
            </h1>
            <span className="flex items-center justify-center flex-wrap p-3 gap-2">
              <a
                href="# "
                className="rounded-full bg-fuchsia-600 font-bold p-3 hover:bg-fuchsia-900">
                Buy tickets
              </a>
              <a
                href="# "
                className="rounded-full bg-blue-400 font-bold p-3 w-20 hover:bg-blue-900">
                FAQ
              </a>
              <a
                href="# "
                className="rounded-full bg-fuchsia-600 font-bold p-3 hover:bg-fuchsia-900">
                See Photos of Our event
              </a>
            </span>
            <div className="my-6">
              <iframe
                className="mx-auto"
                width="100%"
                height="316"
                src="https://www.youtube.com/embed/WlLlIXNI3RE"
                title="MEET THE MAGIC | HOTTEST TOPLESS WAITERS IN AUSTRALIA"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

function TopTenParty({ data, index }) {
  return (
    <div className="flex flex-col md:flex-row  my-6 items-center justify-center gap-4 font-roboto-mono space-y-6">
      <div className={`${data?.image ? 'w-4/5' : 'w-full'}`}>
        <h1 className="text-yellow-500/90 font-bold uppercase text-xl">
          <span className="mr-2">{index + 1}.</span>
          {data?.heading}
        </h1>

        <p>{data?.desc}</p>
      </div>

      {data?.image && (
        <div>
          <img
            src={data?.image}
            alt="hghsg"
          />
        </div>
      )}
    </div>
  );
}
function HowItWorks() {
  return (
    <div className="w-full md:w-4/5 mx-auto p-4 space-y-11 flex flex-col gap-4  text-center my-11 text-white">
      <a
        href="#"
        className="text-center capitalize text-2xl">
        Hens Party Ideas
      </a>
      <div>
        <h2 className="font-bold font-roboto-mono text-center my-4 text-xl">
          Classy Hens Party Ideas For The Bride Tribe
        </h2>
        <div className=" w-ful ">
          {/* <VideoCard videoUrl={'https://youtu.be/Z3LOsGk30_M'} /> */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Z3LOsGk30_M"
            title="Magic Men World - Ladies night, just do it right!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
        <p className="leading-relaxed text-base font-medium my-4">
          Want to treat your hen to the ultimate celebration before her wedding
          day? Day or night, winter or summer, crazy or classy, we have an
          option for every single type of hen. Choosing a theme or activities
          for the bachelorette party is a tedious thing to do. It takes so much
          time and from one planner to another, we’ve seen how many bridesmaids
          or girlfriends struggle with this because of different ideas from each
          lady in the group. So here, we summed up the best classy hens party
          ideas so you can devote your time to more productive ones, like
          choosing your outfit!
        </p>
        <h2 className="font-bold font-roboto-mono text-center my-4 text-xl">
          High Tea Party: Manners, Lace, and Everything Elegant
        </h2>
        <p className="leading-relaxed text-base font-medium my-4">
          The high tea party is perfect for a luxurious and stylish experience
          of classy hens. You can visit your favorite snack place or book a
          tearoom and sip tea and cakes while catching up with your friends and
          play games.
        </p>
        <p className="leading-relaxed text-base font-medium my-4">
          You can even set a dress code for the party. Ladies, you can wear
          vintage dresses, or it can be an all-white or pink party to keep
          things very angelic and girly. Plus, to add some elegant atmosphere,
          you can fill the room with flowers and ribbons, and you have a perfect
          hen’s afternoon planned for your future bride.
        </p>
        <h2 className="font-bold font-roboto-mono text-center my-4 text-xl">
          Indulging in A Luxury Cruise Ride
        </h2>
        <p className="leading-relaxed text-base font-medium my-4">
          If you don’t worry about the budget, then a luxury cruise is perfect
          for the party. You can hire a boat and enjoy luxury cocktails, wine,
          and canapés with your hens. You can also listen to all your favorite
          music and play more than a few drinking games. A private party like
          this will be appreciated by the hen and even everyone in the group.
          Plus, you have the ocean as your backdrop, what more could you ask
          for?
        </p>
        <p className="leading-relaxed text-base font-medium my-4">
          Pro tip: add some fun and excitement to your party, and hire topless
          waiters or <a href="/male-strippers">male strippers</a> – not only
          they will look amazing in the photos, but they’re also very good at
          mixing cocktails and keeping those glasses filled. So leave the
          “cock-tails” and drinks with these lovely hunks and have the party of
          your life!
        </p>
        <div className="">
          <img
            src="https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/Hire-topless-waiters-and-indulge-in-a-luxury-cruise-hen-party-1024x683.jpg"
            alt="hghsg"
          />
        </div>
        <h2 className="font-bold font-roboto-mono text-center my-4 text-xl">
          A Pamper Session For The Care You Deserved
        </h2>
        <p className="leading-relaxed text-base font-medium my-4">
          If you’re looking for a classy party with your hens, then a pamper
          session (spa day) is also a good idea. A day on the hot tub, having
          your nails treated, and a range of beauty treatments will leave you
          all refreshed and gorgeous! The perfect activity in the afternoon
          after a night spent booging with your loved ones.
        </p>
        <p className="leading-relaxed text-base font-medium my-4">
          With many options either on your doorstep, in the city center or a
          more picturesque and rural setting, it is an accessible activity
          whether you opt for massages, manicures, pedicures or facials with
          your hen over the weekend.
        </p>
        <h1 className="font-bold font-roboto-mono text-center my-4 text-xl">
          Private Bartending: Sip and Spill the Fun
        </h1>
        <p className="leading-relaxed text-base font-medium my-4">
          For cocktail lovers, this is your chance to learn and have endless fun
          while preparing epic cocktails from the private bartender. You can
          organize a professional cocktail party in your own home by hiring your
          bartender and learn how to make cocktails during this master class.
        </p>
        <p className="leading-relaxed text-base font-medium my-4">
          The session includes three cocktail creations where you will go
          through several stages, such as how to mix and shake a perfect
          cocktail. Imagine a cocktail session with your ladies, pure fun and
          bliss while you mix the best potion you want with guidance and charm
          from a topless bartender. Cheers, because it’s going to be a long
          night!
        </p>
        <div className="">
          <img
            src="https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/Private-Bartender-Classy-Hens-Party-Ideas-For-Princess-Of-The-Night-1024x733.jpeg"
            alt="hghsg"
          />
        </div>
        <p className="leading-relaxed text-base font-medium my-4">
          Hen parties are a rite of passage before the bride finally ties the
          knot. For the ladies who want to party in a classy but special way,
          these are hens party ideas Gold Coast that will make a fabulous
          get-together. No matter what your hen’s party idea is, it is essential
          that the future bride loves and feels comfortable at the party.
          Moreover, it must be appropriate for all participants, affordable and
          is within budget. So, think outside the box and let your imagination
          run wild with these hen party ideas for one memorable send-off.
        </p>
      </div>
    </div>
  );
}

function ListComponent({ data }) {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-start text-sm space-y-6 w-full md:w-4/5 mx-auto  gap-6 my-11">
        {/* lhs */}
        <div className="space-y-6 w-full md:w-1/2 p-4">
          <span className="flex flex-col md:flex-row items-center gap-2">
            {' '}
            <CustomH1 text={`${data?.title}`} />{' '}
            <p className="text-yellow-500/90 font-roboto-mono  text-xl capitalize">{`${data?.sub_title}`}</p>
          </span>
          <ul className="list-disc space-y-2 italic font-roboto-mono ">
            {data?.list_items_one?.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
          <ul className="list-disc space-y-2 italic font-roboto-mono ">
            <h2 className="text-yellow-500/90 text-xl font-bold">
              Optional Extras:
            </h2>
            {data?.list_items_optional?.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
          <span className="flex items-center gap-2">
            <span className="text-yellow-500/90">
              <FaLocationDot />
            </span>
            <p>{data?.location}</p>
          </span>
          <span className="flex items-center gap-2">
            <p>
              Price:{' '}
              <b className="border-r border-r-yellow-500/90 text-yellow-500/90 px-2">
                {data?.price}
              </b>{' '}
            </p>
            <p>
              Time: <b className="text-yellow-500/90 px-2">{data?.time}</b>
            </p>
          </span>
          <p
            className="line-through
">
            {data?.normal_price}
          </p>
          <a
            href={`/product/${data?.title}`}
            className="block bg-green-600 rounded-md text-white border border-gray-200 text-center font-bold p-3 hover:text-black">
            Reserve My Group
          </a>
          <a
            href={data?.getInTouch_link || '#'}
            className="block bg-transparent text-white rounded-md border border-gray-200 text-center font-bold p-3 hover:bg-white hover:text-black">
            Get in Touch
          </a>
        </div>

        {/* rhs */}
        <div className="w-full md:w-1/2 p-4">
          <div className="border border-yellow-500/90">
            <img
              src={data?.image}
              alt="hghsg"
              className=""
            />
          </div>
          <div className=" w-full my-6 border border-yellow-500/90 ">
            <VideoCard videoUrl={data?.video} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TextContentComponent({ data, reverse = false }) {
  return (
    <section className="text-white">
      <div
        className={`flex flex-col ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-center justify-center gap-4 w-full md:w-4/5 mx-auto`}>
        {/* LHS */}
        <div className="p-4 w-full md:w-1/3">
          <div className="">
            <img
              src={data?.image}
              alt="hghsg"
              className=""
            />
          </div>
        </div>
        {/* RHS */}
        <div className="w-full md:w-4/5 p-4 text-center space-y-6">
          <h1 className="font-bold text-xl font-roboto-mono">
            {data?.heading}
          </h1>
          {data?.paragraphs?.map((paragraph, i) => {
            return <p key={i}>{paragraph}</p>;
          })}
        </div>
      </div>
    </section>
  );
}
