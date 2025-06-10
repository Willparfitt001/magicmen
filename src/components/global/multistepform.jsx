// 'use client';
// import React, { useState } from 'react';

// const ModernContactForm = ({
//   title = 'Contact Us',
//   subtitle = 'Get in touch with our team',
//   containerClass = '',
//   formClass = '',
//   showGradientLine = true,
// }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     eventType: '',
//     eventDate: '',
//     message: '',
//     agreeToTerms: false,
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const formFields = [
//     {
//       name: 'firstName',
//       label: 'First Name',
//       type: 'text',
//       placeholder: 'Enter your first name',
//       required: true,
//     },
//     {
//       name: 'lastName',
//       label: 'Last Name',
//       type: 'text',
//       placeholder: 'Enter your last name',
//       required: true,
//     },
//     {
//       name: 'email',
//       label: 'Email Address',
//       type: 'email',
//       placeholder: 'Enter your email',
//       required: true,
//     },
//     {
//       name: 'phone',
//       label: 'Phone Number',
//       type: 'tel',
//       placeholder: 'Enter your phone number',
//     },
//     {
//       name: 'eventType',
//       label: 'Event Type',
//       type: 'select',
//       placeholder: 'Select event type',
//       options: [
//         { value: 'hens-party', label: 'Hens Party' },
//         { value: 'bucks-party', label: 'Bucks Party' },
//         { value: 'birthday', label: 'Birthday Party' },
//         { value: 'corporate', label: 'Corporate Event' },
//         { value: 'other', label: 'Other' },
//       ],
//     },
//     {
//       name: 'eventDate',
//       label: 'Event Date',
//       type: 'date',
//     },
//     {
//       name: 'message',
//       label: 'Message',
//       type: 'textarea',
//       placeholder: 'Tell us about your event...',
//       required: true,
//       rows: 5,
//     },
//     {
//       name: 'agreeToTerms',
//       label: 'I agree to the terms and conditions',
//       type: 'checkbox',
//       required: true,
//     },
//   ];

//   const handleInputChange = (name, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: '',
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     formFields.forEach((field) => {
//       const value = formData[field.name] || '';

//       // Required field validation
//       if (field.required && !value.toString().trim()) {
//         newErrors[field.name] = `${field.label} is required`;
//       }

//       // Email validation
//       if (
//         field.type === 'email' &&
//         value &&
//         !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
//       ) {
//         newErrors[field.name] = 'Please enter a valid email address';
//       }

//       // Phone validation
//       if (
//         field.type === 'tel' &&
//         value &&
//         !/^[\+]?[\d\s\-\(\)]{10,}$/.test(value)
//       ) {
//         newErrors[field.name] = 'Please enter a valid phone number';
//       }
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsSubmitting(true);
//     setSuccessMessage('');
//     setErrorMessage('');

//     try {
//       const response = await fetch('/api/form-submission', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setSuccessMessage(result.message);
//         // Reset form
//         setFormData({
//           firstName: '',
//           lastName: '',
//           email: '',
//           phone: '',
//           eventType: '',
//           eventDate: '',
//           message: '',
//           agreeToTerms: false,
//         });
//       } else {
//         setErrorMessage(
//           result.message || 'Failed to submit form. Please try again.'
//         );
//       }
//     } catch (error) {
//       setErrorMessage(
//         'Network error. Please check your connection and try again.'
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className={`bg-transparent text-white py-16 ${containerClass}`}>
//       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className={`bg-white rounded-2xl shadow-sm p-8 ${formClass}`}>
//           <div className="space-y-6">
//             {formFields.map((field) => (
//               <FormField
//                 key={field.name}
//                 field={field}
//                 value={formData[field.name] || ''}
//                 onChange={(value) => handleInputChange(field.name, value)}
//                 error={errors[field.name]}
//               />
//             ))}
//           </div>

//           {/* Messages */}
//           {successMessage && (
//             <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
//               <div className="flex items-center">
//                 <svg
//                   className="w-5 h-5 text-green-600 mr-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 <p className="text-green-800 text-sm">{successMessage}</p>
//               </div>
//             </div>
//           )}

//           {errorMessage && (
//             <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
//               <div className="flex items-center">
//                 <svg
//                   className="w-5 h-5 text-red-600 mr-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//                 <p className="text-red-800 text-sm">{errorMessage}</p>
//               </div>
//             </div>
//           )}

//           {/* Submit Button */}
//           <div className="mt-8">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
//               {isSubmitting ? (
//                 <div className="flex items-center justify-center">
//                   <svg
//                     className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24">
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Processing...
//                 </div>
//               ) : (
//                 'Send Message'
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// // FormField Component (same as before)
// const FormField = ({ field, value, onChange, error }) => {
//   const {
//     name,
//     label,
//     type = 'text',
//     placeholder,
//     required = false,
//     options = [],
//     rows = 4,
//   } = field;

//   const baseInputClass = `w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
//     error ? 'border-red-500 focus:ring-red-500' : ''
//   }`;

//   const renderInput = () => {
//     switch (type) {
//       case 'textarea':
//         return (
//           <textarea
//             id={name}
//             name={name}
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//             placeholder={placeholder}
//             rows={rows}
//             className={`${baseInputClass} resize-none`}
//             required={required}
//           />
//         );

//       case 'select':
//         return (
//           <select
//             id={name}
//             name={name}
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//             className={baseInputClass}
//             required={required}>
//             <option value="">{placeholder || `Select ${label}`}</option>
//             {options.map((option) => (
//               <option
//                 key={option.value}
//                 value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         );

//       case 'checkbox':
//         return (
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id={name}
//               name={name}
//               checked={value}
//               onChange={(e) => onChange(e.target.checked)}
//               className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
//               required={required}
//             />
//             <label
//               htmlFor={name}
//               className="ml-3 text-sm text-gray-700">
//               {label}
//             </label>
//           </div>
//         );

//       default:
//         return (
//           <input
//             type={type}
//             id={name}
//             name={name}
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//             placeholder={placeholder}
//             className={baseInputClass}
//             required={required}
//           />
//         );
//     }
//   };

//   if (type === 'checkbox') {
//     return (
//       <div>
//         {renderInput()}
//         {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <label
//         htmlFor={name}
//         className="block text-sm font-medium text-gray-700 mb-2">
//         {label}
//         {required && <span className="text-red-500 ml-1">*</span>}
//       </label>
//       {renderInput()}
//       {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
//     </div>
//   );
// };

// export { ModernContactForm, FormField };
// export default ModernContactForm;

'use client';
import React, { useState } from 'react';

const ModernContactForm = ({
  title = 'Contact Us',
  subtitle = 'Get in touch with our team',
  containerClass = '',
  formClass = '',
  showGradientLine = true,
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const formFields = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'Enter your first name',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Enter your last name',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email',
      required: true,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Enter your phone number',
    },
    {
      name: 'eventType',
      label: 'Event Type',
      type: 'select',
      placeholder: 'Select event type',
      options: [
        { value: 'hens-party', label: 'Hens Party' },
        { value: 'bucks-party', label: 'Bucks Party' },
        { value: 'birthday', label: 'Birthday Party' },
        { value: 'corporate', label: 'Corporate Event' },
        { value: 'other', label: 'Other' },
      ],
    },
    {
      name: 'eventDate',
      label: 'Event Date',
      type: 'date',
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Tell us about your event...',
      required: true,
      rows: 5,
    },
    {
      name: 'agreeToTerms',
      label: 'I agree to the terms and conditions',
      type: 'checkbox',
      required: true,
    },
  ];

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    formFields.forEach((field) => {
      const value = formData[field.name] || '';

      // Required field validation
      if (field.required && !value.toString().trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }

      // Email validation
      if (
        field.type === 'email' &&
        value &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ) {
        newErrors[field.name] = 'Please enter a valid email address';
      }

      // Phone validation
      if (
        field.type === 'tel' &&
        value &&
        !/^[\+]?[\d\s\-\(\)]{10,}$/.test(value)
      ) {
        newErrors[field.name] = 'Please enter a valid phone number';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(result.message);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          message: '',
          agreeToTerms: false,
        });
      } else {
        setErrorMessage(
          result.message || 'Failed to submit form. Please try again.'
        );
      }
    } catch (error) {
      setErrorMessage(
        'Network error. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`bg-transparent mx-auto text-white py-16 ${containerClass}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className={`bg-white rounded-2xl shadow-sm p-8 ${formClass}`}>
              <div className="space-y-6">
                {formFields.map((field) => (
                  <FormField
                    key={field.name}
                    field={field}
                    value={formData[field.name] || ''}
                    onChange={(value) => handleInputChange(field.name, value)}
                    error={errors[field.name]}
                  />
                ))}
              </div>

              {/* Messages */}
              {successMessage && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2"
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
                    <p className="text-green-800 text-sm">{successMessage}</p>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-red-800 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FormField Component
const FormField = ({ field, value, onChange, error }) => {
  const {
    name,
    label,
    type = 'text',
    placeholder,
    required = false,
    options = [],
    rows = 4,
  } = field;

  const baseInputClass = `w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-black placeholder-gray-500 ${
    error ? 'border-red-500 focus:ring-red-500' : ''
  }`;

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={rows}
            className={`${baseInputClass} resize-none`}
            required={required}
          />
        );

      case 'select':
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={baseInputClass}
            required={required}>
            <option value="">{placeholder || `Select ${label}`}</option>
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'checkbox':
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              id={name}
              name={name}
              checked={value}
              onChange={(e) => onChange(e.target.checked)}
              className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              required={required}
            />
            <label
              htmlFor={name}
              className="ml-3 text-sm text-gray-700">
              {label}
            </label>
          </div>
        );

      default:
        return (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={baseInputClass}
            required={required}
          />
        );
    }
  };

  if (type === 'checkbox') {
    return (
      <div>
        {renderInput()}
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    );
  }

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {renderInput()}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export { ModernContactForm, FormField };
export default ModernContactForm;
