'use client';
import { FaRegStar } from 'react-icons/fa6';
import { IoMdStar } from 'react-icons/io';

const list_one = [
  {
    label: 'Hens night Melbourne',
    link: '/',
  },
  {
    label: 'Girls night out',
    link: '',
  },
  {
    label: 'Bucks night',
    link: '',
  },
  {
    label: 'Baby shower',
    link: '',
  },
  {
    label: 'Life drawing',
    link: '',
  },
];
const list_two = [
  {
    label: 'Hens night party',
    link: '/',
  },
  {
    label: 'Birthday Parties',
    link: '',
  },
  {
    label: 'Ladies’ night',
    link: '',
  },
  {
    label: 'Product launch and expos',
    link: '',
  },
];

export default function Experience({ location = '' }) {
  return (
    <div className="text-white my-11 p-6 md:w-4/5 mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 items-center">
        <h1 className="font-alex-brush text-xl md:text-4xl">
          Magic Men {location}
        </h1>
        <p className="text-yellow-500/90">Experience</p>
      </div>

      <div className="items-stretch flex md:flex-row flex-col gap-11">
        {/*Image side*/}
        <div className="flex flex-row items-stretch justify-center mx-auto text-center p-2  w-24 md:w-72 mt-4 md:flex-col gap-2">
          <img
            src={
              'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-4112ae0/www.magicmen.com.au/wp-content/uploads/logo-0011-300x224.png'
            }
          />
          <img
            src={
              'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-4112ae0/www.magicmen.com.au/wp-content/uploads/award00002.jpg'
            }
          />
          <img
            src={
              'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-4112ae0/www.magicmen.com.au/wp-content/uploads/award00003.jpg'
            }
          />
        </div>
        {/*text side*/}
        <div className="w-full md:w-4/5 flex flex-col gap-6 text-sm">
          <p>
            Whether you’re celebrating a birthday, hosting a hens night,
            bachelorette party or just having a fun girls night in Melbourne,
            our hot and hunky male strippers and cheeky topless waiters are sure
            to make your ladies night one to remember. The Magic Men can visit
            suites, private function venues and residences around Melbourne for
            private shows just for you and your guests.
          </p>
          <p>
            Each Magic Man has the body, the moves and the charisma to excite
            and delight – delivering more than just a set routine. Our male
            strippers are also talented dancers and will tailor a smart and sexy
            show to perfectly suit your tastes. Different shows are available to
            fit with the theme of any hens party.
          </p>

          <p>
            So if you’re looking for the best male strippers has to offer and
            cutest topless waiters to add a bit of magic into your next event,
            contact us today! Make your party a night to remember. We guarantee
            unforgettable shows to spice up your:
          </p>

          <ul className="flex flex-wrap items-center gap-4 md:gap-11">
            <div>
              {list_one.map((d, i) => {
                return (
                  <List
                    list={d}
                    key={i}
                  />
                );
              })}
            </div>
            <div>
              {list_two.map((d, i) => {
                return (
                  <List
                    list={d}
                    key={i}
                  />
                );
              })}
            </div>
          </ul>
          <p>
            Check out the hot show packages and profiles of the Magic Men via
            the buttons below. Trust us, they’re even hotter in real life!
          </p>
          <p className="leading-relaxed tracking-wide">
            Country girls! Our hunks love to travel, and will happily head out
            across Victoria to make sure you and your friends can enjoy all the
            sizzle of a male strip show, no matter where you are.
          </p>
        </div>
      </div>
    </div>
  );
}

function List({ list }) {
  return (
    <li className="flex items-center gap-2 uppercase text-lg font-bold">
      <span>
        <IoMdStar
          className="text-fuchsia-600 "
          size={11}
        />
      </span>
      <a href={list?.link}>{list?.label}</a>
    </li>
  );
}
