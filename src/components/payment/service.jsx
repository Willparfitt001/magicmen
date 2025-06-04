'use client';
import BookingPaymentComponent from './checkout';
import React, { useState } from 'react';

// Service Gallery Component
export const ServiceGallery = ({ services, onServiceSelect }) => {
  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 ">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => onServiceSelect(service)}>
              <div className=" overflow-hidden ">
                <div className="aspect-square  flex ">
                  <div className="text-white text-center p-4">
                    <div className="w-[300px] h-[300px] flex">
                      <div className="text-white text-center p-4 w-full">
                        <div>
                          <img
                            alt={service.title}
                            src={service.image}
                            className="w-[300px] h-[300px] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <div className="text-white text-xl uppercase text-yellow-500 font-medium">
                    {service.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Service Details Component
export const ServiceDetails = ({ service, onReserve, onBack }) => {
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [showPricing, setShowPricing] = useState(false);

  const handleReserve = () => {
    if (location && duration) {
      setShowPricing(true);
    }
  };

  const handleConfirmReservation = () => {
    onReserve({
      service,
      location,
      duration,
      totalPrice: service.price,
      deposit: service.deposit,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="text-white mb-6 hover:text-gray-300 transition-colors">
          ← Back to Services
        </button>

        <div className=" p-2">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className=" text-center text-white">
                <div>
                  <img
                    alt={'services image'}
                    src={service.image}
                  />
                </div>
                <div className="text-xl font-bold">{service.title}</div>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-700 rounded"></div>
                ))}
              </div>
            </div>

            <div className="md:w-2/3">
              <h1 className="text-yellow-400 text-2xl font-bold mb-2">
                {service.title || service.name}
              </h1>
              <h2 className="text-white text-lg mb-4 underline">
                {service.combo}
              </h2>

              <p className="text-gray-300 mb-6">
                {service.description || service.desc}
              </p>

              <div className="space-y-4 mb-6">
                <div className="text-white font-bold uppercase">
                  The Step is as easy as 1 2 3
                </div>
                <div className="text-white">
                  <p> 1. Select your location and duration correctly</p>
                  <p> 2. Confirm Details</p>
                  <p> 3. Click reserve to make payment</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="text-white block mb-2">Location</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-green-500 focus:outline-none">
                    <option value="">Choose an option</option>
                    <option value="NSW">NSW</option>
                    <option value="VIC">VIC</option>
                    <option value="QLD">QLD</option>
                  </select>
                </div>

                <div>
                  <label className="text-white block mb-2">Duration</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-green-500 focus:outline-none">
                    <option value="">Choose an option</option>
                    <option value="2 hrs">2 hrs</option>
                    <option value="3 hrs">3 hrs</option>
                    <option value="4 hrs">4 hrs</option>
                  </select>
                </div>
              </div>

              {showPricing && (
                <div className="bg-gray-700 rounded-lg p-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-white">
                      <span>TOTAL PRICE:</span>
                      <span className="text-yellow-400 font-bold">
                        ${service.price}
                      </span>
                    </div>
                    <div className="flex justify-between text-green-400">
                      <span>DEPOSIT UPFRONT:</span>
                      <span className="font-bold">${service.deposit}</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>PAYMENT ON THE NIGHT:</span>
                      <span>${service.price - service.deposit}</span>
                    </div>
                    <hr className="border-gray-600" />
                    <div className="text-white text-xl font-bold">
                      ${service.deposit}.00
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={showPricing ? handleConfirmReservation : handleReserve}
                disabled={!location || !duration}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded transition-colors">
                {showPricing ? 'RESERVE MY BOOKING' : 'RESERVE MY BOOKING'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Your existing checkout component

// Main App Component
