import FAQ from '@/components/global/faq_image';
import CustomH1 from '@/components/home/heading';
import MagicMenLayout from '@/components/home/naviagation';
import Footer from '@/components/home/Footer';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
export default function Page() {
  const faqData = [
    {
      id: '#12',
      question: `Does our hen or birthday girl get to go up on stage?
`,
      answer: `If you’ve booked your hens night, birthday, or girls’ night in advance and we know it’s a special event, you can be sure the guest of honor is up for a night to remember. We’ll bring them up on stage at some point throughout the show to experience the magic first-hand.

We also have optional private shows available to add to your booking for a flat fee of $350 (VIC) or $380 (NSW & QLD). These are held in a separate area with just your group and the man of your choice. They’re great for making your night just a little more special.`,
    },
    {
      id: 2,
      question: `Can you just rock up and buy tickets at the door?
magic men`,
      answer: ` 
 Just like buying tickets to see a popular movie at the cinemas; making a reservation and pre- booking is strongly recommended as Magic Men usually books out 3-4 weeks in advance. Our seats are reserved which means if you rock up on the night, even if we have availability, you can only buy standing tickets.`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/IMG_8419-300x200.jpg',
    },
    {
      id: 3,
      question: 'Are males allowed?',
      answer:
        'Magic Men is a gay friendly venue. We allow both males and females to come and enjoy our award winning show. Pre-booking essential.',
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/15385379_1207729102653464_8129887684388280850_o-300x200.jpg',
    },
    {
      id: 4,
      question: 'Does our hen or birthday girl get to go up on stage?',
      answer: `
 As long as your package or group booking is made in advance and we are aware you are attending. We will bring your hen/guest of honor up on stage once with one of the Magic Men at some stage throughout the show.
If you are after extra special attention for your group, you can choose to add a private show to your booking for an additional $250 set price (optional extra). The private show will be held in a separate area for your group only with one of the Magic Men of your desire.`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/IMG_8334-1-300x200.jpg',
    },
    {
      id: 5,
      question: `How do we book front row seating? Or reserve a booth area? `,
      answer: `For Silver seating (basic seating) – Seating is always allocated based on your time of booking and your final group size (which you tell us on the Monday of the week fo the event). Generally we will reserve seating for you for the show based on how early you made your deposit, so the earlier you deposit, the better your seating will be on the night.

To get specific seating (booth or front row), you can request an upgrade to your booking once it’s made to either: Platinum VIP seating (Front 3 rows closest to the stage) or Gold priority seating (4th row to middle of the venue).`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/IMG_8095-1.jpg',
    },
    {
      id: 6,
      question: `Are you allowed to take photos on the night?


`,
      answer: `No photography or recording of the show whilst the performances are on is permitted, however we do allow you to take photos of each other and photos of yourselves partying with the topless waiters during the intermission. We also have a professional photographer that comes around and takes photos of you girls throughout the night and get uploaded to this site on Monday after the weekend. CLICK HERE to see the photos.`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/IMG_7502.jpg',
    },
    {
      id: 7,
      question: `What kind of finger food do you serve? Do you cater to dietary requirements such as vegetarians or gluten free?`,
      answer: `The complementary finger food served by topless waiters is basic finger food, not a meal. It’s there to help you soak up the alcohol and we do recommend having a meal before you arrive. The finger food is catered hot and served warm by topless waiters, feel free to grab a bite from the platters as the guys walk around. We do not cater to dietary requirements as the finger food is complementary and not factored into the price of the ticket. There is a vegetarian option but no gluten free options. Below is a sample:

Mini Pies Assorted
Chicken Bites
Sausage Rolls
Dim Sims
Quiche ( V )
Spinach Rolls ( V )
Beef Meatballs
Calamari
Mini Pizza
Samosa ( V )
Risotto Balls ( V )`,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/IMG_6894.jpg',
    },
    {
      id: 8,
      question: `
      Hens Special Package- We have a girl who doesn’t drink because she is pregnant, does she still have to pay the same amount?`,
      answer: ` In regards to the girls who are pregnant, don’t drink or designated drivers. We still offer things in the package such as the finger food, the seating for the show, the topless waiters, soft drinks and after party. The price required is still the same as the other girls in the group, we understand that in every group of hens/girls night there is always one or two girls who simply don’t drink however we also know that in every group there are one or two girls in the group who can drink twice as much as the others, and we wouldn’t charge them double. `,
      image:
        'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-9e24d4c/www.magicmen.com.au/wp-content/uploads/12105989_768862353239317_847810463750729119_n-2.jpg',
    },
  ];
  return (
    <div className="text-white">
      <MagicMenLayout height="50vh">
        <GeneralHeroSection />
      </MagicMenLayout>
      <div className="mt-11 p-4 font-roboto-mono">
        <CustomH1 text={`Frequently Asked Questions - Male Strip Club`} />
        <p className="font-bold text-center text-xl">
          About Our Weekly Stage Show and Hens Packages
        </p>
        <FAQ faqData={faqData} />
      </div>
      <Footer />
    </div>
  );
}
