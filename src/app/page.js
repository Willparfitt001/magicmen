import Image from 'next/image';
import MagicMenLayout from '@/components/home/naviagation';
import StripperCard from '@/components/home/stripperCard';
import LinkCard from '@/components/home/linkCard';
import HensPartyPkg from '@/components/home/hensParty';
import Partner from '@/components/home/partner';
import Experience from '@/components/home/exprience';
import Faq from '@/components/home/faq';
import HomeGallary from '@/components/home/HomeGallary';
import Footer from '@/components/home/Footer';
import HeroSectionHome from '@/components/home/hero_1';

const faqs_data = [
  {
    question: 'An introduction into male stripping.',
    answer: `Male Stripping in Australia is a very thrilling, exciting niche industry, where everyone knows one another or has crossed paths with each other at some point in time. Just like any other industry male stripping is very competitive, and everyone wants to be the best. Some say, there are underground battles between some crews, with everyone trying to outshine each other. Being the best or 'Top Dog' in the male stripping world means you are the brand that has the most shows, bigger social presences, larger stages and wildest parties.
For many people, a male stripper in Melbourne is primarily hired to perform at special social events, such as Bridal Shows, Hens Parties, Birthdays and Divorce Parties. The reality is, they can perform for anyone, anywhere and at any time. Some couples like to book a male stripper to spice up their love life, you know, get in the mood. Some may be inclined to hire a male stripper in Melbourne to simply worship his physique or at sex toy parties. Generally speaking, male strippers in Melbourne equal fun, and lots of it, they are the party starters.
    There are many qualities of a good male stripper in you may not be aware of, and today we are going to explore some of them in a little depth to better help you with your next male stripper booking in Melbourne, or anywhere else.
    `,
  },
  {
    question: 'The agency they work for you',
    answer: `Just like anything we purchase, many of us are inclined to go with a reputable brand. A brand with the most positive reviews, a brand that has been established and is reliable. A brand that has the widest range and the most competitive prices. Here are a few things to look for when selecting your next male stripper:

1. Response Time - The response time is generally a reflection of the company's efficiency, so if they come back to you quickly, you know you're going to be able to get a hold of them if and when you need to.

2. Ease of payment & booking - How easy was it for you to contact them to make you your booking, and were they accommodating? If the answer is yes, that's great – you know if you have to make any changes, tweaks or anything unexpected pops up they will be helpful. Also, the platforms they book you in with, is it via chat on Facebook, or is it via a customer management system? Always make sure it's made via a genuine website platform.

Always try booking your performer for a Friday night or the last timeslot on a Saturday night. This will ensure you get to have your guy for longer, as he's not pressed for time doing back to back bookings.`,
  },
  {
    question: 'What do male strippers wear',
    answer: `The answer to this commonly asked question is, whatever you want them to wear. Most performers have pre-set costumes, that are included in the price or offer. Some performers offer a wider range than others. Most performers are willing to customise a performance for you at a fee, or if you provide the costume.

- Policeman
- Fireman
- Soldier
- Cowboy
- Tradie.\n\n\n



- Some guys have a broader spectrum of costumes such as:
- Postman
- Pilot
- Pizza Delivery
- Harry Potter
- Aquaman
- Nerd
- Superman
- Magic Mike Tribute
- Grease Tribute
 `,
  },
  {
    question: 'what to look in a good male stripper',
    answer: `There is a lot of background work required to become a good, if not a great male stripper in Melbourne, especially in the city where the competition is fierce. In the 15 – 20 minutes you get to have your talent there are a few things every good a male stripper will present with; these are not limited to:



    - Is your stripper on time or did your stripper communicate well with you in the anticipation of his arrival.import
    - Does your stripper have a boombox, and prepared music? (It’s a giveaway that they aren’t a professional if they ask to dance to your music)
    - The length of the show, this should be for the time advertised, if not close too. Ideally, his show is so mind-blowing, you forget about time completely.
    - His costume, was he just wearing a hat and saying he was a policeman or did he have a genuine costume, one that would make you do a double-take and see if he was the real deal?
    - Does your male stripper’s performance include a variety of moves, songs and integrations, not just undressing and grinding?  In 2017 – 2020 Male strippers in Melbourne evolved very quickly and were taking their shows and acts to the next level with the addition of gymnastics, breakdancing and even fire breathing. There was even a male stripper from Melbourne who performed at the 2019 SEXPO and was suspended from the roof whilst playing an electric guitar. The possibilities are endless and with new and upcoming talent, there is always someone ready and willing to take the industry to the next level.

Inspiration for male strip shows and performances can be drawn from many forms of media, mostly from popular movies, or series depicting desirable hunky men. Male strippers try to fulfil that sexualised fantasy, in a cheeky, light-hearted way.`,
  },
  {
    question: 'The firsst Impression of a male stripper',
    answer: `Knock knock, OMG here he comes! You open the door, there he is, the man you booked, standing tall in his tight costume, boombox over the shoulder and ready to go. Mmmmm, he smells so good, you let him in.

This is what you may visualise, but sometimes things don’t go exactly to plan, for example, the hotel you booked has a no party policy, and you have to sneak him in normal clothes to avoid being kicked out. Maybe the bride to have already celebrated too hard and is ready for a nap or just maybe you gave him the wrong address. (it happens!) Despite all of these maybe are your male stripper should always be well mannered, when he can be accommodating, a good sport and be a memorable part of your celebration.

Back in 2017, a Melbourne male stripper attended a party in the northern suburbs, it was hosted at the rear of the property in an enclosed back yard entertaining area. Little did the male stripper know, there was a giant pond in the dark on entry, and yes, he fell in the pond, and it was a deep pond full of plants. Absolutely soaking wet, with the organiser’s permission, he quickly showered, redressed (they usually have multiple costumes on them) and re-entered the entertaining area via the back door. Safe to say, although the evening may have not gone to plan 100%, there were plenty of laughs had that night. The same party has since booked him for 3 other events, based on that incident. Personality is a big contributing factor to booking your male stripping talent.`,
  },
];

const faqs_data_two = [
  {
    question: `
MALE ENTERTAINER 101: ANSWERS TO QUESTIONS YOU’VE ALWAYS WANTED TO ASK`,
    answer: `Ever wondered what it is a Male Stripper actually does? Why is it they are deemed an essential component of every bachelorette’s party, divorce party and significant birthday party? A sexy, professional and experienced male stripper will leave your guests talking for years to come with the wild memories that spark immense joy, thus also deeming you one of the best party organisers ever.

In short, a male stripper will attend your special event, perform a thrilling show in a costume of choice to specialty music, providing exciting, playful entertainment to everyone in the room. A male stripper can customise your experience on request, this may be a special song request or costume. You may even have someone you really want them to pay attention too, ( like a mother in law ) they can do it all, just ask them. When the show is over, your male stripper will stay and take some photos with you and your guests as keepsakes. He’ll shortly after, pack up – clean up and head of to his next appointment.

Either to strike a conversation or just to pick your curiosity, you might have asked a few questions about stripping in your entire life. You might have common misconceptions about male stripping, so here are some answers to shed some light on this interesting topic.
Here, we summed up all the commonly asked questions to male strippers to give you clear answers, once and for all.`,
  },
  {
    question: `
WHAT DO YOU CALL A MALE STRIPPER?`,
    answer: `Before we answer this, let’s make sure we are on the same page. A stripper is a performer who earns money by taking their clothes off in public, especially as part of a show. The performance usually includes stripteasing in a strip venue, or PRIVATE VENUES. They are commonly hired to do a show in hen parties or other private events. Aside from stripteasing, they are also performing lap dances, private dances, and table dances.

You can call them a striptease artist, Casanova, ladies’ man, male companion, male dancing partner, but whatever you call them, a male stripper is meant to give you a performance of a lifetime.`,
  },
  {
    question: `
HOW MUCH DO MALE STRIPPERS MAKE A MONTH?`,
    answer: `There are a few factors involved to decide on a male stripper cost. Price may vary depending on the package your group selected – which means the type of show you want him to perform. Is a full monty show? Do you want one or two strippers?

Sometimes, the price may also differ depending on the chosen guys. Moreso, when travelling is involved, additional fees may also be applied. Other states may also charge a little bit higher price. Usually, the range starts from $250 and up.

High-quality performances come at a price but you will see the value of your money when you and your girlfriends have a good time and enjoying the best night you’ve ever been.

Pro tip: The best way to keep the cost of a male stripper low is to have your guests and attendees chip in. When you do, you will be surprised to know that it usually costs just a little less than a glass of wine.`,
  },
  {
    question: `
HOW MUCH DO MALE STRIPPERS EARN A YEAR?`,
    answer: `The male stripper’s monthly income is unpredictable and influenced by factors like the weather, national situation i.e. pandemic, number of people on the show, number of bookings, among others. But to enlighten you on this popular question, about $2-8k per month is about right for a steady, good night at a venue and private events.
Thanks to social media presence, people are starting to get interested in hiring strippers, coming into strip events, and booking private events. These are just a few ways how much a salary of a stripper can be affected, which mostly in a good way.`,
  },
  {
    question: `
IS STRIPPING WORTH THE MONEY?`,
    answer: `There are pros and cons of being a male stripper – just like any other job. But if you have a well-toned body, good looks, and you’re generally open to this line of work, we don’t see why you wouldn’t join this industry. Aside from having a huge source of income to pay for the bills, get decent food, pay debts and loans, and buy luxury items (which is a bonus!), there is nothing wrong in getting the money you worked hard for.

Money aside, there are also some perks included – you get to travel while working, drink on the job, enjoy your free time and allot it for self-improvement, you get a lot of fun doing your job, you meet people, build relationships, and improve your dancing skills. There’s a lot more actually, but to simply put – YES, it is worth every penny.

“We should get lap dances!” You’ve been talking about it with your girlfriends for a while now. You’re all excited, curious and oh, so nervous. The time has finally come, it’s your very first time, and you’re just not sure how it all works, what are the rules? Are there rules!? Is there anything you NEED to know before you experience what could be one of the most thrilling times of your life?

We’re here to help, today we will explore Lap Dance rules and etiquette, and everything in between. Here are the most common questions asked when it comes to lap dances;`,
  },
  {
    question: `
WHAT IS LAP DANCING?`,
    answer: `You’ve seen it mentioned in movies, you’ve heard about it through friends and work colleges, but you’re just not sure, what really constitutes a lap dance?
Lap dancing is a form of playful, cheeky, sexy, lighthearted entertainment involving a performer, generally in as sexy minimal costume who undresses for the client on and around their lap area. This is usually performed in strip venue, private lounges, personal places like condos or apartment upon request. There are various forms of Lap dances that vary depending on the performer and the client’s request. These are:
Partial Lap Dance
This is a lap dance that goes down to underwear or a G-string only, leaving a little to the imagination.
Full Lap Dance
This is a lap dance for those who want the whole package and usually involves the entertainer being nude.
Double Lap Dance
Usually for those that want to engage in the ultimate experience and have two performers at the same time. Also commonly performed for double birthday and twins.
Dessert Lap Dance
The dessert lap dance is a lap dance with a special ending, usually. Involving whipped cream and strawberries, which you can eat of the performer. This option is not for the faint-hearted.
Virtual Lap Dance
With the 2020 pandemic COVID-19, entertainers had to evolve the way of doing business with safe distance restrictions, offering online performance enjoyed remotely in the comfort of your own home.

Depending on the state where you are in, lap dances can go from non-contact to full-contact lap dances. Non-contact dance, as the name implies, does not allow touching with the strippers during their performances. Meanwhile, there are also venues who do full-contact lap dance where you are allowed and encouraged to do the touching while the entertainers perform.`,
  },
  {
    question: `
HOW IS A LAP DANCE PERFORMED?`,
    answer: `Lap dances are a choreographed performance, with premade music and sound effects ready to go, on the occasion some performers go rouge and perform to existing playing music or to special requests songs. With the music on, the dancer usually starts with strip teasing. The dancer will start to slowly undress the clothes (partly or completely) while swaying to a sexy groove. With proper timing, the performer will sit on your lap, do his dance moves and amaze you like never before! The dancer will move his butt in circles, side to side, grinding away but still being connected to you. If you want to see the most popular male stripper songs.`,
  },
  {
    question: `
WHAT DOES MALE STRIPPERGRAM INCLUDE?`,
    answer: `In short, a private male strip show will include a 15-20-minute pre-choreographed routine, in the costume of your choice. Touching is permitted with the guiding hand, meaning will get non-penetrative sexual contact with a professional performer. Be prepared to see a lot of grinding and twerking, you may even come eye to eye with your performer. If you’ve booked a private performance for a special event, your performer with primarily perform for your special guest with the rest of the party surrounding them is a circle formation. This doesn’t mean everyone else isn’t involved, it’s his job to make sure, everyone gets what they came for. The performer will mingle and interact with a variety of guests at the event.

A male strip show also commonly known as a male cabaret or male REVUE SHOW involves the performers performing on stage in front of huge crowds. A lap dance, in this case, is when a guest is invited to participate on stage with the performer and be a part of the show itself. Typically, a male performer will include 3 – 5 guests in their performance, at different times of their act showcasing their talent and there, oh so sexy physique.

Some MALE STRIP CLUBS venues offer a VIP lounge for you and your friends in the event you want an exclusive, uninterrupted lap dance from your selected hottie. Aside from a memorable experience, you get to be entertained by a talented expert with dancing and teasing while you chill and feast your eyes on a real beauty. What more could you possibly need?`,
  },
  {
    question: `
HOW LONG DO LAP DANCES LAST?`,
    answer: `For male lap dances performed in venues, that permit male performers a lap dance is generally 3 – 5 minutes in duration, this can be dependent on the music or track playing at the time. For male strip shows, on stage and live at an event a performance generally lasts 10 – 15 minutes for the set. The performer’s shows are pre-choreographed to a costume of choice, for example, policeman or fireman. The routine will include his entrance onto the stage in uniform, performing in character to the role, and then into the strip show. The show will have a mixture of various tracks, sound effects and go for up to 15 minutes for the set, the same applies for private bookings in the home or venue.`,
  },
  {
    question: `
WHAT DO YOU WEAR FOR A LAP DANCE?`,
    answer: `Most nightclubs have a specific dress code but you can wear practically anything you feel like wearing. For women, we recommend a nice, comfortable dress, or pants that fit your body. If you’re in your pants, performers can push your legs wide open (for some dance routines!) without the awkward feeling. And since you’re being considerate, avoid wearing fabric that might chafe the performer’s skin. Many performers often include a lift, flip or something you have never seen before, so we always recommend wearing underwear!

During the lap dance, the stripper will be up-close dancing around, and it is best that you both look and smell good. We don’t want him missing a few moves because he smells something bad from you, do we?`,
  },
  {
    question: `
HOW MUCH SHOULD YOU PAY FOR A LAP DANCE?`,
    answer: `Lap dance price varies depending on which venue you are, or which state you are in. We see in movies how patrons would spend a lot on lap dances, but how much should you pay for it, exactly? How expensive is a lap dance in real life? In Australia, the cheapest is $250 in the Melbourne and ADELAIDE for a call outstrip show. You get the performance, the music, the boom box and photos with the entertainer for safekeeping. Most other states charge $280 – $290 per show, per guy.`,
  },
  {
    question: `
CAN YOU TOUCH MALE STRIPPERS?`,
    answer: `It depends on what the venue offers and the country you are in. American strip venues generally offer non-contact lap dances. The best strip venues to go to are those in states where full-contact lap dances are allowed. Look for “almost haven” states or cities so you can get the most of what you paid for (*wink!)
In countries such as Australia, it’s common practice for guests to touch the performer with the guided hand, and this is not for the faint-hearted! Here are some other areas which we service and perform: MALE STRIPPERS GEELONG, MALE STRIPPERS IN WERRIBEE and male strippers Melton.`,
  },
  {
    question: `
WHAT IS LAPDANCE AND STRIP SHOW ETIQUETTE?`,
    answer: `Yes, just like in every service providing industry, there is an etiquette to follow. Below are some unwritten rules to prepare you with your lap dancing encounter. These will guide you in having a non-awkward, fun, experience in strip venues or private events.

Don’t ask the strippers when they get off
No matter how tempting it is, you have to understand the limits. Even if things get steamy, and you feel a connection with the dancer, resist the urge to ask the stripper. They are performers, not sex-workers who would never bat an eye for a sex offer. So, hold your horses, and enjoy the lap dance for what it is without offending the performers. Their job is to provide you with light-hearted, cheeky entertainment.
Do not wait until they remind you to pay
For private events, there is a designated duration for a strip show. Have you and your friends prepare the cash in advance, and when the song or the performance is over, hand in the money carefully, we usually recommend paying upfront so you can get on with the FUN No matter how wasted you get, it’s still up to you to keep the focus and hold your end of the bargain. Don’t wait up for a reminder to avoid the embarrassment.
Practice generosity – tip at your heart’s content
No matter which industry, it is customary to tip a person from the service that was provided. If you’re hosting an adult party, it is best practice to give tips especially if you had an enjoyable experience. After all, a good performance and skill full talent do not happen overnight.
Be cool and keep it professional
Who wouldn’t date a gorgeous body, with a charming face, and bubbly personality? No one, right? But no matter how much you really wanted to get on with this guy, you have to keep your pants on, girl! Don’t try giving your number, or act non-professional as if you bought him. Be calm and keep your composure. Don’t act like a creep where you would get tons of pictures of the both of you, to look like you’re dating this guy. Just remember the boundaries and treat him with respect the same way you wanted to be treated.`,
  },
];

export default function Home() {
  return (
    <div className="bg-black h-vh">
      <MagicMenLayout>
        <HeroSectionHome />
      </MagicMenLayout>
      <main className="bg-black">
        <StripperCard />
        <LinkCard />
        <HensPartyPkg />
        <Partner />
        <Experience />
        <Faq
          faqs={faqs_data}
          title={
            'A Guide To Hiring A Male Entertainer: Secrets, Hints and Tips'
          }
        />
        <Faq
          faqs={faqs_data_two}
          title={`
What does a male entertainer do? Answers to your questions revealed`}
        />
        <HomeGallary />
      </main>
      <Footer />
    </div>
  );
}
