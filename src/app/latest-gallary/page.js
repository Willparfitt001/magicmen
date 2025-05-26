// 'use client';

// import MagicMenLayout from '@/components/home/naviagation';
// import GeneralHeroSection from '@/components/home/GeneralHeroSection';
// import Footer from '@/components/home/Footer';
// import CustomH1 from '@/components/home/heading';
// import { FaFacebook } from 'react-icons/fa';
// import { FaTwitter } from 'react-icons/fa';
// import { IoMailOutline } from 'react-icons/io5';
// import { FaPinterest } from 'react-icons/fa6';

// const gallary_data = [
//   {
//     link: '/latest-gallary/19th-feb-melb',
//     label: '19th Feb Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC09124-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/12th-feb-melb',

//     label: '12th Feb Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC08760-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/5th-feb-melb',

//     label: '5th Feb Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC8990-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/8th-feb-melb',

//     label: '8th Feb Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC08200-320x220.jpeg',
//   },
//   {
//     link: '/latest-gallary/8th-dec-melb',

//     label: '18th Dec Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC07912-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/8th-jan-melb',

//     label: '8th Jan Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC08200-320x220.jpeg',
//   },
//   {
//     link: '/latest-gallary/11th-dec-melb',

//     label: '11th Dec Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-6-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/4th-melb',

//     label: '4th Dec Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-15-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/27th-nov-melb',

//     label: '27th Nov Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-21-2-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/20th-nov-melb',

//     label: '20th Nov Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-29-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/20th-feb-melb',

//     label: '20th Feb Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-21-1-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/10th-july-melb',

//     label: '10th July Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-84-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/3rd-july-melb',

//     label: '3rd July Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-16-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/15th-may-melb',

//     label: '15th MAy Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-130-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/8th-may-melb',

//     label: '8th May Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/184366417_3841977029261152_8308577572101770334_n-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/1st-may-melb',

//     label: '1st May Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-63-320x220.jpg',
//   },

//   {
//     link: '/latest-gallary/24th-april-melb',

//     label: '24th april Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-46-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/17th-april-melb',

//     label: '17th april Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-155-320x220.jpg',
//   },
//   {
//     link: '#',
//     label: '12th march Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/IMG_8601-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/20th-march-melb',

//     label: '20th March Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/IMG_5927-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/13th-march-melb',

//     label: '13th March Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-56-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/6th-march-melb',

//     label: '6th march Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/IMG_1576-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/27th-feb-melb',

//     label: '27th Feb Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/IMG_9773-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/20th-feb-melb',

//     label: '20th feb Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/IMG_8947-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/6th-feb-melb',

//     label: '6th feb Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/IMG_6198-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/20th-nov-melb',

//     label: '20th Nov Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-29-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/20th-feb-melb',

//     label: '20th Feb Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-21-1-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/10th-july-melb',

//     label: '10th July Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-84-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/3rd-july-melb',

//     label: '3rd July Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-16-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/15th-may-melb',

//     label: '15th MAy Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-130-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/8th-may-melb',

//     label: '8th May Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/184366417_3841977029261152_8308577572101770334_n-320x220.jpg',
//   },
//   {
//     link: '/latest-gallary/1st-may-melb',

//     label: '1st May Melb',
//     image:
//       'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-63-320x220.jpg',
//   },
// ];

// export default function LatestGallaryPage() {
//   return (
//     <div>
//       <MagicMenLayout height="h-[50vh]">
//         <GeneralHeroSection />
//       </MagicMenLayout>
//       <main className="bg-black pt-24">
//         <div className="w-full p-2 space-y-6 text-center mx-auto text-white">
//           <CustomH1 text={`Photos from our weekly event`} />
//           <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
//             {gallary_data.map((d, i) => {
//               return (
//                 <GallaryList
//                   key={i}
//                   data={d}
//                 />
//               );
//             })}
//           </div>
//         </div>
//         {/* share icon */}
//         <div className="text-white mt-11 p-2 w-full md:w-4/5   mx-auto flex flex-col justify-center items-center">
//           <h2 className="text-yellow-500/90 mb-2 ">Share Gallaries</h2>
//           <hr className="w-16 h-4 border-b-gray-500" />
//           <div className="flex items-center gap-2 my-4">
//             <a
//               className="flex flex-col bg-blue-700 text-white p-2 rounded-full justify-center items-center"
//               href="https://www.facebook.com/sharer.php?u=https://www.magicmen.com.au/latest-gallery/">
//               <FaFacebook />
//             </a>
//             <a
//               href="https://twitter.com/share?url=https://www.magicmen.com.au/latest-gallery/"
//               className="flex flex-col bg-blue-400 text-white p-2 rounded-full justify-center items-center">
//               <FaTwitter />
//             </a>
//             <a
//               className="flex flex-col bg-orange-400 text-white p-2 rounded-full justify-center items-center"
//               href="mailto:enteryour@addresshere.com">
//               <IoMailOutline />
//             </a>
//             <a
//               className="flex flex-col bg-red-700 text-white p-2 rounded-full justify-center items-center"
//               href="https://pinterest.com/pin/create/button/?url=https://www.magicmen.com.au/latest-gallery/&media=https://www.magicmen.com.au/wp-content/uploads/He-Must-Be-Professional.jpeg&description=Latest%20Gallery">
//               <FaPinterest />
//             </a>
//           </div>
//         </div>

//         <div className="w-full md:w-4/5 space-y-4 mx-auto text-white text-center px-4 my-11">
//           <h1 className="font-roboto text-xl md:text-2xl uppercase font-bold">
//             **ATTENTION LADIES**{' '}
//             <b className="text-yellow-600">www.magicmen.com.au</b>
//           </h1>
//           <p>
//             Most Lavish Ladies Night Out Experience a ladies night out with the
//             girls you won’t forget! Hens parties, birthdays and ladies night
//             out; Come see Melbourne’s award winning Magic Men show live on stage
//             every Saturday night. Dance, drink and cheer the night away as we
//             bring on Melbourne’s hottest entertainment and heart stopping
//             action.
//           </p>
//           <p>Details: www.magicmen.com.au</p>

//           <span className="space-y-6">
//             <CustomH1 text={`Enter the world of Magic Men, are you ready?`} />
//             <a
//               href="#"
//               className="uppercase block bg-fuchsia-600 hover:bg-fuchsia-900 text-white rounded-full w-40 mx-auto p-3 text-sm font-medium font-roboto text-center">
//               BOok now
//             </a>
//           </span>
//         </div>
//       </main>
//       <Footer></Footer>
//     </div>
//   );
// }

// function GallaryList({ data }) {
//   return (
//     <div className="text-white w-full ">
//       <a
//         className="space-y-4"
//         href={data?.link}>
//         <img
//           className="border border-yellow-500/90 object-cover"
//           alt="hjdd"
//           src={data?.image}
//         />
//         <p className="font-bold uppercase">{data?.label}</p>
//       </a>
//     </div>
//   );
// }

'use client';

import MagicMenLayout from '@/components/home/naviagation';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
import Footer from '@/components/home/Footer';
import CustomH1 from '@/components/home/heading';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { FaPinterest } from 'react-icons/fa6';

const gallary_data = [
  {
    link: '/latest-gallary/19th-feb-melb',
    label: '19th Feb Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC09124-320x220.jpg',
  },
  {
    link: '/latest-gallary/12th-feb-melb',
    label: '12th Feb Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC08760-320x220.jpg',
  },
  {
    link: '/latest-gallary/5th-feb-melb',
    label: '5th Feb Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC8990-320x220.jpg',
  },
  {
    link: '/latest-gallary/8th-feb-melb',
    label: '8th Feb Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC08200-320x220.jpeg',
  },
  {
    link: '/latest-gallary/8th-dec-melb',
    label: '18th Dec Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC07912-320x220.jpg',
  },
  {
    link: '/latest-gallary/8th-jan-melb',
    label: '8th Jan Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/DSC08200-320x220.jpeg',
  },
  {
    link: '/latest-gallary/11th-dec-melb',
    label: '11th Dec Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-6-320x220.jpg',
  },
  {
    link: '/latest-gallary/4th-melb',
    label: '4th Dec Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-15-320x220.jpg',
  },
  {
    link: '/latest-gallary/27th-nov-melb',
    label: '27th Nov Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-21-2-320x220.jpg',
  },
  {
    link: '/latest-gallary/20th-nov-melb',
    label: '20th Nov Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-29-320x220.jpg',
  },
  {
    link: '/latest-gallary/20th-feb-melb',
    label: '20th Feb Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-21-1-320x220.jpg',
  },
  {
    link: '/latest-gallary/10th-july-melb',
    label: '10th July Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-84-320x220.jpg',
  },
  {
    link: '/latest-gallary/3rd-july-melb',
    label: '3rd July Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-16-320x220.jpg',
  },
  {
    link: '/latest-gallary/15th-may-melb',
    label: '15th May Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-130-320x220.jpg',
  },
  {
    link: '/latest-gallary/8th-may-melb',
    label: '8th May Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/184366417_3841977029261152_8308577572101770334_n-320x220.jpg',
  },
  {
    link: '/latest-gallary/1st-may-melb',
    label: '1st May Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-63-320x220.jpg',
  },
  {
    link: '/latest-gallary/24th-april-melb',
    label: '24th April Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-46-320x220.jpg',
  },
  {
    link: '/latest-gallary/17th-april-melb',
    label: '17th April Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-155-320x220.jpg',
  },
  {
    link: '#',
    label: '12th March Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/IMG_8601-320x220.jpg',
  },
  {
    link: '/latest-gallary/20th-march-melb',
    label: '20th March Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/IMG_5927-320x220.jpg',
  },
  {
    link: '/latest-gallary/13th-march-melb',
    label: '13th March Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/MM-56-320x220.jpg',
  },
  {
    link: '/latest-gallary/6th-march-melb',
    label: '6th March Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/IMG_1576-320x220.jpg',
  },
  {
    link: '/latest-gallary/27th-feb-melb',
    label: '27th Feb Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/IMG_9773-320x220.jpg',
  },
  {
    link: '/latest-gallary/20th-feb-melb',
    label: '20th Feb Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/IMG_8947-320x220.jpg',
  },
  {
    link: '/latest-gallary/6th-feb-melb',
    label: '6th Feb Melb',
    image:
      'https://cdn-blhad.nitrocdn.com/YjoyyGWRYAkynLQQCrAzLiCDRqOcqPAa/assets/images/optimized/rev-5dab2d9/www.magicmen.com.au/wp-content/uploads/IMG_6198-320x220.jpg',
  },
];

export default function LatestGallaryPage() {
  return (
    <div>
      <MagicMenLayout height="h-[50vh]">
        <GeneralHeroSection />
      </MagicMenLayout>
      <main className="bg-black pt-16 sm:pt-20 md:pt-24">
        <div className="w-full p-2 sm:p-4 md:p-6 space-y-6 md:space-y-8 text-center mx-auto text-white">
          <CustomH1 text={`Photos from our weekly event`} />
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4 md:px-6">
            {gallary_data.map((d, i) => {
              return (
                <GallaryList
                  key={i}
                  data={d}
                />
              );
            })}
          </div>
        </div>

        {/* Share icons section */}
        <div className="text-white mt-8 sm:mt-11 p-4 sm:p-6 w-full md:w-4/5 mx-auto flex flex-col justify-center items-center">
          <h2 className="text-yellow-500/90 mb-2 text-lg sm:text-xl">
            Share Gallery
          </h2>
          <hr className="w-16 h-0.5 border-b border-gray-500 mb-4" />
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              className="flex bg-blue-700 hover:bg-blue-800 transition-colors text-white p-2 sm:p-3 rounded-full"
              href="https://www.facebook.com/sharer.php?u=https://www.magicmen.com.au/latest-gallery/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook">
              <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://twitter.com/share?url=https://www.magicmen.com.au/latest-gallery/"
              className="flex bg-blue-400 hover:bg-blue-500 transition-colors text-white p-2 sm:p-3 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter">
              <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              className="flex bg-orange-400 hover:bg-orange-500 transition-colors text-white p-2 sm:p-3 rounded-full"
              href="mailto:enteryour@addresshere.com"
              aria-label="Share via Email">
              <IoMailOutline className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              className="flex bg-red-700 hover:bg-red-800 transition-colors text-white p-2 sm:p-3 rounded-full"
              href="https://pinterest.com/pin/create/button/?url=https://www.magicmen.com.au/latest-gallery/&media=https://www.magicmen.com.au/wp-content/uploads/He-Must-Be-Professional.jpeg&description=Latest%20Gallery"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Pinterest">
              <FaPinterest className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Bottom content section */}
        <div className="w-full md:w-4/5 space-y-4 sm:space-y-6 mx-auto text-white text-center px-4 sm:px-6 my-8 sm:my-11">
          <h1 className="font-roboto text-lg sm:text-xl md:text-2xl uppercase font-bold leading-tight">
            **ATTENTION LADIES**{' '}
            <b className="text-yellow-600 block sm:inline mt-1 sm:mt-0">
              www.magicmen.com.au
            </b>
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            {`  Most Lavish Ladies Night Out Experience a ladies night out with the
            girls you won't forget! Hens parties, birthdays and ladies night
            out; Come see Melbourne's award winning Magic Men show live on stage
            every Saturday night. Dance, drink and cheer the night away as we
            bring on Melbourne's hottest entertainment and heart stopping
            action.`}
          </p>
          <p className="text-sm sm:text-base font-medium">
            Details: www.magicmen.com.au
          </p>

          <div className="space-y-4 sm:space-y-6 pt-4">
            <CustomH1 text={`Enter the world of Magic Men, are you ready?`} />
            <a
              href="#"
              className="uppercase inline-block bg-fuchsia-600 hover:bg-fuchsia-700 active:bg-fuchsia-800 transition-colors text-white rounded-full w-32 sm:w-40 mx-auto p-2 sm:p-3 text-xs sm:text-sm font-medium font-roboto text-center">
              BOOK NOW
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function GallaryList({ data }) {
  return (
    <div className="text-white w-full">
      <a
        className="block space-y-2 md:space-y-4 group"
        href={data?.link}>
        <div className="relative overflow-hidden  border border-yellow-500/90 hover:border-yellow-400 transition-colors">
          <img
            className="w-full h-48 sm:h-52 md:h-44 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            alt={data?.label || 'Gallery image'}
            src={data?.image}
            loading="lazy"
          />
        </div>
        <p className="font-bold uppercase text-sm sm:text-base md:text-sm lg:text-base px-2 md:px-0 leading-tight group-hover:text-yellow-400 transition-colors">
          {data?.label}
        </p>
      </a>
    </div>
  );
}
