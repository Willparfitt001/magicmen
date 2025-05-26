import FAQ from '@/components/global/faq_image';
import CustomH1 from '@/components/home/heading';
import MagicMenLayout from '@/components/home/naviagation';
import Footer from '@/components/home/Footer';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
export default function Page() {
  const faqData = [
    {
      id: 1,
      question:
        'WILL THE STRIPPER I BOOK FROM THE SITE LOOK THE SAME IN REAL LIFE?',
      answer:
        'YES! At Magic Men we pride ourselves on being able to offer you the best of the best! All photos are updated regularly, so you are ensured satisfaction with your booking.',
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/Expectations.jpg',
      expectationsLabel: 'EXPECTATIONS',
      realityLabel: 'REALITY',
    },
    {
      id: 2,
      question: 'HOW LONG DO THE SHOWS GO FOR?',
      answer: `A. Depending on the type of show that is requested, generally our Magic Men have their own style of show and the length will vary from performer to performer.

G-String and Raunchy Nude Show 15-20 min
Desert Fantasy Special 20 min
Double Trouble 30-45min`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/996622_396120897180133_1456789540_n1-300x200.jpg',
    },
    {
      id: 3,
      question: 'CAN YOU TAKE PHOTOS DURING THE SHOW?',
      answer:
        'Taking photos is generally permitted however this is up to the performer and you can ask them when they arrive. No video recording is permitted during the show.',
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/10856650_636824736443080_3206789803127946924_o-300x200.jpg',
    },
    {
      id: 4,
      question: 'To make a booking is a deposit required?',
      answer: `. In order to secure your performer or waiter at your specified date and time a deposit is required.

There are two ways to pay the deposit:

Direct Deposit via internet banking transfer.
Credit Card payment is also acceptable.
You will be emailed a receipt for your deposit once funds have cleared, or credit card has been charged. The outstanding amount is to be paid to the performer on the day. Please view our TERMS AND CONDITIONS also.`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/zac-steel-magicmen-3.jpg',
    },
    {
      id: 5,
      question: `How do I book a stripper for my girlfriend, hen or birthday girl? `,
      answer: `Either complete the online booking form, telephone us or email us. We require the following information:

Which guy/s you are interested in booking
The date, time and location of the event
A contact number
Someone will get back to you as soon as possible to confirm the booking and go through all the details with you. The best way to lock in your favourite guy, is to give us a time frame you’d like him to work with, to ensure he is available for booking.`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/male-strippers-4.jpg',
    },
    {
      id: 6,
      question: `Why should I choose Magic Men rather than another agency?

`,
      answer: `
A. Simple – We’re Magic! We choose only the best performers and the best waiters. All our guys are in peak condition physically, professional and deliver amazing shows! It is an exclusive agency offering shows that you won’t see anywhere else. We have friendly staff that are able to assist you through the whole process from booking to planning. contact us today!`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/logo-0011.png',
    },
    {
      id: 7,
      question: `What do I need to prepare for my stripper in order for him to do his show?`,
      answer: `Our stripper comes self equipped with all the necessary gear to rock the house down. However we do ask that you prepare:

The outstanding money for your Magic Man
A spare room or bathroom for him to get ready
Some space for your entertainer to move around and perform his show
A chair (preferably with no arms) for the special girl to sit on.`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/10407095_588403431285211_4644337468946077113_n2.jpg',
    },
    {
      id: 8,
      question: `What is the minimum length of time we need to book a topless waiter for?
`,
      answer: `There is a minimum booking of 2 hours for topless waiters at a base charge of $100 per waiter per hour. For 3 hours or more the price is discounted!`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/male-strippers-4.jpghttps://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/10455563_543456985779856_5321395929309991911_n.jpg',
    },
    {
      id: 9,
      question: `Can the guys travel outside major cities?
 `,
      answer: `Yes, Magic Men is a national agency with male strippers in every city. We can send guys out to rural areas also, however a travel fee of $1 per km will be required. Luckily, you only have to pay for 1 way!`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/mattstripper51.jpg',
    },
    {
      id: 10,
      question: `We want a strip show but don’t have a place to do it. Can we hire a function room?

 `,
      answer: ` If you don’t have a place for your function, leave it to us. We have special packages that give you access to a private function room in a beautiful cocktail lounge. That way you only have to show up and be amazed! To see our special packages click here.`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/1655829_465439063581649_743869281_n2.jpg',
    },
    {
      id: 11,
      question: `Do the guys perform at a mixed crowds like an 18th or 21st birthday party with other guys there?

 `,
      answer: `  Yes, our guys cater for every sort of party, function and event. A surcharge may apply to certain events.`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/male-strippers-4.jpg',
    },
    {
      id: 12,
      question: `I’m not sure what else to plan for the night, can you help?

 `,
      answer: ` Definitely. At Magic Men we can help you organise and customise any package suited to your budget and requirements. Whether it’s burlesque, pole lessons, party bus, dinner and show or even a party bus we can create a package easily to ensure your party is talked about for months to come.`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/mattstripper51.jpg',
    },
    {
      id: 13,
      question: `. What happens on the night, how will I know when the guy has arrived?

 `,
      answer: `On the night, your male stripper or waiter will contact you via txt or call to let you know he is close and give you ample time to prepare for his arrival. For bookings within hotels or private function rooms, you may need to meet in reception to give him access to your event.`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/mattstripper51.jpg',
    },
    {
      id: 14,
      question: `Can the guys travel outside major cities?
 `,
      answer: `Yes, Magic Men is a national agency with male strippers in every city. We can send guys out to rural areas also, however a travel fee of $1 per km will be required. Luckily, you only have to pay for 1 way!`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/mattstripper51.jpg',
    },
  ];
  return (
    <div className="text-white">
      <MagicMenLayout height="50vh">
        <GeneralHeroSection />
      </MagicMenLayout>
      <div className="mt-11 p-4 font-roboto-mono">
        <CustomH1 text={`Frequently Asked Questions`} />
        <p className="font-bold text-center text-xl">
          About Our Private Shows And Waitering Services
        </p>
        <FAQ faqData={faqData} />
      </div>
      <Footer />
    </div>
  );
}
