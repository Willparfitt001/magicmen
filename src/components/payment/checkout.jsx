'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const BookingPaymentComponent = ({
  serviceName = '1 Stripper & 2 Waiters - NSW, 4 hrs',
  servicePrice = 490.0,
  onBookingComplete = () => {},
  bookingDetails = null,
}) => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    contactNumber: '',
    hasEventAddress: true,
    eventAddress: '',
    showDateTime: '',
    isDateTimeConfirmed: true,
    additionalComments: '',
    couponCode: '',
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    cardCode: '',
    agreedToTerms: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [bookingResult, setBookingResult] = useState(null);

  const supabase = createClientComponentClient();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleToggle = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const applyCoupon = () => {
    console.log('Applying coupon:', formData.couponCode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      setError('Please agree to terms and conditions');
      return;
    }

    if (!formData.cardHolderName) {
      setError('Cardholder name is required');
      return;
    }
    if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      setError('Card number must be 16 digits');
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      setError('Expiry date must be in MM/YY format');
      return;
    }
    if (!/^\d{3,4}$/.test(formData.cardCode)) {
      setError('CVV must be 3 or 4 digits');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // SECURITY WARNING: Do not store raw card details in production.
      // Use a payment processor like Stripe to tokenize card information.
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          serviceName,
          servicePrice,
          subtotal: servicePrice,
          total: servicePrice,
          bookingDetails,
          cardHolderName: formData.cardHolderName,
          cardNumber: formData.cardNumber,
          expiryDate: formData.expiryDate,
          cardCode: formData.cardCode,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to process booking');
      }

      const result = await response.json();
      setBookingResult(result);
      setShowSuccessModal(true);
      onBookingComplete(result);
    } catch (err) {
      console.error('Error processing booking:', err);
      setError(err.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setBookingResult(null);
    // Reset the form to initial state
    setFormData({
      email: '',
      fullName: '',
      contactNumber: '',
      hasEventAddress: true,
      eventAddress: '',
      showDateTime: '',
      isDateTimeConfirmed: true,
      additionalComments: '',
      couponCode: '',
      cardHolderName: '',
      cardNumber: '',
      expiryDate: '',
      cardCode: '',
      agreedToTerms: false,
    });
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <form onSubmit={handleSubmit}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-orange-400 mb-4">
              Have a coupon?{' '}
              <span className="underline cursor-pointer">
                Click here to enter your code
              </span>
            </p>
            <div className="border-2 border-dashed border-gray-600 p-4 rounded">
              <p className="text-sm mb-3">
                If you have a coupon code, please apply it below.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="couponCode"
                  value={formData.couponCode}
                  onChange={handleInputChange}
                  placeholder="Coupon code"
                  className="flex-1 px-3 py-2 bg-white text-black rounded"
                />
                <button
                  type="button"
                  onClick={applyCoupon}
                  className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                  APPLY COUPON
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2
                className="text-2xl font-script mb-6"
                style={{ fontFamily: 'cursive' }}>
                Booking Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-white text-black rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-white text-black rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. 0412345678"
                    className="w-full px-3 py-2 bg-white text-black rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Do you have event address?</span>
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                        formData.hasEventAddress
                          ? 'bg-green-500'
                          : 'bg-gray-600'
                      }`}
                      onClick={() => handleToggle('hasEventAddress')}>
                      <div
                        className={`w-5 h-5 bg-white rounded-full mt-0.5 transition-transform ${
                          formData.hasEventAddress
                            ? 'translate-x-6'
                            : 'translate-x-0.5'
                        }`}
                      />
                    </div>
                    <span className="ml-2 text-sm">
                      {formData.hasEventAddress ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
                {formData.hasEventAddress && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Event Address
                    </label>
                    <input
                      type="text"
                      name="eventAddress"
                      value={formData.eventAddress}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white text-black rounded"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Show Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    name="showDateTime"
                    value={formData.showDateTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-white text-black rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">
                    Is above date and time confirmed?
                  </span>
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                        formData.isDateTimeConfirmed
                          ? 'bg-green-500'
                          : 'bg-gray-600'
                      }`}
                      onClick={() => handleToggle('isDateTimeConfirmed')}>
                      <div
                        className={`w-5 h-5 bg-white rounded-full mt-0.5 transition-transform ${
                          formData.isDateTimeConfirmed
                            ? 'translate-x-6'
                            : 'translate-x-0.5'
                        }`}
                      />
                    </div>
                    <span className="ml-2 text-sm">
                      {formData.isDateTimeConfirmed ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Additional Comments
                  </label>
                  <textarea
                    name="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Any questions or comments?"
                    className="w-full px-3 py-2 bg-white text-black rounded resize-none"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2
                className="text-2xl font-script mb-6"
                style={{ fontFamily: 'cursive' }}>
                Make A Reservation
              </h2>
              <div className="bg-gray-800 p-6 rounded-lg space-y-6">
                <div>
                  <h3
                    className="text-lg font-script mb-4"
                    style={{ fontFamily: 'cursive' }}>
                    Pay my Deposit
                  </h3>
                  <div className="flex justify-between">
                    <span>{serviceName}</span>
                    <span>${servicePrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${servicePrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Total</span>
                    <span>${servicePrice.toFixed(2)}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2">
                    Cardholder Name *
                  </label>
                  <input
                    type="text"
                    name="cardHolderName"
                    value={formData.cardHolderName}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Card Number *</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded border-gray-600"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">
                      Expiry (MM/YY) *
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 bg-gray-700 text-white rounded border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">CVV *</label>
                    <input
                      type="text"
                      name="cardCode"
                      value={formData.cardCode}
                      onChange={handleInputChange}
                      required
                      placeholder="CVC"
                      className="w-full px-3 py-2 bg-gray-700 text-white rounded border-gray-600"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <span>I agree to the terms and conditions</span>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-orange-500 text-white cursor-pointer rounded hover:bg-orange-600 disabled:opacity-50">
                  {isLoading ? 'Processing...' : 'Submit Booking'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Booking Confirmed!
              </h3>
              <p className="text-gray-600 mb-4">
                Your reservation has been successfully processed.
              </p>
              {bookingResult?.id && (
                <p className="text-sm text-gray-500 mb-4">
                  Booking ID: #{bookingResult.id}
                </p>
              )}
              <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Booking Summary:
                </h4>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Service:</strong> {serviceName}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Amount:</strong> ${servicePrice.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Name:</strong> {formData.fullName}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> {formData.email}
                </p>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Thank you for booking, the support team will be with you shortly
              </p>
            </div>
            <button
              onClick={closeSuccessModal}
              className="w-full py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPaymentComponent;
