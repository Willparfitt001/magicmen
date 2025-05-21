'use client';
import React, { useState } from 'react';
import { Menu, Phone, Calendar, MapPin, ChevronDown } from 'lucide-react';
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
    const scrollSpeed = 50;
    const timer = setInterval(() => {
      setPosition((prev) => (prev - 1) % -300);
    }, scrollSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-pink-200 text-black py-1 overflow-hidden font-mono w-full">
      <div
        className="whitespace-nowrap text-xs font-medium"
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

    { name: 'SYDNEY', link: '/sydney' },
    { name: 'MELBOURNE', link: '/melbourne' },
    { name: 'BRISBANE', link: '/brisbane' },
    { name: 'GOLD COAST', link: '/gold-coast' },
    { name: 'PERTH', link: '/perth' },
    { name: 'ADELAIDE', link: '/adelaide' },
    { name: 'HOBART', link: '/hobart' },
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
const MobileNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (menuName) => {
    if (activeSubmenu === menuName) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menuName);
    }
  };

  // Navigation items with their submenus
  const navItems = [
    { name: 'HOME', link: '/' },
    { name: 'HOME VISIT', link: '/home-visit' },
    {
      name: 'THE MEN',
      link: '/the-men',
      submenu: [
        { name: 'All Performers', link: '/performers' },
        { name: 'Featured Dancers', link: '/featured' },
        { name: 'New Talent', link: '/new-talent' },
      ],
    },
    {
      name: 'STAGE SHOW',
      link: '/stage-show',
      submenu: [
        { name: 'Show Details', link: '/show-details' },
        { name: 'Performance Schedule', link: '/schedule' },
        { name: 'VIP Packages', link: '/vip-packages' },
      ],
    },
    { name: 'HENS PARTY', link: '/hens-party' },
    { name: 'TOURING DATES', link: '/touring-dates' },
    { name: 'STORE', link: '/store' },
    { name: 'FAQ', link: '/faq' },
    { name: 'CONTACT', link: '/contact' },
  ];

  return (
    <div className="lg:hidden w-full bg-slate-900 sticky top-0 z-50">
      <div className="grid grid-cols-3 text-center">
        <button
          className="py-3 bg-green-500 text-white font-semibold flex flex-col items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu size={20} />
          <span className="text-xs mt-1">MENU</span>
        </button>
        <button className="py-3 bg-green-500 text-white font-semibold flex flex-col items-center justify-center">
          <Calendar size={20} />
          <span className="text-xs mt-1">ENQUIRE</span>
        </button>
        <button className="py-3 bg-green-500 text-white font-semibold flex flex-col items-center justify-center">
          <Phone size={20} />
          <span className="text-xs mt-1">CALL</span>
        </button>
      </div>

      <div className="flex justify-center my-4">
        <LocationDropdown isDesktop={false} />
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="bg-rose-950 border-t border-rose-800 overflow-hidden">
          <div className="p-4">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="mb-3">
                <div
                  className="flex justify-between items-center py-2 border-b border-rose-800"
                  onClick={() => item.submenu && toggleSubmenu(item.name)}>
                  <a
                    href={item.link}
                    className="text-white font-medium">
                    {item.name}
                  </a>
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={`text-white transition-transform ${
                        activeSubmenu === item.name
                          ? 'transform rotate-180'
                          : ''
                      }`}
                    />
                  )}
                </div>

                {/* Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.link}
                        className="block py-2 text-sm text-yellow-400 hover:text-white">
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
const DesktopNavigation = ({ phoneNumber }) => {
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
        { name: 'Performance Schedule', link: '/schedule' },
        { name: 'VIP Packages', link: '/vip-packages' },
      ],
    },
    { name: 'HENS PARTY', link: '/hens-party' },
    { name: 'TOURING SHOW', link: '/touring-show' },
    { name: 'STORE', link: '/store' },
    { name: 'FAQ', link: '/faq' },
    { name: 'CONTACT', link: '/contact' },
  ];

  return (
    <header className="hidden lg:block w-full bg-slate-900 text-white sticky top-0 z-50 ">
      <div className="container mx-auto">
        {/* Announcement Bar */}
        {/* <div className="bg-rose-900 text-center py-1 text-white">
          <span className="text-sm font-semibold">
            HEN GET FREE ENTRY FOR GROUP BOOKINGS *T&CS APPLY
          </span>
        </div> */}

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
                        className="block text-center px-4 py-2 text-sm text-white  font-semibold uppercase  hover:text-yellow-400">
                        {subItem.name}
                        <hr className="" />
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

            <button className="bg-green-500 text-black text-sm font-semibold px-2 py-2 rounded-full hover:bg-green-600 transition-colors">
              ENQUIRE NOW
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Main Layout Component
export default function MagicMenLayout({ children, height = 'min-h-screen' }) {
  // Phone number display
  const phoneNumber = '1300 624 426';

  // Ticker messages
  const tickerMessages = ['HEN get FREE ENTRY for group bookings *T&Cs apply'];

  return (
    <div className={`flex flex-col ${height} bg-black`}>
      {/* Ticker for all screen sizes */}
      <ScrollingTicker messages={tickerMessages} />

      {/* Mobile Navigation */}
      <MobileNavigation />

      {/* Desktop Header */}
      <DesktopNavigation phoneNumber={phoneNumber} />

      {/* Hero Section */}
      {children}
    </div>
  );
}
