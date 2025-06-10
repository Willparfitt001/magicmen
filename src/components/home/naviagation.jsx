'use client';
import React, { useState, useEffect } from 'react';
import { Menu, Phone, Calendar, MapPin, ChevronDown, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { MdFlight } from 'react-icons/md';
import { IoTicketOutline } from 'react-icons/io5';
import { GoGift } from 'react-icons/go';
import { RiPoliceBadgeLine } from 'react-icons/ri';
import { GiBowTieRibbon } from 'react-icons/gi';
import { GiBigDiamondRing } from 'react-icons/gi';

// ScrollingTicker Component
export const ScrollingTicker = ({ messages }) => {
  const [position, setPosition] = useState(0);

  const fullText = messages.join('   •   ');

  React.useEffect(() => {
    const scrollSpeed = 5;
    const timer = setInterval(() => {
      setPosition((prev) => (prev - 1) % -300);
    }, scrollSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-pink-200 text-black py-1 overflow-hidden font-roboto-mono font-bold text-xl w-full">
      <div
        className="whitespace-nowrap  font-medium"
        style={{
          transform: `translateX(${position}px)`,
          display: 'inline-block',
          width: 'max-content',
        }}>
        {fullText}
      </div>
    </div>
  );
};

// LocationDropdown Component
const LocationDropdown = ({ isDesktop }) => {
  const [isOpen, setIsOpen] = useState(false);

  const locations = [
    { name: 'LOCATIONS', link: '/' },

    { name: 'SYDNEY', link: '#' },
    { name: 'MELBOURNE', link: '#' },
    { name: 'BRISBANE', link: '#' },
    { name: 'GOLD COAST', link: '#' },
    { name: 'PERTH', link: '#' },
    { name: 'ADELAIDE', link: '#' },
    { name: 'HOBART', link: '#' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={isDesktop ? () => setIsOpen(true) : undefined}
        onMouseLeave={isDesktop ? () => setIsOpen(false) : undefined}
        className={`flex items-center ${
          isDesktop ? 'px-4 py-2' : 'px-4 py-2'
        } text-white border border-purple-500 rounded-full hover:bg-rose-800 transition-colors`}>
        <MapPin
          size={16}
          className="mr-2"
        />
        <span>LOCATION</span>
        <ChevronDown
          size={16}
          className={`ml-2 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute top-full left-0 mt-1 w-48 bg-slate-950 rounded-lg shadow-lg z-50  border border-rose-800`}
          onMouseEnter={isDesktop ? () => setIsOpen(true) : undefined}
          onMouseLeave={isDesktop ? () => setIsOpen(false) : undefined}>
          {locations.map((location, index) => (
            <a
              key={index}
              href={location.link}
              className="flex items-center px-4 py-2 text-sm text-white hover:bg-green-600 hover:text-white">
              <MapPin
                size={14}
                className="mr-2 text-white"
              />
              {location.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

// MobileNavigation Component
// export const MobileNavigation = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState(null);

//   const toggleSubmenu = (menuName) => {
//     if (activeSubmenu === menuName) {
//       setActiveSubmenu(null);
//     } else {
//       setActiveSubmenu(menuName);
//     }
//   };

//   // Navigation items with their submenus
//   const navItems = [
//     { name: 'HOME', link: '/' },
//     { name: 'HOME VISIT', link: '/shows' },
//     {
//       name: 'THE MEN',
//       link: '#',
//       submenu: [
//         { name: 'MALE STRIPPERS', link: '/male-strippers' },
//         { name: 'TOPLESS WAITER', link: '/topless-waiters' },
//       ],
//     },
//     {
//       name: 'STAGE SHOW',
//       link: '#',
//       submenu: [
//         { name: 'Our strip club', link: '/shows/male-strip-clubs' },
//         { name: 'buy tickets', link: '#' },
//         { name: 'latest gallary', link: '/latest-gallary' },
//       ],
//     },
//     { name: 'HENS PARTY', link: '/hens-party' },
//     { name: 'TOURING SHOW', link: '/touring-show' },
//     { name: 'STORE', link: '/online-shop' },
//     {
//       name: 'FAQ',
//       link: '/faq',
//       submenu: [
//         { name: 'faq. private shows', link: '/faq' },
//         { name: 'faq. stage show', link: '/faq-male-strip-club' },
//         { name: 'terms and conditions', link: '/terms-conditions' },
//       ],
//     },
//     { name: 'CONTACT', link: '/contact' },
//   ];

//   return (
//     <div className="lg:hidden w-full bg-gradient-to-r from-black/50 to-[rgba(0,0,0,0.9)] font-roboto-mono sticky top-0 z-50">
//       <div className="grid grid-cols-3 gap-4 text-center p-4">
//         <button
//           className="py-3 bg-green-500 text-slate-900 rounded-md font-bold flex flex-col items-center justify-center"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//           <Menu size={20} />
//           <span className="text-xs mt-1">MENU</span>
//         </button>
//         <button className="py-3 bg-green-500 text-slate-900 rounded-md font-bold flex flex-col items-center justify-center">
//           <Calendar size={20} />
//           <span className="text-xs mt-1">ENQUIRE</span>
//         </button>
//         <button className="py-3 bg-green-500 text-slate-900 rounded-md font-bold flex flex-col items-center justify-center">
//           <Phone size={20} />
//           <span className="text-xs mt-1">CALL</span>
//         </button>
//       </div>

//       <div className="flex justify-center my-4">
//         <LocationDropdown isDesktop={false} />
//       </div>

//       {/* Mobile menu dropdown */}
//       {isMobileMenuOpen && (
//         <div
//           className={`fixed top-0 left-0 h-full w-4/5 bg-gray-900 border-r border-gray-500 z-50 transform transition-transform duration-300 ${
//             isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}>
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-white text-2xl font-bold font-roboto-mono hover:text-red-600 mr-2 p-4">
//             X
//           </button>
//           <div className="p-4 mt-20">
//             {navItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-3">
//                 <div
//                   className="flex justify-between items-center py-2 border-b border-gray-500"
//                   onClick={() => item.submenu && toggleSubmenu(item.name)}>
//                   <a
//                     href={item.link}
//                     className="text-white font-medium">
//                     {item.name}
//                   </a>
//                   {item.submenu && (
//                     <ChevronDown
//                       size={16}
//                       className={`text-white transition-transform ${
//                         activeSubmenu === item.name
//                           ? 'transform rotate-180'
//                           : ''
//                       }`}
//                     />
//                   )}
//                 </div>

//                 {/* Submenu */}
//                 {item.submenu && activeSubmenu === item.name && (
//                   <div className="pl-4 mt-2 space-y-2">
//                     {item.submenu.map((subItem, subIndex) => (
//                       <a
//                         key={subIndex}
//                         href={subItem.link}
//                         className="block py-2 text-sm text-yellow-400 hover:text-white">
//                         {subItem.name}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

export const MobileNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10); // you can adjust the threshold
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuOpen(false);
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (menuName) => {
    if (activeSubmenu === menuName) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menuName);
    }
  };

  const handleMenuItemClick = (item) => {
    if (!item.submenu) {
      setIsMobileMenuOpen(false);
      setActiveSubmenu(null);
    }
  };

  // Navigation items with their submenus
  const navItems = [
    { name: 'HOME', link: '/' },
    { name: 'HOME VISIT', link: '/shows' },
    {
      name: 'THE MEN',
      link: '#',
      submenu: [
        { name: 'MALE STRIPPERS', link: '/male-strippers' },
        { name: 'TOPLESS WAITER', link: '/topless-waiters' },
      ],
    },
    {
      name: 'STAGE SHOW',
      link: '#',
      submenu: [
        { name: 'Our strip club', link: '/shows/male-strip-clubs' },
        { name: 'buy tickets', link: '#' },
        { name: 'latest gallary', link: '/latest-gallary' },
      ],
    },
    { name: 'HENS PARTY', link: '/hens-party' },
    { name: 'TOURING SHOW', link: '/touring-show' },
    { name: 'STORE', link: '/online-shop' },
    {
      name: 'FAQ',
      link: '/faq',
      submenu: [
        { name: 'faq. private shows', link: '/faq' },
        { name: 'faq. stage show', link: '/faq-male-strip-club' },
        { name: 'terms and conditions', link: '/terms-conditions' },
      ],
    },
    {
      name: 'CONTACT',
      link: '/contact',
      submenu: [
        { name: 'about us', link: '/about-us' },
        { name: 'make a booking', link: '/payment' },
        { name: 'employment', link: '/employment' },
        { name: 'contact us', link: '/contact-us' },
      ],
    },
  ];

  return (
    <div className="lg:hidden w-full  font-roboto-mono sticky top-0 z-50 border-b border-slate-700/50">
      {/* Main action buttons */}
      <div className="grid grid-cols-3 gap-3 p-4">
        <button
          className="group relative py-2 bg-green-500  text-slate-900 rounded-xl font-bold flex flex-col items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu
            size={20}
            className="mb-1 group-hover:rotate-180 transition-transform duration-300"
          />
          <span className="text-xs tracking-wide">MENU</span>
        </button>

        <a
          href={'/contact-us'}
          className="group relative  py-2 bg-green-500 hover:to-green-700 text-slate-900 rounded-xl font-bold flex flex-col items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg">
          <Calendar
            size={20}
            className="mb-1 group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-xs tracking-wide">ENQUIRE</span>
        </a>

        <a
          href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
          className=" group relative py-2 bg-green-500 hover:to-green-700 text-slate-900 rounded-xl font-bold flex flex-col items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg">
          <Phone
            size={20}
            className="mb-1 group-hover:rotate-12 transition-transform duration-300"
          />
          <span className="text-xs tracking-wide">CALL</span>
        </a>
      </div>

      {/* Location dropdown */}
      {!isScrolled && (
        <div className="flex justify-center pb-4">
          <LocationDropdown isDesktop={false} />
        </div>
      )}

      {/* Mobile menu overlay and sidebar */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={handleOverlayClick}>
          {/* Sidebar menu */}
          <div
            className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-600/50 shadow-2xl transform transition-transform duration-300 ease-out ${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
            {/* Header with close button */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700/50 bg-slate-900/50">
              <h2 className="text-xl font-bold text-white tracking-wide">
                MENU
              </h2>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setActiveSubmenu(null);
                }}
                className="group p-2 rounded-full bg-slate-800 hover:bg-red-600 text-white transition-all duration-200 hover:scale-110 active:scale-95">
                <X
                  size={20}
                  className="group-hover:rotate-90 transition-transform duration-200"
                />
              </button>
            </div>

            {/* Navigation items */}
            <div className="flex-1 overflow-y-auto py-4">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="mb-2 mx-4">
                  <div
                    className="group flex justify-between items-center py-3 px-4 rounded-lg hover:bg-slate-800/50 transition-all duration-200 cursor-pointer"
                    onClick={() => {
                      handleMenuItemClick(item);
                      if (item.submenu) {
                        toggleSubmenu(item.name);
                      }
                    }}>
                    <a
                      href={item.link}
                      className="text-white font-medium tracking-wide group-hover:text-emerald-400 transition-colors duration-200"
                      onClick={(e) => {
                        if (item.submenu) {
                          e.preventDefault();
                        }
                      }}>
                      {item.name}
                    </a>
                    {item.submenu && (
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 group-hover:text-emerald-400 transition-all duration-300 ${
                          activeSubmenu === item.name
                            ? 'transform rotate-180 text-emerald-400'
                            : ''
                        }`}
                      />
                    )}
                  </div>

                  {/* Submenu with smooth animation */}
                  {item.submenu && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        activeSubmenu === item.name
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}>
                      <div className="pl-6 pr-4 py-2 space-y-1">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.link}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActiveSubmenu(null);
                            }}
                            className="group block py-2 px-3 text-sm text-slate-300 hover:text-emerald-400 hover:bg-slate-800/30 rounded-md transition-all duration-200 capitalize">
                            <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">
                              {subItem.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-700/50 bg-slate-900/50">
              <div className="text-xs text-slate-400 text-center">
                Tap outside to close
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
// StripClubMenu Component
const StripClubMenu = ({ isOpen }) => {
  return isOpen ? (
    <div className="absolute top-full left-0 mt-1 w-48 bg-rose-950 rounded shadow-lg z-50 py-1 border border-rose-800">
      <a
        href="/our-strip-club"
        className="block px-4 py-2 text-sm text-white hover:bg-rose-800 hover:text-yellow-400">
        OUR STRIP CLUB
      </a>
      <a
        href="/buy-tickets"
        className="block px-4 py-2 text-sm text-white hover:bg-rose-800 hover:text-yellow-400">
        BUY TICKETS
      </a>
      <a
        href="/latest-gallery"
        className="block px-4 py-2 text-sm text-white hover:bg-rose-800 hover:text-yellow-400">
        LATEST GALLERY
      </a>
    </div>
  ) : null;
};

// DesktopNavigation Component
export const DesktopNavigation = ({ phoneNumber }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Navigation items with their submenus - same structure as mobile
  const navItems = [
    { name: 'HOME', link: '/' },
    { name: 'HOME VISIT', link: '/shows' },
    {
      name: 'THE MEN',
      link: '#',
      submenu: [
        { name: 'MALE STRIPPERS', link: '/male-strippers' },
        { name: 'TOPLESS WAITER', link: '/topless-waiters' },
      ],
    },
    {
      name: 'STAGE SHOW',
      link: '#',
      submenu: [
        { name: 'Our strip club', link: '/shows/male-strip-clubs' },
        { name: 'buy tickets', link: '#' },
        { name: 'latest gallary', link: '/latest-gallary' },
      ],
    },
    { name: 'HENS PARTY', link: '/hens-party' },
    { name: 'TOURING SHOW', link: '/touring-show' },
    { name: 'STORE', link: '/online-shop' },
    {
      name: 'FAQ',
      link: '/faq',
      submenu: [
        { name: 'faq. private shows', link: '/faq' },
        { name: 'faq. stage show', link: '/faq-male-strip-club' },
        { name: 'terms and conditions', link: '/terms-conditions' },
      ],
    },
    {
      name: 'CONTACT',
      link: '/contact-us',
      submenu: [
        { name: 'about us', link: '/about-us' },
        { name: 'make a booking', link: '/payment' },
        { name: 'employment', link: '/employment' },
        { name: 'contact us', link: '/contact-us' },
      ],
    },
    ,
  ];

  return (
    <header className="hidden lg:block w-full text-sm bg-slate-900 text-white sticky top-0 z-50 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2 px-4">
          {/* Location Selector */}
          <LocationDropdown isDesktop={true} />

          {/* Main Navigation */}
          <nav className="flex space-x-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}>
                <a
                  href={item.link}
                  className="text-xs  text-gray-100 hover:text-white  border-r border-fuchsia-800 px-1 inline-block">
                  {item.name}
                  {item.submenu && (
                    <ChevronDown
                      size={14}
                      className="inline ml-1"
                    />
                  )}
                </a>

                {/* Dropdown Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute p-3 top-full left-0 mt-1 w-48 text-center bg-black rounded shadow-lg z-50 border border-purple-500 transition-colors">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.link}
                        className="block p-2 text-xs text-white  font-semibold uppercase  hover:text-yellow-400">
                        {subItem.name}
                        {subIndex === item.submenu.length - 1 ? (
                          ''
                        ) : (
                          <hr className="text-gray-900 h-1 my-2" />
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Phone and CTA */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-1 mr-2">
                <Phone
                  size={16}
                  className="text-white"
                />
              </div>
              <span className="text-white font-semibold">{phoneNumber}</span>
            </div>

            <a
              href="/contact-us"
              className="bg-green-500 text-black text-sm font-semibold px-2 py-2 rounded-full hover:bg-green-600 transition-colors">
              ENQUIRE NOW
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

// Main Layout Component
export default function MagicMenLayout({ children, height = 'min-h-screen' }) {
  return (
    <div className={`flex flex-col ${height} bg-black`}>
      {/* Hero Section */}
      {children}
    </div>
  );
}
