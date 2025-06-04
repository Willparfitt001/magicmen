

'use client';

import { useState } from 'react';
import { ImTicket } from 'react-icons/im';
import { GiPoliceOfficerHead } from 'react-icons/gi';
import { MapPin, Clock, Users, DollarSign } from 'lucide-react';
import BookingPaymentComponent from '@/components/payment/checkout'

const category = [
  { category: 'private-show', icon: GiPoliceOfficerHead },
  { category: 'stage-show', icon: ImTicket },
];

const location = [
  'VIC',
  'NSW',
  'QLD Brisbane',
  'QLD GoldCoast',
  'WA',
  'SA',
  'TAS',
];

const guestCount = ['0-10', '11-20', '21-30', '31-50', '50+'];

const duration = ['1 hr', '2 hrs', '3 hrs', '4+ hrs'];

const packages = [
  { name: 'Basic Package', price: 299 },
  { name: 'Premium Package', price: 499 },
  { name: 'Deluxe Package', price: 799 },
];

export default function IntegratedBookingFlow() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedGuests, setSelectedGuests] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  // Create service name from selected options
  const generateServiceName = () => {
    const categoryName = selectedCategory.split('-').join(' ');
    return `${selectedPackage} - ${categoryName.toUpperCase()} (${selectedLocation}, ${selectedDuration})`;
  };

  // Get selected package price
  const getSelectedPrice = () => {
    const pkg = packages.find(p => p.name === selectedPackage);
    return pkg ? pkg.price : 0;
  };

  // Handle booking completion
  const handleBookingComplete = (result) => {
    console.log('Booking completed:', result);
    // You can redirect to a success page or show confirmation
    alert('Booking completed successfully!');
    // Reset form or redirect
    setShowPaymentForm(false);
    // Optionally reset all selections
    resetSelections();
  };

  const resetSelections = () => {
    setSelectedCategory('');
    setSelectedLocation('');
    setSelectedGuests('');
    setSelectedDuration('');
    setSelectedPackage('');
  };

  // Handle proceed to payment
  const handleProceedToPayment = () => {
    setShowPaymentForm(true);
  };

  // Handle back to selection
  const handleBackToSelection = () => {
    setShowPaymentForm(false);
  };

  // If payment form should be shown, render the payment component
  if (showPaymentForm) {
    return (
      <div className="min-h-screen bg-gray-900">
        {/* Back button */}
        <div className="p-4">
          <button
            onClick={handleBackToSelection}
            className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
          >
            ← Back to Selection
          </button>
        </div>
        
        <BookingPaymentComponent
          serviceName={generateServiceName()}
          servicePrice={getSelectedPrice()}
          onBookingComplete={handleBookingComplete}
          // Pass additional booking details as props
          bookingDetails={{
            category: selectedCategory,
            location: selectedLocation,
            guestCount: selectedGuests,
            duration: selectedDuration,
            packageName: selectedPackage
          }}
        />
      </div>
    );
  }

  // Render selection form
  return (
    <div className="p-4 flex font-roboto-mono flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-yellow-500 italic text-xl md:text-2xl font-bold mb-4">
        Online Deposits & Payments to secure a booking
      </h1>
      <p className="font-bold text-xl mb-8 text-center">
        Please click on the service you would like to pay the deposit for
      </p>

      {/* Step 1: Category Selection */}
      <div className="flex items-center p-4 gap-4 justify-center mx-auto w-full md:w-4/5 mb-6">
        {category.map((d, i) => (
          <CategoryCard
            key={i}
            data={d}
            isSelected={selectedCategory === d.category}
            onClick={() => setSelectedCategory(d.category)}
          />
        ))}
      </div>

      {/* Step 2: Location Selection */}
      {selectedCategory && (
        <StepSection title="What is the Location of the party?">
          <div className="grid grid-cols-3 gap-3">
            {location.map((loc, i) => (
              <SelectionCard
                key={i}
                data={loc}
                icon={MapPin}
                isSelected={selectedLocation === loc}
                onClick={() => setSelectedLocation(loc)}
              />
            ))}
          </div>
        </StepSection>
      )}

      {/* Step 3: Guest Count */}
      {selectedLocation && (
        <StepSection title="How many guests would you like?">
          <div className="grid grid-cols-3 gap-3">
            {guestCount.map((count, i) => (
              <SelectionCard
                key={i}
                data={count}
                icon={Users}
                isSelected={selectedGuests === count}
                onClick={() => setSelectedGuests(count)}
              />
            ))}
          </div>
        </StepSection>
      )}

      {/* Step 4: Duration */}
      {selectedGuests && (
        <StepSection title="How long would you like the entertainment for?">
          <div className="grid grid-cols-2 gap-3">
            {duration.map((time, i) => (
              <SelectionCard
                key={i}
                data={time}
                icon={Clock}
                isSelected={selectedDuration === time}
                onClick={() => setSelectedDuration(time)}
              />
            ))}
          </div>
        </StepSection>
      )}

      {/* Step 5: Package Selection */}
      {selectedDuration && (
        <StepSection title="Select your package">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {packages.map((pkg, i) => (
              <PackageCard
                key={i}
                data={pkg}
                isSelected={selectedPackage === pkg.name}
                onClick={() => setSelectedPackage(pkg.name)}
              />
            ))}
          </div>
        </StepSection>
      )}

      {/* Step 6: Payment Summary */}
      {selectedPackage && (
        <div className="bg-gray-800 p-6 rounded-lg w-full md:w-4/5 mt-6">
          <h2 className="text-yellow-500 text-xl font-bold mb-4">
            Booking Summary
          </h2>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-bold">Service:</span>{' '}
              {selectedCategory.split('-').join(' ')}
            </p>
            <p>
              <span className="font-bold">Location:</span> {selectedLocation}
            </p>
            <p>
              <span className="font-bold">Guests:</span> {selectedGuests}
            </p>
            <p>
              <span className="font-bold">Duration:</span> {selectedDuration}
            </p>
            <p>
              <span className="font-bold">Package:</span> {selectedPackage}
            </p>
            <p className="text-lg">
              <span className="font-bold">Total:</span> $
              {getSelectedPrice()}
            </p>
          </div>
          <button 
            onClick={handleProceedToPayment}
            className="w-full bg-yellow-500 text-black font-bold py-3 px-6 rounded-md mt-4 hover:bg-yellow-400 transition-colors"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      )}
    </div>
  );
}

function CategoryCard({ data, isSelected, onClick }) {
  return (
    <div
      className={`rounded-md w-full md:w-1/3 cursor-pointer flex text-xl font-bold flex-col gap-2 uppercase justify-center items-center p-4 transition-colors ${
        isSelected
          ? 'bg-yellow-500 text-black'
          : 'bg-gray-800 hover:bg-yellow-500 hover:text-black'
      }`}
      onClick={onClick}>
      <span>
        <data.icon size={40} />
      </span>
      <h1>deposit for</h1>
      <h1 className="italic">{data.category.split('-').join(' ')}</h1>
    </div>
  );
}

function StepSection({ title, children,isSelected }) {
  return (
    <section className={`${isSelected?"bg-black":"bg-gray-100"} text-black p-4 space-y-6 text-center w-full md:w-4/5 justify-center rounded-md mb-6`}>
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

function SelectionCard({ data, icon: Icon, isSelected, onClick }) {
  return (
    <div
      className={`w-full group cursor-pointer rounded-md font-bold uppercase p-4 transition-colors ${
        isSelected
          ? 'bg-yellow-500 text-black'
          : 'bg-gray-900 text-white hover:text-black hover:bg-yellow-500'
      }`}
      onClick={onClick}>
      <span className="flex items-center text-2xl text-center gap-2 justify-center">
        <Icon
          className={
            isSelected ? 'text-black' : 'text-yellow-500 group-hover:text-black'
          }
        />
        <p>{data}</p>
      </span>
    </div>
  );
}

function PackageCard({ data, isSelected, onClick }) {
  return (
    <div
      className={`w-full cursor-pointer rounded-md font-bold p-6 transition-colors border-2 ${
        isSelected
          ? 'bg-yellow-500 text-black border-yellow-500'
          : 'bg-gray-800 text-white border-gray-700 hover:border-yellow-500'
      }`}
      onClick={onClick}>
      <div className="text-center">
        <DollarSign
          className={`mx-auto mb-2 ${
            isSelected ? 'text-black' : 'text-yellow-500'
          }`}
          size={32}
        />
        <h3 className="text-lg mb-2">{data.name}</h3>
        <p className="text-2xl font-bold">${data.price}</p>
      </div>
    </div>
  );
}