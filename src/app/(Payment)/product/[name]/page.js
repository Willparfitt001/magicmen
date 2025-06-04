'use client';
import React, { useState } from 'react';

import { useParams } from 'next/navigation';
import BookingPaymentComponent from '@/components/payment/checkout';
import { ServiceDetails } from '@/components/payment/service';

const service_data = [
  {
    title: `Dinner and Show`,
    sub_title: `Package`,
    list_items_one: [
      'Arrive at the Dinner venue for a delicious meal at your very own reserved area.',
      'Shared entre platter',
      'One main meal per guest ',
      'SEE THE VIC MENU',
      'SEE THE NSW MENU',
      'Silver Seating to watch the award-winning Magic Men show ',
      'Glass of champagne on arrival',
      'Hen gets brought up on stage (optional)',
      'Free entry to the after party',
      'Complimentary hens party invites',
    ],
    list_items_optional: [
      '3 hour drink package',
      'Private strip show for your hens’ group',
      'Burlesque, Twerk or Lap dance class',
      'Upgrade seating to Gold or Platinum',
      'Luxury limo transfer to the dinner venue',
    ],
    location: 'Available VIC & NSW',
    price: 85,
    deposit: 50,
    desc: 'per head (min 20 people)',

    time: '5pm',
    normal_price: 'Normally $110',
    video: 'https://youtu.be/erOW_WMNy3I',
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/5J0A0400-768x512.jpg`,
  },
  {
    title: `Party bus and show`,
    sub_title: `Package`,
    list_items_one: [
      'Pick up from your residence',
      'Enjoy a 1-hour cruise arriving',
      'Magic Men show ticket – SILVER ',
      'The bus features full music entertainment system',
      'A drink on arrival',
      'Hen gets brought up on stage (optional)',
      'After party entry to the Rnb club (venue turns into a nightclub after the show)',
      'Complimentary hens party invites',
      'Free entry to the after party',
    ],
    list_items_optional: [
      'Private Strip show on the Bus with one of our Magic Men',
      'Upgrade seating for the show to Gold or Platinum ',
      'Burlesque/Twerk/Lap dance lesson for your group ',
    ],
    location: 'Available VIC & QLD & NSW',
    price: 85,
    deposit: 50,

    desc: 'per head (min 20 people)',
    time: '5pm',
    normal_price: 'Normally $110',
    video: 'https://youtu.be/42ht0Q1YWIw',
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/fyE1Eimt-768x512.jpeg`,
  },
  {
    title: `Hens Day Special `,
    sub_title: `Package`,
    list_items_one: [
      '3 hours Unlimited Drinks (sparkling, house wines and soft drinks)',
      'Reserved area for your group for 3 hours',
      'Personal topless waiter',
      'Private show or Life drawing class',
      'Introductory twerk classes ',
      'Complimentary Invitations',
    ],
    list_items_optional: [
      'FINGER FOOD ($15pp extra)',
      'TRANSFER: minimum 10 pax you can have a one-way luxury limo transfer for $50pp extra',
      'SHOW TICKETS: $40pp. (discounted from $50) Complete the night and come to the Magic Men show after',
    ],
    location: ' MARRAKECH NIGHTCLUB- 25 BANK PL MELBOURNE',
    price: 139,
    deposit: 80,

    desc: `per head`,
    time: '3:00-6:00PM',
    normal_price: 'Normally$160',
    video: 'https://youtu.be/ER91ZYGnnpg',
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/IMG_0553-min-768x512.jpg`,
  },
  {
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/5J0A0400-768x512.jpg`,

    title: `Hens Party`,
    price: 99,
    deposit: 60,
    desc: 'per head',
  },
  {
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/5J0A0400-768x512.jpg`,

    title: `Magic Men`,
    price: 50,
    deposit: 30,
    desc: 'per head',
  },
  {
    title: `Limo Show`,
    price: 99,
    deposit: 60,
    desc: 'per head',
    image: `https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/5J0A0400-768x512.jpg`,
  },
];
const BookingApp = () => {
  const [currentStep, setCurrentStep] = useState('details');
  const [selectedService, setSelectedService] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const performerName = 'Dinner and Show';
  const params = useParams();

  const matchedServices = service_data.find(
    (performer) =>
      performer.title.toLowerCase() ===
      params.name.split('%20').join(' ').toLowerCase()
  );

  console.log(params.name.split('%20').join(' '));

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
          serviceName={matchedServices?.title}
          servicePrice={matchedServices?.deposit}
          onBack={handleBack}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
};

export default BookingApp;
