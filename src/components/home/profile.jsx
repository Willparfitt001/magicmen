// 'use client';
// import React, { useState } from 'react';
// import {
//   Play,
//   Heart,
//   MessageCircle,
//   Share2,
//   Lock,
//   Star,
//   Calendar,
//   MapPin,
//   Camera,
//   Video,
//   ChevronLeft,
//   ChevronRight,
// } from 'lucide-react';
// import { AiOutlineColumnHeight } from 'react-icons/ai';
// import { FaRegEye } from 'react-icons/fa';
// import { RiScissors2Fill } from 'react-icons/ri';
// import { ImTicket } from 'react-icons/im';
// import { GiMoebiusStar } from 'react-icons/gi';
// import BookingPaymentComponent from '@/components/payment/checkout';
// import { ServiceGallery, ServiceDetails } from '@/components/payment/service';

// const CreatorProfile = ({
//   profileData,
//   onSubscribe,
//   onMessage,
//   onLike,
//   onShare,
//   stripeConfig = {},
// }) => {
//   const [activeMedia, setActiveMedia] = useState({
//     type: profileData?.mediaPreview?.[0]?.type || 'image',
//     src: profileData?.mediaPreview?.[0]?.src || '/api/placeholder/400/600',
//     isVideo: profileData?.mediaPreview?.[0]?.type === 'video',
//   });

//   const [showCheckout, setShowCheckout] = useState(false);
//   const [carouselIndex, setCarouselIndex] = useState(0);
//   const [currentStep, setCurrentStep] = useState('gallery');
//   const [selectedService, setSelectedService] = useState(null);
//   const [bookingDetails, setBookingDetails] = useState(null);

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setCurrentStep('details');
//   };

//   const handleReservation = (booking) => {
//     setBookingDetails(booking);
//     setCurrentStep('checkout');
//   };

//   const handleBack = () => {
//     if (currentStep === 'details') {
//       setCurrentStep('gallery');
//       setSelectedService(null);
//     } else if (currentStep === 'checkout') {
//       setCurrentStep('details');
//       setBookingDetails(null);
//     }
//   };

//   const handleComplete = (formData) => {
//     alert('Booking completed successfully!');
//     // Reset to gallery
//     setCurrentStep('gallery');
//     setSelectedService(null);
//     setBookingDetails(null);
//   };

//   // Default profile data if none provided
//   const defaultProfile = {
//     name: 'Creator',
//     tagline: 'Content Creator',
//     location: 'Los Angeles, CA',
//     followers: '0',
//     posts: '0',
//     likes: '0',
//     subscriptionPrice: '$9.99/month',
//     bio: 'Welcome to my profile! Subscribe for exclusive content.',
//     profileImage: '/api/placeholder/96/96',
//     stats: {
//       photos: 0,
//       videos: 0,
//       live: 0,
//     },
//     mediaPreview: [
//       { type: 'image', src: '/api/placeholder/120/160', premium: false },
//     ],
//   };

//   const profile = { ...defaultProfile, ...profileData };

//   const handleReserveClick = () => {
//     setShowCheckout(true);
//   };

//   const handleSubscribe = () => {
//     if (onSubscribe) {
//       onSubscribe({
//         profileId: profile?.id,
//         creatorName: profile?.name,
//         subscriptionPrice: profile?.subscriptionPrice,
//         stripeData: stripeConfig,
//       });
//     }
//     setShowCheckout(false);
//   };

//   const nextSlide = () => {
//     setCarouselIndex((prev) =>
//       prev + 4 >= profile?.mediaPreview.length ? 0 : prev + 4
//     );
//   };

//   const prevSlide = () => {
//     setCarouselIndex((prev) =>
//       prev - 4 < 0 ? Math.max(0, profile?.mediaPreview.length - 4) : prev - 4
//     );
//   };

//   const visibleItems = profile?.mediaPreview.slice(
//     carouselIndex,
//     carouselIndex + 4
//   );

//   const CheckoutModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
//       <div className="bg-gray-900 rounded-2xl max-w-md w-full p-6 border border-purple-500/20">
//         <div className="text-center mb-6">
//           <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 flex items-center justify-center">
//             <img
//               src={profile?.profileImage}
//               alt={profile?.name}
//               className="w-16 h-16 rounded-full object-cover"
//             />
//           </div>
//           <h3 className="text-2xl font-bold text-white mb-2">
//             Subscribe to {profile.name}
//           </h3>
//           <p className="text-gray-400">
//             Get exclusive access to premium content
//           </p>
//         </div>

//         <div className="bg-gray-800 rounded-xl p-4 mb-6">
//           <div className="flex justify-between items-center mb-2">
//             <span className="text-white">Monthly Subscription</span>
//             <span className="text-2xl font-bold text-purple-400">
//               {profile?.subscriptionPrice}
//             </span>
//           </div>
//           <div className="text-sm text-gray-400 space-y-1">
//             <div className="flex items-center gap-2">
//               <Star className="w-4 h-4 text-yellow-400" />
//               <span>
//                 Access to {profile?.stats.photos + profile?.stats.videos}+
//                 premium posts
//               </span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Video className="w-4 h-4 text-purple-400" />
//               <span>Exclusive videos & photos</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MessageCircle className="w-4 h-4 text-blue-400" />
//               <span>Direct messaging</span>
//             </div>
//           </div>
//         </div>

//         <button
//           onClick={handleSubscribe}
//           className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold mb-3 hover:from-purple-700 hover:to-pink-700 transition-all">
//           Subscribe Now
//         </button>

//         <button
//           onClick={() => setShowCheckout(false)}
//           className="w-full text-gray-400 py-2 hover:text-white transition-colors">
//           Cancel
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen  my-11 text-white">
//       <div className="w-full mx-auto p-6">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Media Section */}
//           <div className="lg:col-span-1 p-2">
//             <div className="relative rounded-2xl overflow-hidden bg-gray-800 aspect-[3/4] mb-6">
//               {activeMedia.isVideo ? (
//                 <video
//                   src={activeMedia.src}
//                   className="w-full h-full object-cover"
//                   controls
//                   poster="/api/placeholder/400/600"
//                 />
//               ) : (
//                 <img
//                   src={activeMedia.src}
//                   alt="Main content"
//                   className="w-full h-full object-cover"
//                 />
//               )}

//               {/* Media Controls Overlay */}
//               <div className="absolute top-4 right-4 flex gap-2">
//                 <button
//                   onClick={() => onLike && onLike(profile.id, activeMedia)}
//                   className="bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors">
//                   <Heart className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => onShare && onShare(profile.id, activeMedia)}
//                   className="bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors">
//                   <Share2 className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* Premium Content Indicator */}
//               <div className="absolute bottom-4 left-4">
//                 <div className="bg-purple-600/90 px-3 py-1 rounded-full text-sm font-medium">
//                   Premium Content
//                 </div>
//               </div>
//             </div>

//             {/* Media Carousel */}
//             <div className="relative">
//               <div className="flex items-center justify-between mb-3">
//                 <h3 className="text-lg font-semibold text-white">
//                   Recent Posts
//                 </h3>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={prevSlide}
//                     disabled={carouselIndex === 0}
//                     className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
//                     <ChevronLeft className="w-4 h-4" />
//                   </button>
//                   <button
//                     onClick={nextSlide}
//                     disabled={carouselIndex + 4 >= profile?.mediaPreview.length}
//                     className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
//                     <ChevronRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>

//               <div className="grid grid-cols-4 gap-3">
//                 {visibleItems.map((media, index) => (
//                   <div
//                     key={carouselIndex + index}
//                     className="relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer group"
//                     onClick={() =>
//                       setActiveMedia({
//                         type: media.type,
//                         src: media.src,
//                         isVideo: media.type === 'video',
//                       })
//                     }>
//                     <img
//                       src={media.src}
//                       alt={`Preview ${carouselIndex + index + 1}`}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform"
//                     />

//                     {media.type === 'video' && (
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <Play className="w-6 h-6 text-white drop-shadow-lg" />
//                       </div>
//                     )}

//                     {media.premium && (
//                       <div className="absolute top-2 right-2">
//                         <Lock className="w-4 h-4 text-yellow-400" />
//                       </div>
//                     )}

//                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
//                       <div className="text-xs text-white font-medium">
//                         {media.type === 'video' ? 'Video' : 'Photo'}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Carousel indicators */}
//               <div className="flex justify-center mt-4 gap-2">
//                 {Array.from({
//                   length: Math.ceil(profile?.mediaPreview.length / 4),
//                 }).map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCarouselIndex(index * 4)}
//                     className={`w-2 h-2 rounded-full transition-colors ${
//                       Math.floor(carouselIndex / 4) === index
//                         ? 'bg-purple-400'
//                         : 'bg-gray-600 hover:bg-gray-500'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Profile Info Section */}
//           <div className="space-y-6 w-full lg:col-span-2 p-2">
//             {/* Profile Header */}
//             <div className="text-left">
//               <h1 className="text-3xl md:text-5xl font-alex-brush font-bold text-yellow-500 mb-2">
//                 {profile?.name}
//               </h1>
//             </div>

//             {/* Bio */}
//             <div className="bg-gray-800/50 rounded-xl p-4">
//               <h3 className="text-lg font-semibold mb-3 text-yellow-500">
//                 About {profile.name}
//               </h3>
//               <span className="space-y-4">
//                 {profile?.bio?.map((p, i) => {
//                   return (
//                     <p
//                       key={i}
//                       className="text-gray-300 leading-relaxed">
//                       {p}
//                     </p>
//                   );
//                 })}
//               </span>
//             </div>

//             <div className="w-full md:w-1/2 space-y-4 font-bold uppercase">
//               <span className="flex items-center py-2 border-t   border-gray-600 justify-between gap-6 ">
//                 <span className="items-center  flex gap-2 uppercase font-bold text-xl">
//                   <AiOutlineColumnHeight className="text-yellow-500 font-bold" />
//                   <h1>Height:</h1>
//                 </span>
//                 <p className="text-yellow-500 text-xl">{profile?.height}</p>
//               </span>
//               <span className="flex items-center gap-6 py-2 border-t  border-gray-600 justify-between ">
//                 <span className="items-center flex gap-2 uppercase font-bold text-xl">
//                   <FaRegEye className="text-yellow-500 font-bold" />
//                   <h1>Eye Colour:</h1>
//                 </span>
//                 <p className="text-yellow-500 text-xl">{profile?.eyes_color}</p>
//               </span>
//               <span className="flex items-center gap-6 py-2 border-t  border-gray-600 justify-between ">
//                 <span className="items-center flex gap-2 uppercase font-bold text-xl">
//                   <RiScissors2Fill className="text-yellow-500 font-bold" />
//                   <h1>Hair Colour:</h1>
//                 </span>
//                 <p className="text-yellow-500 text-xl">{profile?.hair_color}</p>
//               </span>
//               <span className="flex items-center gap-6 py-2 pb-2 border-t border-b border-gray-600 justify-between ">
//                 <span className="items-center flex gap-2 uppercase font-bold text-xl">
//                   <GiMoebiusStar
//                     size={20}
//                     className="text-yellow-500 font-bold"
//                   />
//                   <h1>Star Sign:</h1>
//                 </span>
//                 <p className="text-yellow-500 text-xl">{profile?.star_sign}</p>
//               </span>
//             </div>

//             <div className="w-full md:w-1/2 space-y-4 my-11 uppercase font-bold ">
//               <h1 className="text-yellow-500 text-xl">Shows</h1>
//               <span className="flex items-center py-2  border-t  border-gray-600 justify-between gap-6 ">
//                 {profile?.shows?.map((s, i) => {
//                   return (
//                     <div
//                       className="flex justify-between items-center gap-6"
//                       key={i}>
//                       <span className="items-center  flex gap-2 uppercase font-bold text-xl">
//                         <ImTicket
//                           size={24}
//                           className="text-yellow-500 font-bold"
//                         />
//                       </span>
//                       <p className="text-yellow-500 text-xl">{s}</p>
//                     </div>
//                   );
//                 })}
//               </span>
//             </div>

//             {/* Subscribe Section */}
//             <div className="w-full">
//               <button
//                 onClick={() => handleServiceSelect(profile?.services)}
//                 className="md:w-1/2 w-full bg-green-500 text-black py-3 rounded-xl font-semibold mb-3 hover:bg-green-700  transition-all transform hover:scale-105 px-6 py-2">
//                 Reserve Me Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showCheckout && <CheckoutModal />}
//       {currentStep === 'details' && selectedService && (
//         <ServiceDetails
//           service={selectedService}
//           onReserve={handleReservation}
//           onBack={handleBack}
//         />
//       )}

//       {currentStep === 'checkout' && bookingDetails && (
//         <BookingPaymentComponent
//           booking={bookingDetails}
//           onBack={handleBack}
//           onComplete={handleComplete}
//         />
//       )}
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default CreatorProfile;

'use client';
import React, { useState } from 'react';
import {
  Play,
  Heart,
  MessageCircle,
  Share2,
  Lock,
  Star,
  Calendar,
  MapPin,
  Camera,
  Video,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { AiOutlineColumnHeight } from 'react-icons/ai';
import { FaRegEye } from 'react-icons/fa';
import { RiScissors2Fill } from 'react-icons/ri';
import { ImTicket } from 'react-icons/im';
import { GiMoebiusStar } from 'react-icons/gi';
import BookingPaymentComponent from '@/components/payment/checkout';
import { ServiceGallery, ServiceDetails } from '@/components/payment/service';

const CreatorProfile = ({
  profileData,
  onSubscribe,
  onMessage,
  onLike,
  onShare,
  stripeConfig = {},
}) => {
  const [activeMedia, setActiveMedia] = useState({
    type: profileData?.mediaPreview?.[0]?.type || 'image',
    src: profileData?.mediaPreview?.[0]?.src || '/api/placeholder/400/600',
    isVideo: profileData?.mediaPreview?.[0]?.type === 'video',
  });

  const [showCheckout, setShowCheckout] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState('gallery');
  const [selectedService, setSelectedService] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

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

  // Default profile data if none provided
  const defaultProfile = {
    name: 'Creator',
    tagline: 'Content Creator',
    location: 'Los Angeles, CA',
    followers: '0',
    posts: '0',
    likes: '0',
    subscriptionPrice: '$9.99/month',
    bio: 'Welcome to my profile! Subscribe for exclusive content.',
    profileImage: '/api/placeholder/96/96',
    stats: {
      photos: 0,
      videos: 0,
      live: 0,
    },
    mediaPreview: [
      { type: 'image', src: '/api/placeholder/120/160', premium: false },
    ],
  };

  const profile = { ...defaultProfile, ...profileData };

  const handleReserveClick = () => {
    setShowCheckout(true);
  };

  const handleSubscribe = () => {
    if (onSubscribe) {
      onSubscribe({
        profileId: profile?.id,
        creatorName: profile?.name,
        subscriptionPrice: profile?.subscriptionPrice,
        stripeData: stripeConfig,
      });
    }
    setShowCheckout(false);
  };

  const nextSlide = () => {
    setCarouselIndex((prev) =>
      prev + 4 >= profile?.mediaPreview.length ? 0 : prev + 4
    );
  };

  const prevSlide = () => {
    setCarouselIndex((prev) =>
      prev - 4 < 0 ? Math.max(0, profile?.mediaPreview.length - 4) : prev - 4
    );
  };

  const visibleItems = profile?.mediaPreview.slice(
    carouselIndex,
    carouselIndex + 4
  );

  const CheckoutModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-2xl max-w-md w-full p-6 border border-purple-500/20">
        <div className="text-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 flex items-center justify-center">
            <img
              src={profile?.profileImage}
              alt={profile?.name}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Subscribe to {profile.name}
          </h3>
          <p className="text-gray-400">
            Get exclusive access to premium content
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white">Monthly Subscription</span>
            <span className="text-2xl font-bold text-purple-400">
              {profile?.subscriptionPrice}
            </span>
          </div>
          <div className="text-sm text-gray-400 space-y-1">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>
                Access to {profile?.stats.photos + profile?.stats.videos}+
                premium posts
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-purple-400" />
              <span>Exclusive videos & photos</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-blue-400" />
              <span>Direct messaging</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleSubscribe}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold mb-3 hover:from-purple-700 hover:to-pink-700 transition-all">
          Subscribe Now
        </button>

        <button
          onClick={() => setShowCheckout(false)}
          className="w-full text-gray-400 py-2 hover:text-white transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );

  // If we're in details or checkout step, render full-screen overlay
  if (currentStep === 'details' || currentStep === 'checkout') {
    return (
      <>
        {/* Full screen overlay that covers everything */}
        <div className="fixed inset-0 bg-gray-900 z-50 overflow-y-auto">
          <div className="min-h-screen w-full">
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
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen  my-11 text-white">
      <div className="w-full mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Media Section */}
          <div className="lg:col-span-1 p-2">
            <div className="relative rounded-2xl overflow-hidden bg-gray-800 aspect-[3/4] mb-6">
              {activeMedia.isVideo ? (
                <video
                  src={activeMedia.src}
                  className="w-full h-full object-cover"
                  controls
                  poster="/api/placeholder/400/600"
                />
              ) : (
                <img
                  src={activeMedia.src}
                  alt="Main content"
                  className="w-full h-full object-fit
                  "
                />
              )}

              {/* Media Controls Overlay */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => onLike && onLike(profile.id, activeMedia)}
                  className="bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onShare && onShare(profile.id, activeMedia)}
                  className="bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Premium Content Indicator */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-purple-600/90 px-3 py-1 rounded-full text-sm font-medium">
                  Premium Content
                </div>
              </div>
            </div>

            {/* Media Carousel */}
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">
                  Recent Posts
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    disabled={carouselIndex === 0}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={carouselIndex + 4 >= profile?.mediaPreview.length}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {visibleItems.map((media, index) => (
                  <div
                    key={carouselIndex + index}
                    className="relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() =>
                      setActiveMedia({
                        type: media.type,
                        src: media.src,
                        isVideo: media.type === 'video',
                      })
                    }>
                    <img
                      src={media.src}
                      alt={`Preview ${carouselIndex + index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />

                    {media.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-6 h-6 text-white drop-shadow-lg" />
                      </div>
                    )}

                    {media.premium && (
                      <div className="absolute top-2 right-2">
                        <Lock className="w-4 h-4 text-yellow-400" />
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                      <div className="text-xs text-white font-medium">
                        {media.type === 'video' ? 'Video' : 'Photo'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {Array.from({
                  length: Math.ceil(profile?.mediaPreview.length / 4),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCarouselIndex(index * 4)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      Math.floor(carouselIndex / 4) === index
                        ? 'bg-purple-400'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Profile Info Section */}
          <div className="space-y-6 w-full lg:col-span-2 p-2">
            {/* Profile Header */}
            <div className="text-left">
              <h1 className="text-3xl md:text-5xl font-alex-brush font-bold text-yellow-500 mb-2">
                {profile?.name}
              </h1>
            </div>

            {/* Bio */}
            <div className="bg-gray-800/50 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-3 text-yellow-500">
                About {profile.name}
              </h3>
              <span className="space-y-4">
                {profile?.bio?.map((p, i) => {
                  return (
                    <p
                      key={i}
                      className="text-gray-300 leading-relaxed">
                      {p}
                    </p>
                  );
                })}
              </span>
            </div>

            <div className="w-full md:w-1/2 space-y-4 font-bold uppercase">
              <span className="flex items-center py-2 border-t   border-gray-600 justify-between gap-6 ">
                <span className="items-center  flex gap-2 uppercase font-bold text-xl">
                  <AiOutlineColumnHeight className="text-yellow-500 font-bold" />
                  <h1>Height:</h1>
                </span>
                <p className="text-yellow-500 text-xl">{profile?.height}</p>
              </span>
              <span className="flex items-center gap-6 py-2 border-t  border-gray-600 justify-between ">
                <span className="items-center flex gap-2 uppercase font-bold text-xl">
                  <FaRegEye className="text-yellow-500 font-bold" />
                  <h1>Eye Colour:</h1>
                </span>
                <p className="text-yellow-500 text-xl">{profile?.eyes_color}</p>
              </span>
              <span className="flex items-center gap-6 py-2 border-t  border-gray-600 justify-between ">
                <span className="items-center flex gap-2 uppercase font-bold text-xl">
                  <RiScissors2Fill className="text-yellow-500 font-bold" />
                  <h1>Hair Colour:</h1>
                </span>
                <p className="text-yellow-500 text-xl">{profile?.hair_color}</p>
              </span>
              <span className="flex items-center gap-6 py-2 pb-2 border-t border-b border-gray-600 justify-between ">
                <span className="items-center flex gap-2 uppercase font-bold text-xl">
                  <GiMoebiusStar
                    size={20}
                    className="text-yellow-500 font-bold"
                  />
                  <h1>Star Sign:</h1>
                </span>
                <p className="text-yellow-500 text-xl">{profile?.star_sign}</p>
              </span>
            </div>

            <div className="w-full md:w-1/2 space-y-4 my-11 uppercase font-bold ">
              <h1 className="text-yellow-500 text-xl">Shows</h1>
              <span className="flex flex-col  py-2   justify-between gap-6 ">
                {profile?.shows?.map((s, i) => {
                  return (
                    <div
                      className="flex justify-between border-t  border-gray-600 items-center gap-6"
                      key={i}>
                      <span className="items-center  flex gap-2 uppercase font-bold text-xl">
                        <ImTicket
                          size={24}
                          className="text-yellow-500 font-bold"
                        />
                      </span>
                      <p className="text-yellow-500 text-xl">{s}</p>
                    </div>
                  );
                })}
              </span>
            </div>

            {/* Subscribe Section */}
            <div className="w-full">
              <button
                onClick={() => handleServiceSelect(profile?.services)}
                className="md:w-1/2 w-full bg-green-500 text-black py-3 rounded-xl font-semibold mb-3 hover:bg-green-700  transition-all transform hover:scale-105 px-6 py-2">
                Reserve Me Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {showCheckout && <CheckoutModal />}
    </div>
  );
};

export default CreatorProfile;
