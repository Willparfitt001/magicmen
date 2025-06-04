'use client'
import React, { useState } from 'react';

import BookingPaymentComponent from '@/components/payment/checkout'
import {ServiceGallery,ServiceDetails} from '@/components/payment/service'
const BookingApp = () => {
  const [currentStep, setCurrentStep] = useState('gallery');
  const [selectedService, setSelectedService] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  // Sample services data
  const services = [
    {
      id: 1,
      title: 'Drinks & Shows – $99 per person',
      subtitle: 'Standard Combo',
      performers: '3 Total',
      image:`https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic11March28-450x300.jpg`,

      icon: '👨‍🍳',
      combo: 'STANDARD COMBO',
      description: 'Great for groups medium-sized groups up to 10-30 people',
      showDuration: '15-20 min show',
      waiterService: '2 hr premium waiter service for food/drinks, photos, game hosting and setting up',
      price: 700,
      deposit: 310
    },
    {
      id: 2,
      title: 'Silver Ticket – $50 per person',
      subtitle: 'Premium Combo',
      performers: '4 Total',
      image:`https://payments.magicmen.com.au/wp-content/uploads/2020/07/magic9thApril139-450x300.jpg`,
      icon: '👨‍💼',
      combo: 'PREMIUM COMBO',
      description: 'Perfect for larger groups up to 20-40 people',
      showDuration: '20-25 min show',
      waiterService: '2 hr premium waiter service for food/drinks, photos, game hosting and setting up',
      price: 900,
      deposit: 400
    },
    {
      id: 3,
      title: 'Limo & Show – $99 per person',
      subtitle: 'Basic Combo',
      performers: '2 Total',
      icon: '🕺',
      image:`https://payments.magicmen.com.au/wp-content/uploads/2020/07/MAGIC18FEB2-450x300.jpg`,
      combo: 'BASIC COMBO',
      description: 'Great for intimate groups up to 5-15 people',
      showDuration: '15 min show',
      waiterService: '1.5 hr waiter service for food/drinks and photos',
      price: 500,
      deposit: 250
    },
    {
      id: 4,
      title: 'Hens Day Special – $139 per person',
      subtitle: 'Show Only',
      performers: '2 Total',
      icon: '🎭',
      image:`https://payments.magicmen.com.au/wp-content/uploads/2020/07/Girls-having-fun-at-hens-night-450x300.jpg`,
      combo: 'SHOW COMBO',
      description: 'Just the entertainment - perfect for parties with existing staff',
      showDuration: '20 min show',
      waiterService: 'Photo opportunities after show',
      price: 400,
      deposit: 200
    },
    {
      id: 5,
      title: 'Party bus & Show – $99 per person',
      subtitle: 'Show Only',
      performers: '2 Total',
      icon: '🎭',
      image:`https://payments.magicmen.com.au/wp-content/uploads/2021/06/2WJ24msw-450x300.jpeg`,
      combo: 'SHOW COMBO',
      description: 'Just the entertainment - perfect for parties with existing staff',
      showDuration: '20 min show',
      waiterService: 'Photo opportunities after show',
      price: 400,
      deposit: 200
    },
     {
      id: 6,
      title: 'VIP Lounge – $120 per person',
      subtitle: 'Show Only',
      performers: '2 Total',
      icon: '🎭',
      image:`https://payments.magicmen.com.au/wp-content/uploads/2021/08/IMG_7335-min-450x300.jpg`,
      combo: 'SHOW COMBO',
      description: 'Just the entertainment - perfect for parties with existing staff',
      showDuration: '20 min show',
      waiterService: 'Photo opportunities after show',
      price: 400,
      deposit: 200
    },
     {
      id: 7,
      title: 'XMAS SPECIAL',
      subtitle: 'Show Only',
      performers: '2 Total',
      icon: '🎭',
      image:`https://payments.magicmen.com.au/wp-content/uploads/2020/07/Magic11March28-450x300.jpg`,
      combo: 'SHOW COMBO',
      description: 'Just the entertainment - perfect for parties with existing staff',
      showDuration: '20 min show',
      waiterService: 'Photo opportunities after show',
      price: 400,
      deposit: 200
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