'use client';
import { useState, useEffect } from 'react';
import { MdFlight } from 'react-icons/md';
import { IoTicketOutline } from 'react-icons/io5';
import { GoGift } from 'react-icons/go';
import { RiPoliceBadgeLine } from 'react-icons/ri';
import { GiBowTieRibbon } from 'react-icons/gi';
import { GiBigDiamondRing } from 'react-icons/gi';

export default function ServiceTable() {
  // Example data structure for services
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'TOPLESS WAITER',
      price: '$100',
      duration: '1 hour',
      description: '2 hours minimum. Hire hottest hunks to host your party.',
      icon: GiBowTieRibbon,
    },
    {
      id: 2,
      name: 'FULL OR PARTIAL STRIP SHOW',
      price: '$280',
      duration: '15 - 20 minutes',
      description:
        'Exciting, cheeky fun, sexy entertainment. Choose to have your Magic Men do a light tease or experience the full show.',
      icon: RiPoliceBadgeLine,
    },
    {
      id: 3,
      name: 'DOUBLE TROUBLE SHOW',
      price: '$560',
      duration: '30 - 40 minutes',
      description:
        'Customise it for your party; You can choose to have one stripper at a time or BOTH at the same time! Highly interactive and entertaining.',
      icon: RiPoliceBadgeLine,
    },
    {
      id: 4,
      name: 'BASIC COMBO',
      price: '$480',
      duration: '2 hr Waiter\n15-20min show',
      description: '1 Topless Waiter\n1 Stripper',
      icon: RiPoliceBadgeLine,
    },

    {
      id: 5,
      name: 'BASIC COMBO',
      price: '$480',
      duration: '2 hr Waiter\n15-20min show',
      description: '1 Topless Waiter\n1 Stripper',
      icon: RiPoliceBadgeLine,
    },
    {
      id: 6,
      name: 'BASIC COMBO',
      price: '$480',
      duration: '2 hr Waiter\n15-20min show',
      description: '1 Topless Waiter\n1 Stripper',
      icon: RiPoliceBadgeLine,
    },
    {
      id: 7,
      name: 'BASIC COMBO',
      price: '$480',
      duration: '2 hr Waiter\n15-20min show',
      description: '1 Topless Waiter\n1 Stripper',
      icon: RiPoliceBadgeLine,
    },
  ]);

  // Safe approach to detect client-side viewport width
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only run on client-side
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to handle booking
  const handleBookNow = (serviceId) => {
    console.log(`Booking service with ID: ${serviceId}`);
    // Add your booking logic here
  };

  return (
    <div className="w-full">
      {/* Desktop View Table */}
      <div className={`${isMobile ? 'hidden' : 'block'} overflow-hidden `}>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="p-4 text-left border-r border-gray-700">
                SERVICE/SHOW
              </th>
              <th className="p-4 text-left border-r border-gray-700">PRICE</th>
              <th className="p-4 text-left border-r border-gray-700">
                DURATION
              </th>
              <th className="p-4 text-left border-r border-gray-700">
                DESCRIPTION
              </th>
              <th className="p-4 text-center bg-white text-black">ACTION</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {services.map((service) => (
              <tr
                key={service.id}
                className="border-t border-gray-600  text-black">
                <td className="p-4 border-r border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-yellow-500">
                      <service.icon size={30} />
                    </span>
                    <span className="font-medium">{service.name}</span>
                  </div>
                </td>
                <td className="p-4 text-amber-500 font-bold border-r border-gray-700">
                  {service.price}
                </td>
                <td className="p-4 border-r border-gray-700">
                  {service.duration}
                </td>
                <td className="p-4 max-w-md border-r border-gray-700">
                  <p className="whitespace-pre-line">
                    {service.description.split('hottest').map((part, i, arr) =>
                      i === 1 ? (
                        <span key={i}>
                          <span className="text-pink-500 font-medium">
                            hottest
                          </span>
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                </td>
                <td className="p-4 text-center">
                  <a
                    href={`/product-show/${service.name}`}
                    onClick={() => handleBookNow(service.id)}
                    className="bg-purple-600 text-white px-2 block py-2 text-xs rounded-full hover:bg-purple-900 transition-colors font-medium">
                    BOOK NOW
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View Cards */}
      <div className={`${isMobile ? 'block' : 'hidden'}`}>
        {services.map((service) => (
          <div
            key={service.id}
            className="mb-4 bg-gray-900 text-white rounded-lg overflow-hidden">
            <div className="p-4 flex items-center gap-2 border-b border-gray-700">
              <span className="text-xl">{<service.icon />}</span>
              <span className="font-medium">{service.name}</span>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <div className="text-gray-400 text-sm">Price</div>
                <div className="text-amber-500 font-bold">{service.price}</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm">Duration</div>
                <div className="whitespace-pre-line">{service.duration}</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm">Description</div>
                <div className="whitespace-pre-line">{service.description}</div>
              </div>
              <a
                href={`/product-show/${service.name}`}
                onClick={() => handleBookNow(service.id)}
                className="w-full bg-purple-500 block text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors font-medium">
                BOOK NOW
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
