import { MdFlight } from 'react-icons/md';
import { IoTicketOutline } from 'react-icons/io5';
import { GoGift } from 'react-icons/go';
import { RiPoliceBadgeLine } from 'react-icons/ri';
import { GiBowTieRibbon } from 'react-icons/gi';
import { GiBigDiamondRing } from 'react-icons/gi';

const HeroSection = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: 'url(/images/josh_bg_main.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundColor: 'rgba(88, 28, 135, 0.6)',
        backgroundBlendMode: 'multiply',
      }}>
      <div className="container mx-auto px-4 relative  z-10 py-6 lg:py-16">
        {/* Performers Row */}
        <div className="flex justify-center bg-transparent">
          <div className="relative w-full max-w-4xl">
            <div className="h-64 lg:h-96 rounded-lg flex items-end justify-center overflow-hidden">
              <img
                src="/images/josh_bg_main.jpg"
                alt="Magic Men Performers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Category Buttons */}
        <CategoryGrid />

        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-transparent text-white border border-purple-500 font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-slate-950 hover:shadow-sm hover:border-none hover:shadow-gray-100 transition-colors">
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

const CategoryButton = ({ Icon, title, subtitle }) => {
  return (
    <div className="bg-transparent rounded-lg p-3 mt-11 flex flex-col items-center justify-center border border-purple-600 hover:border-yellow-400 transition-colors">
      <div className=" rounded-full p-2 mb-2">
        <span className="text-xs text-yellow-500">
          <Icon size={50} />
        </span>
      </div>
      <div className="text-center">
        <div className="text-white text-sm font-semibold">{title}</div>
        <div className="text-yellow-400 text-sm">{subtitle}</div>
      </div>
    </div>
  );
};
const CategoryGrid = () => {
  const categories = [
    { Icon: RiPoliceBadgeLine, title: 'MALE', subtitle: 'STRIPPERS' },
    { Icon: IoTicketOutline, title: 'STRIP', subtitle: 'CLUB' },
    { Icon: GiBigDiamondRing, title: 'HENS', subtitle: 'PACKAGES' },
    { Icon: GiBowTieRibbon, title: 'TOPLESS', subtitle: 'WAITERS' },
    { Icon: MdFlight, title: 'TOURING', subtitle: 'DATES' },
    { Icon: GoGift, title: 'ONLINE', subtitle: 'STORE' },
  ];

  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4 mt-6 max-w-4xl mx-auto">
      {categories.map((category, index) => (
        <CategoryButton
          key={index}
          Icon={category.Icon}
          title={category.title}
          subtitle={category.subtitle}
        />
      ))}
    </div>
  );
};

export default HeroSection;
