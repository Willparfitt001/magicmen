'use client';
import React, { useState } from 'react';

import { useParams } from 'next/navigation';
import BookingPaymentComponent from '@/components/payment/checkout';
import { ServiceDetails } from '@/components/payment/service';

const service_data = [
  {
    id: 1,
    name: 'TOPLESS WAITER',
    price: 100,
    deposit: 50,

    duration: '1 hour',
    description: '2 hours minimum. Hire hottest hunks to host your party.',
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/5J0A0400-768x512.jpg`,

    // icon: GiBowTieRibbon,
  },
  {
    id: 2,
    name: 'FULL OR PARTIAL STRIP SHOW',
    price: 280,
    deposit: 160,

    duration: '15 - 20 minutes',
    description:
      'Exciting, cheeky fun, sexy entertainment. Choose to have your Magic Men do a light tease or experience the full show.',
    // icon: RiPoliceBadgeLine,
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/5J0A0400-768x512.jpg`,
  },
  {
    id: 3,
    name: 'DOUBLE TROUBLE SHOW',
    price: 560,
    deposit: 300,

    duration: '30 - 40 minutes',
    description:
      'Customise it for your party; You can choose to have one stripper at a time or BOTH at the same time! Highly interactive and entertaining.',
    // icon: RiPoliceBadgeLine,
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/5J0A0400-768x512.jpg`,
  },
  {
    id: 4,
    name: 'BASIC COMBO',
    price: 480,
    deposit: 240,
    duration: '2 hr Waiter\n15-20min show',
    description: '1 Topless Waiter\n1 Stripper',
    // icon: RiPoliceBadgeLine,
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/5J0A0400-768x512.jpg`,
  },

  {
    id: 5,
    name: 'BASIC COMBO',
    price: 480,
    deposit: 240,

    duration: '2 hr Waiter\n15-20min show',
    description: '1 Topless Waiter\n1 Stripper',
    // icon: RiPoliceBadgeLine,
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/5J0A0400-768x512.jpg`,
  },
  {
    id: 6,
    name: 'BASIC COMBO',
    price: 480,
    deposit: 240,
    duration: '2 hr Waiter\n15-20min show',
    description: '1 Topless Waiter\n1 Stripper',
    // icon: RiPoliceBadgeLine,
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/5J0A0400-768x512.jpg`,
  },
  {
    id: 7,
    name: 'BASIC COMBO',
    price: 480,
    deposit: 240,
    duration: '2 hr Waiter\n15-20min show',
    description: '1 Topless Waiter\n1 Stripper',
    // icon: RiPoliceBadgeLine,
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/5J0A0400-768x512.jpg`,
  },
];
const BookingApp = () => {
  const [currentStep, setCurrentStep] = useState('details');
  const [selectedService, setSelectedService] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const params = useParams();

  //   console.log(params);
  const matchedServices = service_data.find(
    (performer) =>
      performer.name.toLowerCase() ===
      params.show.split('%20').join(' ').toLowerCase()
  );

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setCurrentStep('details');
  };

  const handleReservation = (booking) => {
    setBookingDetails(booking);
    setCurrentStep('checkout');
  };

  const handleBack = () => {
    if (currentStep === 'details') {
      setCurrentStep('gallery');
      setSelectedService(null);
    } else if (currentStep === 'checkout') {
      setCurrentStep('details');
      setBookingDetails(null);
    }
  };

  const handleComplete = (formData) => {
    alert('Booking completed successfully!');
    // Reset to gallery
    setCurrentStep('details');
    setSelectedService(null);
    setBookingDetails(null);
  };

  return (
    <div>
      {currentStep === 'details' && (
        <ServiceDetails
          service={matchedServices}
          onReserve={handleReservation}
          onBack={handleBack}
        />
      )}

      {currentStep === 'checkout' && bookingDetails && (
        <BookingPaymentComponent
          booking={bookingDetails}
          serviceName={
            `${matchedServices?.name}` + ` ${matchedServices?.duration}`
          }
          servicePrice={matchedServices?.deposit}
          onBack={handleBack}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
};

export default BookingApp;
