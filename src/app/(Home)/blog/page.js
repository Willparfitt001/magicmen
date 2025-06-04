import Enquire from '@/components/global/Enquire';
import Footer from '@/components/home/Footer';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
import CustomH1 from '@/components/home/heading';
import MagicMenLayout from '@/components/home/naviagation';

const news_data = [
  {
    link: '/',
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6180e18/www.magicmen.com.au/wp-content/uploads/Magic-Men-Hens-Party-Ideas-Gold-Coast-320x220.jpeg`,
    title: `TOP 10 HENS NIGHT IDEAS IN GOLD COAST`,
    desc: `Magic News TOP 10 HENS NIGHT IDEAS IN GOLD COAST The Gold Coast is one of the best places in Australia for a hens night party. There are all sorts of activities that you can do to celebrate a friend's last night as a single lady. To guide you along the way, we've compiled a […]`,
  },
  {
    link: '/',
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6180e18/www.magicmen.com.au/wp-content/uploads/bucks-hen-party-320x220.jpg`,
    title: `Covid Policy`,
    desc: `Magic Men is back! Let's bring the magic back to your parties. Great news ladies and gents! We are opening our business for Melbourne and Sydney. We are beyond grateful for your continued support and loyalty to Magic Men and our services. We could not have done it without you. With this, we are delighted to […]`,
  },
  {
    link: '/',
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6180e18/www.magicmen.com.au/wp-content/uploads/bucks-hen-party-320x220.jpg`,
    title: `Hens Party Sydney`,
    desc: `Planning a hens night in Sydney? You've come to the right place! We have all the information you need to plan your bestie's hen party. We've put together 50 hens party ideas for the big night, ranging from a chill night out to the raunchiest of strip shows. And if that's not enough, we've also […]`,
  },
  {
    link: '/',
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6180e18/www.magicmen.com.au/wp-content/uploads/Magic-Men-Hens-Party-Ideas-Gold-Coast-320x220.jpeg`,
    title: `Top 10 Hens Night Ideas in Gold Coast`,
    desc: `Hens party Gold coast Top 10 Hens Night Party Ideas in Gold Coast The Gold Coast is one of the best places in Australia for a hens night party. There are all sorts of activities that you can do to celebrate a friend's last night as a single lady. To guide you along the way, […]`,
  },
  {
    link: '/',
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-6180e18/www.magicmen.com.au/wp-content/uploads/Magic-Men-Hens-Party-Ideas-Brisbane-320x220.jpeg`,
    title: `Top 50 Best Hens Party Ideas in Brisbane`,
    desc: `Hens Party Brisbane Hens Nights are meant to be fun and exciting. It's a milestone in a woman's life. If you're organizing a Hens Night for a friend, you have an unspoken duty to make the party a truly unforgettable one. Fortunately for you, we have compiled 50 of the best ideas for a hens […]`,
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen text-gray-50 ">
      <MagicMenLayout height="30vh">
        <GeneralHeroSection />
      </MagicMenLayout>

      <main className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <CustomH1 text={`   Magic Men News & Updates`}></CustomH1>
          {/* <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div> */}
        </div>

        {/* Blog Grid */}
        <div className="flex flex-col gap-4 justify-center items-center w-full mx-auto p-4 md:w-4/5">
          {news_data.map((article, i) => (
            <BlogCard
              key={i}
              data={article}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function BlogCard({ data }) {
  return (
    <article className="group rounded-2xl flex flex-wrap gap-2 items-center text-gray-50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative overflow-hidden w-full md:w-1/4 aspect-[4/3]">
        <img
          src={data?.image}
          alt={data?.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-2 w-full md:w-1/2">
        {/* Title */}
        <h2 className="text-xl font-semibold  mb-3 line-clamp-2 leading-tight">
          <a
            href={data?.link}
            className="hover:text-purple-600 text-yellow-500 transition-colors duration-200 block">
            {data?.title?.trim()}
          </a>
        </h2>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-6 line-clamp-3">
          {data?.desc?.length > 150
            ? `${data?.desc?.substring(0, 150)}...`
            : data?.desc}
        </p>

        {/* Read More Link */}
        <div className="flex items-center text-center justify-between">
          <a
            href={data?.data?.link}
            className="flex items-center  uppercase text-white text-sm  border border-purple-600 w-fit px-6 text-center hover:bg-white hover:text-black rounded-full font-bold p-2 transition-colors duration-200 group">
            Read more
          </a>
        </div>
      </div>

      {/* Subtle bottom accent */}
      {/* <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div> */}
    </article>
  );
}
