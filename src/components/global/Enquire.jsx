// 'use client';

// import { useState } from 'react';

// export default function Enquire({ button_label = 'enquire now' }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [status, setStatus] = useState({
//     submitted: false,
//     submitting: false,
//     info: { error: false, msg: null },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.status === 200) {
//         setStatus({
//           submitted: true,
//           submitting: false,
//           info: { error: false, msg: data.message },
//         });
//         setFormData({
//           name: '',
//           email: '',
//           subject: '',
//           message: '',
//         });
//       } else {
//         setStatus({
//           submitted: false,
//           submitting: false,
//           info: { error: true, msg: data.message || 'Something went wrong' },
//         });
//       }
//     } catch (error) {
//       setStatus({
//         submitted: false,
//         submitting: false,
//         info: { error: true, msg: 'Unable to submit the form' },
//       });
//     }
//   };

//   return (
//     <div className=" py-12 px-4 sm:px-6 lg:px-8">
//       <div className="md:max-w-3xl w-full  md:mx-auto">
//         <div className="mt-12">
//           {status.submitted ? (
//             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-8">
//               <span className="block sm:inline">{status.info.msg}</span>
//             </div>
//           ) : null}

//           {status.info.error ? (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-8">
//               <span className="block sm:inline">{status.info.msg}</span>
//             </div>
//           ) : null}

//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6">
//               {/* Name */}
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   required
//                   placeholder="name*"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="py-3 px-4 block w-full text-black placeholder-black shadow-sm bg-white focus:ring-pink-500 focus:border-pink-500 border border-gray-300 rounded-md"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   required
//                   placeholder="email*"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="py-3 px-4 block w-full text-black placeholder-black shadow-sm bg-white focus:ring-pink-500 focus:border-pink-500 border border-gray-300 rounded-md"
//                 />
//               </div>

//               {/* Phone */}
//               <div>
//                 <input
//                   type="text"
//                   name="subject"
//                   id="subject"
//                   required
//                   placeholder="phone*"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="py-3 px-4 block w-full text-black placeholder-black shadow-sm bg-white focus:ring-pink-500 focus:border-pink-500 border border-gray-300 rounded-md"
//                 />
//               </div>

//               {/* Message (spans 3 columns on md screens) */}
//               <div className="md:col-span-3">
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={6}
//                   required
//                   placeholder="message*"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="py-3 px-4 block w-full text-black placeholder-black bg-white shadow-sm focus:ring-pink-500 focus:border-pink-500 border border-gray-300 rounded-md"
//                 />
//               </div>
//             </div>

//             <div className="flex justify-center items-center mt-4">
//               <button
//                 type="submit"
//                 disabled={status.submitting}
//                 className="w-fit inline-flex justify-center uppercase py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50">
//                 {status.submitting ? 'Submitting...' : button_label}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// components/EnquireForm.js - Updated version of your original form
'use client';

import { useState } from 'react';

export default function EnquireForm({ button_label = 'enquire now' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 200) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: data.message },
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: data.message || 'Something went wrong' },
        });
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Unable to submit the form' },
      });
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="md:max-w-3xl w-full md:mx-auto">
        <div className="mt-12">
          {status.submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-8">
              <span className="block sm:inline">{status.info.msg}</span>
            </div>
          ) : null}

          {status.info.error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-8">
              <span className="block sm:inline">{status.info.msg}</span>
            </div>
          ) : null}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full text-black placeholder-black shadow-sm bg-white focus:ring-pink-500 focus:border-pink-500 border border-gray-300 rounded-md"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full text-black placeholder-black shadow-sm bg-white focus:ring-pink-500 focus:border-pink-500 border border-gray-300 rounded-md"
                />
              </div>

              {/* Subject (Note: your original had placeholder "phone*" but name "subject") */}
              <div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="subject*"
                  value={formData.subject}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full text-black placeholder-black shadow-sm bg-white focus:ring-pink-500 focus:border-pink-500 border border-gray-300 rounded-md"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-3">
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="message*"
                  value={formData.message}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full text-black placeholder-black bg-white shadow-sm focus:ring-pink-500 focus:border-pink-500 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="flex justify-center items-center mt-4">
              <button
                type="submit"
                disabled={status.submitting}
                className="w-fit inline-flex justify-center uppercase py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50">
                {status.submitting ? 'Submitting...' : button_label}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
