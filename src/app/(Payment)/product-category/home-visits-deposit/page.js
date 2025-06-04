'use client';
import React, { useState } from 'react';

import BookingPaymentComponent from '@/components/payment/checkout';
import { ServiceGallery, ServiceDetails } from '@/components/payment/service';
const BookingApp = () => {
  const [currentStep, setCurrentStep] = useState('gallery');
  const [selectedService, setSelectedService] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  // Sample services data
  const services = [
    {
      id: 1,
      title: '1 Stripper',
      subtitle: 'Standard Combo',
      performers: '3 Total',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic19Dec161-450x300.jpg`,

      icon: '👨‍🍳',
      combo: 'STANDARD COMBO',
      description: 'Great for groups medium-sized groups up to 10-30 people',
      showDuration: '15-20 min show',
      waiterService:
        '2 hr premium waiter service for food/drinks, photos, game hosting and setting up',
      price: 700,
      deposit: 310,
    },
    {
      id: 2,
      title: '1 Waiter',
      subtitle: 'Premium Combo',
      performers: '4 Total',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/stripperphotos-1-450x300.jpg`,
      icon: '👨‍💼',
      combo: 'PREMIUM COMBO',
      description: 'Perfect for larger groups up to 20-40 people',
      showDuration: '20-25 min show',
      waiterService:
        '2 hr premium waiter service for food/drinks, photos, game hosting and setting up',
      price: 900,
      deposit: 400,
    },
    {
      id: 3,
      title: '2 Waiters',
      subtitle: 'Basic Combo',
      performers: '2 Total',
      icon: '🕺',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic19Dec19-450x675.jpg`,
      combo: 'BASIC COMBO',
      description: 'Great for intimate groups up to 5-15 people',
      showDuration: '15 min show',
      waiterService: '1.5 hr waiter service for food/drinks and photos',
      price: 500,
      deposit: 250,
    },
    {
      id: 4,
      title: '1 Stripper & 1 Waiter',
      subtitle: 'Show Only',
      performers: '2 Total',
      icon: '🎭',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic19Dec19-450x675.jpg`,
      combo: 'SHOW COMBO',
      description:
        'Just the entertainment - perfect for parties with existing staff',
      showDuration: '20 min show',
      waiterService: 'Photo opportunities after show',
      price: 400,
      deposit: 200,
    },
    {
      id: 5,
      title: '2 Strippers',
      subtitle: 'Show Only',
      performers: '2 Total',
      icon: '🎭',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic19Dec19-450x675.jpg`,
      combo: 'SHOW COMBO',
      description:
        'Just the entertainment - perfect for parties with existing staff',
      showDuration: '20 min show',
      waiterService: 'Photo opportunities after show',
      price: 400,
      deposit: 200,
    },
    {
      id: 6,
      title: 'Will Parfit',
      subtitle: 'Show Only',
      performers: '2 Total',
      icon: '🎭',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Purr_We-Love-Uniforms_TT-0091-370x270.jpg`,
      combo: 'SHOW COMBO',
      description:
        'Just the entertainment - perfect for parties with existing staff',
      showDuration: '20 min show',
      waiterService: 'Photo opportunities after show',
      price: 400,
      deposit: 200,
    },
    {
      id: 7,
      title: '1 Stripper & 2 Waiters',
      subtitle: 'Show Only',
      performers: '2 Total',
      icon: '🎭',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic19Dec161-450x300.jpg`,
      combo: 'SHOW COMBO',
      description:
        'Just the entertainment - perfect for parties with existing staff',
      showDuration: '20 min show',
      waiterService: 'Photo opportunities after show',
      price: 400,
      deposit: 200,
    },
    {
      id: 8,
      title: 'Jaxon',
      subtitle: 'Show Only',
      performers: '2 Total',
      icon: '🎭',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2022/10/309607489_1241416883371069_2621615751318814805_n-450x542.jpg`,
      combo: 'SHOW COMBO',
      description:
        'Just the entertainment - perfect for parties with existing staff',
      showDuration: '20 min show',
      waiterService: 'Photo opportunities after show',
      price: 400,
      deposit: 200,
    },
    {
      id: 9,
      title: '2 Strippers & 2 Waiters',
      subtitle: 'Show Only',
      performers: '2 Total',
      icon: '🎭',
      image: `https://payments.magicmen.com.au/wp-content/uploads/2020/07/996622_396120897180133_1456789540_n1-450x300.jpg`,
      combo: 'SHOW COMBO',
      description:
        'Just the entertainment - perfect for parties with existing staff',
      showDuration: '20 min show',
      waiterService: 'Photo opportunities after show',
      price: 400,
      deposit: 200,
    },
  ];

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
    setCurrentStep('gallery');
    setSelectedService(null);
    setBookingDetails(null);
  };

  return (
    <div>
      {currentStep === 'gallery' && (
        <ServiceGallery
          services={services}
          onServiceSelect={handleServiceSelect}
        />
      )}

      {currentStep === 'details' && selectedService && (
        <ServiceDetails
          service={selectedService}
          onReserve={handleReservation}
          onBack={handleBack}
        />
      )}

      {currentStep === 'checkout' && bookingDetails && (
        <BookingPaymentComponent
          booking={bookingDetails}
          onBack={handleBack}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
};

export default BookingApp;
