'use client';
const card_data = [
  {
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-4112ae0/www.magicmen.com.au/wp-content/uploads/5J0A0400-768x512.jpg`,
    title: 'Dinner & Show',
    desc: 'Our most popular party favourite. Get our all-inclusive drinks and show package. Our best value for money package for any group size.',
    link: 'https://www.magicmen.com.au/hens-party/#pkg3',
  },
  {
    bg: 'md:bg-gray-900',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-4112ae0/www.magicmen.com.au/wp-content/uploads/IMG_1295-768x512.jpg',
    title: 'Drink & Show',
    desc: 'Our most popular party favourite. Get our all-inclusive drinks and show package. Our best value for money package for any group size.',
    link: 'https://www.magicmen.com.au/hens-party/#pkg3',
  },
  {
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-4112ae0/www.magicmen.com.au/wp-content/uploads/limo-show-768x513.jpg',
    title: 'Limo & Show',
    desc: 'Our most popular party favourite. Get our all-inclusive drinks and show package. Our best value for money package for any group size.',
    link: 'https://www.magicmen.com.au/hens-party/#pkg3',
  },
];
export default function HensPartyPkg() {
  return (
    <div className="bg-black min-h-full text-white mt-24 my-11 pb-11">
      <h1 className="text-center text-xl mb-3 md:text-4xl font-alex-brush">
        Hens Birthdays Packages
      </h1>
      <span className="flex justify-center">
        <a
          className="flex w-fit items-center justify-center uppercase my-6 bg-fuchsia-600 text-white py-2 px-4 rounded-full hover:bg-fuchsia-800 transition-colors"
          href="hens">
          See all our Packages
        </a>
      </span>

      <div className="mx-auto">
        <div className="flex flex-col md:flex-row md:w-4/5 w-full mx-auto justify-center items-stretch gap-4">
          {card_data.map((d, i) => {
            return (
              <Card
                key={i}
                data={d}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Card({ data }) {
  return (
    <div
      className={`${data.bg} mt-11 p-6 rounded-md flex flex-col justify-center`}>
      <div className="border border-yellow-600">
        <img src={data.image} />
      </div>
      <h2 className="uppercase text-2xl font-bold my-6 font-roboto-mono text-center">
        {data.title}
      </h2>
      <p className="tracking-wide leading-relaxed">{data.desc}</p>

      <button className="flex justify-center mt-11 items-center text-center">
        <a
          className="flex w-fit items-center inline-block mx-auto text-center justify-center uppercase my-6 bg-transparent border border-fuchsia-600

 text-white py-2 px-4 rounded-full hover:bg-white hover:text-black font-semibold text-sm transition-colors"
          href={data.link}>
          View More
        </a>
      </button>
    </div>
  );
}
