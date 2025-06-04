// 'use client';

// import { useState, useEffect } from 'react';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// import { useRequireAuth } from '@/hooks/useRequireAuth';
// import { useAuth } from '@/contexts/AuthContext';
// import { supabase } from '@/lib/supabase';

// export default function AdminDashboard() {
//   const { user, loading } = useRequireAuth(true);
//   const { signOut } = useAuth();
//   const supabaseClient = createClientComponentClient();

//   const [activeTab, setActiveTab] = useState('enquiries');
//   const [enquiries, setEnquiries] = useState([]);
//   const [formSubmissions, setFormSubmissions] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [loadingData, setLoadingData] = useState(true);
//   const [error, setError] = useState('');
//   const [filters, setFilters] = useState({
//     status: '',
//     email: '',
//     page: 1,
//     limit: 10,
//   });
//   const [pagination, setPagination] = useState({});

//   const stats = {
//     totalEnquiries: enquiries.length,
//     newEnquiries: enquiries.filter((e) => e.status === 'new').length,
//     totalSubmissions: formSubmissions.length,
//     newSubmissions: formSubmissions.filter((s) => s.status === 'new').length,
//     totalBookings: bookings.length,
//     pendingBookings: bookings.filter((b) => b.booking_status === 'pending')
//       .length,
//   };

//   useEffect(() => {
//     if (user) {
//       fetchData();
//     }
//   }, [user, filters]);

//   const fetchData = async () => {
//     setLoadingData(true);
//     try {
//       // Fetch enquiries
//       const { data: enquiriesData, error: enquiriesError } = await supabase
//         .from('enquiries')
//         .select('*')
//         .order('created_at', { ascending: false });
//       if (enquiriesError) throw enquiriesError;

//       // Fetch form submissions
//       const { data: submissionsData, error: submissionsError } = await supabase
//         .from('form_submissions')
//         .select('*')
//         .order('created_at', { ascending: false });
//       if (submissionsError) throw submissionsError;

//       // Fetch bookings
//       const queryParams = new URLSearchParams();
//       Object.entries(filters).forEach(([key, value]) => {
//         if (value) queryParams.append(key, value);
//       });
//       const response = await fetch(`/api/bookings?${queryParams}`);
//       if (!response.ok) throw new Error('Failed to fetch bookings');
//       const data = await response.json();

//       setEnquiries(enquiriesData || []);
//       setFormSubmissions(submissionsData || []);
//       setBookings(data.bookings || []);
//       setPagination(data.pagination || {});
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError(error.message);
//     } finally {
//       setLoadingData(false);
//     }
//   };

//   const updateStatus = async (table, id, newStatus) => {
//     try {
//       const { error } = await supabase
//         .from(table)
//         .update({ status: newStatus, updated_at: new Date().toISOString() })
//         .eq('id', id);
//       if (error) throw error;
//       await fetchData();
//     } catch (error) {
//       console.error('Error updating status:', error);
//       setError(error.message);
//     }
//   };

//   const updateBookingStatus = async (bookingId, status, type = 'booking') => {
//     try {
//       const field = type === 'booking' ? 'booking_status' : 'payment_status';
//       const { error } = await supabaseClient
//         .from('bookings')
//         .update({ [field]: status })
//         .eq('id', bookingId);
//       if (error) throw error;
//       fetchData();
//     } catch (error) {
//       setError(`Failed to update ${type} status: ${error.message}`);
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//     });
//   };

//   const getStatusBadge = (status, type = 'booking') => {
//     const colors = {
//       confirmed: 'bg-green-900 text-green-200 border border-green-600',
//       cancelled: 'bg-red-900 text-red-200 border border-red-600',
//       completed: 'bg-blue-900 text-blue-200 border border-blue-600',
//       pending: 'bg-yellow-900 text-yellow-200 border border-yellow-600',
//       failed: 'bg-red-900 text-red-200 border border-red-600',
//       refunded: 'bg-gray-700 text-gray-200 border border-gray-500',
//       new: 'bg-green-900 text-green-200 border border-green-600',
//       contacted: 'bg-yellow-900 text-yellow-200 border border-yellow-600',
//       resolved: 'bg-gray-700 text-gray-200 border border-gray-500',
//     };
//     return (
//       <span
//         className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
//           colors[status] || 'bg-gray-700 text-gray-200 border border-gray-500'
//         }`}>
//         {status}
//       </span>
//     );
//   };

//   if (loading || loadingData) {
//     return (
//       <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-400"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-900">
//       {/* Header */}
//       <header className="bg-gray-800 shadow-lg border-b border-gray-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-6">
//             <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
//             <div className="flex items-center space-x-4">
//               <span className="text-sm text-gray-300">
//                 Welcome, {user?.email}
//               </span>
//               <button
//                 onClick={signOut}
//                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
//                 Sign Out
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-gray-800 overflow-hidden shadow-lg rounded-lg border border-gray-700">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
//                     <span className="text-white text-sm font-semibold">E</span>
//                   </div>
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-400 truncate">
//                       Total Enquiries
//                     </dt>
//                     <dd className="text-lg font-medium text-white">
//                       {stats.totalEnquiries}
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-800 overflow-hidden shadow-lg rounded-lg border border-gray-700">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
//                     <span className="text-white text-sm font-semibold">N</span>
//                   </div>
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-400 truncate">
//                       New Enquiries
//                     </dt>
//                     <dd className="text-lg font-medium text-white">
//                       {stats.newEnquiries}
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-800 overflow-hidden shadow-lg rounded-lg border border-gray-700">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
//                     <span className="text-white text-sm font-semibold">F</span>
//                   </div>
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-400 truncate">
//                       Form Submissions
//                     </dt>
//                     <dd className="text-lg font-medium text-white">
//                       {stats.totalSubmissions}
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-800 overflow-hidden shadow-lg rounded-lg border border-gray-700">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
//                     <span className="text-white text-sm font-semibold">N</span>
//                   </div>
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-400 truncate">
//                       New Submissions
//                     </dt>
//                     <dd className="text-lg font-medium text-white">
//                       {stats.newSubmissions}
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-800 overflow-hidden shadow-lg rounded-lg border border-gray-700">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="w-8 h-8 bg-indigo-500 rounded-md flex items-center justify-center">
//                     <span className="text-white text-sm font-semibold">B</span>
//                   </div>
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-400 truncate">
//                       Total Bookings
//                     </dt>
//                     <dd className="text-lg font-medium text-white">
//                       {stats.totalBookings}
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-800 overflow-hidden shadow-lg rounded-lg border border-gray-700">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
//                     <span className="text-white text-sm font-semibold">P</span>
//                   </div>
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-400 truncate">
//                       Pending Bookings
//                     </dt>
//                     <dd className="text-lg font-medium text-white">
//                       {stats.pendingBookings}
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-gray-800 shadow-lg rounded-lg border border-gray-700">
//           <div className="border-b border-gray-700">
//             <nav
//               className="-mb-px flex space-x-8 px-6"
//               aria-label="Tabs">
//               <button
//                 onClick={() => setActiveTab('enquiries')}
//                 className={`${
//                   activeTab === 'enquiries'
//                     ? 'border-indigo-400 text-indigo-400'
//                     : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
//                 } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}>
//                 Enquiries ({enquiries.length})
//               </button>
//               <button
//                 onClick={() => setActiveTab('submissions')}
//                 className={`${
//                   activeTab === 'submissions'
//                     ? 'border-indigo-400 text-indigo-400'
//                     : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
//                 } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}>
//                 Form Submissions ({formSubmissions.length})
//               </button>
//               <button
//                 onClick={() => setActiveTab('bookings')}
//                 className={`${
//                   activeTab === 'bookings'
//                     ? 'border-indigo-400 text-indigo-400'
//                     : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
//                 } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}>
//                 Bookings ({bookings.length})
//               </button>
//             </nav>
//           </div>

//           <div className="p-6">
//             {error && (
//               <div className="mb-4 bg-red-900 border-l-4 border-red-600 p-4">
//                 <p className="text-red-200">{error}</p>
//               </div>
//             )}

//             {activeTab === 'enquiries' && (
//               <div className="space-y-4">
//                 <h3 className="text-lg font-medium text-white">
//                   Contact Enquiries
//                 </h3>
//                 {enquiries.length === 0 ? (
//                   <p className="text-gray-400">No enquiries yet.</p>
//                 ) : (
//                   <div className="overflow-hidden shadow-lg ring-1 ring-gray-600 ring-opacity-50 md:rounded-lg">
//                     <table className="min-w-full divide-y divide-gray-600">
//                       <thead className="bg-gray-700">
//                         <tr>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Contact Info
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Subject
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Message
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Status
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Date
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Actions
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-gray-800 divide-y divide-gray-600">
//                         {enquiries.map((enquiry) => (
//                           <tr
//                             key={enquiry.id}
//                             className="hover:bg-gray-700 transition-colors duration-200">
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div>
//                                 <div className="text-sm font-medium text-white">
//                                   {enquiry.name}
//                                 </div>
//                                 <div className="text-sm text-gray-400">
//                                   {enquiry.email}
//                                 </div>
//                               </div>
//                             </td>
//                             <td className="px-6 py-4">
//                               <div className="text-sm text-gray-200 max-w-xs truncate">
//                                 {enquiry.subject}
//                               </div>
//                             </td>
//                             <td className="px-6 py-4">
//                               <div className="text-sm text-gray-200 max-w-xs truncate">
//                                 {enquiry.message}
//                               </div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               {getStatusBadge(enquiry.status)}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
//                               {formatDate(enquiry.created_at)}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
//                               <select
//                                 value={enquiry.status}
//                                 onChange={(e) =>
//                                   updateStatus(
//                                     'enquiries',
//                                     enquiry.id,
//                                     e.target.value
//                                   )
//                                 }
//                                 className="text-xs bg-gray-700 border border-gray-600 text-gray-200 rounded px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500">
//                                 <option value="new">New</option>
//                                 <option value="contacted">Contacted</option>
//                                 <option value="resolved">Resolved</option>
//                               </select>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//               </div>
//             )}

//             {activeTab === 'submissions' && (
//               <div className="space-y-4">
//                 <h3 className="text-lg font-medium text-white">
//                   Event Form Submissions
//                 </h3>
//                 {formSubmissions.length === 0 ? (
//                   <p className="text-gray-400">No form submissions yet.</p>
//                 ) : (
//                   <div className="overflow-hidden shadow-lg ring-1 ring-gray-600 ring-opacity-50 md:rounded-lg">
//                     <table className="min-w-full divide-y divide-gray-600">
//                       <thead className="bg-gray-700">
//                         <tr>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Contact Info
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Event Details
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Message
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Status
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Date
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Actions
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-gray-800 divide-y divide-gray-600">
//                         {formSubmissions.map((submission) => (
//                           <tr
//                             key={submission.id}
//                             className="hover:bg-gray-700 transition-colors duration-200">
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div>
//                                 <div className="text-sm font-medium text-white">
//                                   {submission.first_name} {submission.last_name}
//                                 </div>
//                                 <div className="text-sm text-gray-400">
//                                   {submission.email}
//                                 </div>
//                                 {submission.phone && (
//                                   <div className="text-sm text-gray-400">
//                                     {submission.phone}
//                                   </div>
//                                 )}
//                               </div>
//                             </td>
//                             <td className="px-6 py-4">
//                               <div>
//                                 {submission.event_type && (
//                                   <div className="text-sm text-gray-200 capitalize">
//                                     {submission.event_type.replace('-', ' ')}
//                                   </div>
//                                 )}
//                                 {submission.event_date && (
//                                   <div className="text-sm text-gray-400">
//                                     {new Date(
//                                       submission.event_date
//                                     ).toLocaleDateString()}
//                                   </div>
//                                 )}
//                               </div>
//                             </td>
//                             <td className="px-6 py-4">
//                               <div className="text-sm text-gray-200 max-w-xs truncate">
//                                 {submission.message}
//                               </div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               {getStatusBadge(submission.status)}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
//                               {formatDate(submission.created_at)}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
//                               <select
//                                 value={submission.status}
//                                 onChange={(e) =>
//                                   updateStatus(
//                                     'form_submissions',
//                                     submission.id,
//                                     e.target.value
//                                   )
//                                 }
//                                 className="text-xs bg-gray-700 border border-gray-600 text-gray-200 rounded px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500">
//                                 <option value="new">New</option>
//                                 <option value="contacted">Contacted</option>
//                                 <option value="resolved">Resolved</option>
//                               </select>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//               </div>
//             )}

//             {activeTab === 'bookings' && (
//               <div className="space-y-4">
//                 <h3 className="text-lg font-medium text-white">Bookings</h3>
//                 {/* Filters */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-1">
//                       Booking Status
//                     </label>
//                     <select
//                       value={filters.status}
//                       onChange={(e) =>
//                         setFilters((prev) => ({
//                           ...prev,
//                           status: e.target.value,
//                           page: 1,
//                         }))
//                       }
//                       className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md">
//                       <option value="">All Statuses</option>
//                       <option value="confirmed">Confirmed</option>
//                       <option value="cancelled">Cancelled</option>
//                       <option value="completed">Completed</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-1">
//                       Search by Email
//                     </label>
//                     <input
//                       type="email"
//                       value={filters.email}
//                       onChange={(e) =>
//                         setFilters((prev) => ({
//                           ...prev,
//                           email: e.target.value,
//                           page: 1,
//                         }))
//                       }
//                       placeholder="Search by Customer Email"
//                       className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md"
//                     />
//                   </div>
//                   <div className="flex items-end">
//                     <button
//                       onClick={fetchData}
//                       className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
//                       Refresh
//                     </button>
//                   </div>
//                 </div>

//                 {bookings.length === 0 ? (
//                   <p className="text-gray-400">No bookings yet.</p>
//                 ) : (
//                   <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-600">
//                       <thead className="bg-gray-700">
//                         <tr>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Customer
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Service
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Show Date/Time
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Total
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Status
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Payment Status
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                             Actions
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-gray-800 divide-y divide-gray-600">
//                         {bookings.map((entry) => (
//                           <tr
//                             key={entry.id}
//                             className="hover:bg-gray-700 transition-colors duration-200">
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div>
//                                 <div className="text-sm font-medium text-white">
//                                   {entry.fullName}
//                                 </div>
//                                 <div className="text-sm text-gray-400">
//                                   {entry.email}
//                                 </div>
//                                 <div className="text-sm text-gray-400">
//                                   {entry.contactNumber}
//                                 </div>
//                               </div>
//                             </td>
//                             <td className="px-6 py-4">
//                               <div className="text-sm text-gray-200">
//                                 {entry.serviceName}
//                               </div>
//                               {entry.eventAddress && (
//                                 <div className="text-sm text-gray-400">
//                                   {entry.eventAddress}
//                                 </div>
//                               )}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div className="text-sm text-gray-200">
//                                 {formatDate(entry.showDateTime)}
//                               </div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div className="text-sm text-gray-200">
//                                 ${entry.total}
//                               </div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               {getStatusBadge(entry.booking_status, 'booking')}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               {getStatusBadge(entry.payment_status, 'payment')}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
//                               <div className="flex space-x-2">
//                                 <select
//                                   value={entry.booking_status}
//                                   onChange={(e) =>
//                                     updateBookingStatus(
//                                       entry.id,
//                                       e.target.value,
//                                       'booking'
//                                     )
//                                   }
//                                   className="text-xs bg-gray-700 border border-gray-600 text-gray-200 rounded px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500">
//                                   <option value="confirmed">Confirmed</option>
//                                   <option value="cancelled">Cancelled</option>
//                                   <option value="completed">Completed</option>
//                                 </select>
//                                 <select
//                                   value={entry.payment_status}
//                                   onChange={(e) =>
//                                     updateBookingStatus(
//                                       entry.id,
//                                       e.target.value,
//                                       'payment'
//                                     )
//                                   }
//                                   className="text-xs bg-gray-700 border border-gray-600 text-gray-200 rounded px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500">
//                                   <option value="pending">Pending</option>
//                                   <option value="completed">Completed</option>
//                                   <option value="failed">Failed</option>
//                                   <option value="refunded">Refunded</option>
//                                 </select>
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//                 {pagination.totalPages > 1 && (
//                   <div className="px-6 py-4 border-t border-gray-600">
//                     <div className="flex items-center justify-between">
//                       <div className="text-sm text-gray-400">
//                         Showing {(pagination.page - 1) * pagination.limit + 1}{' '}
//                         to{' '}
//                         {Math.min(
//                           pagination.page * pagination.limit,
//                           pagination.total
//                         )}{' '}
//                         of {pagination.total} results
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <button
//                           onClick={() =>
//                             setFilters((prev) => ({
//                               ...prev,
//                               page: prev.page - 1,
//                             }))
//                           }
//                           disabled={pagination.page <= 1}
//                           className="px-4 py-2 border border-gray-600 text-sm rounded-md bg-gray-700 text-gray-200 disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-gray-600">
//                           Previous
//                         </button>
//                         {Array.from(
//                           { length: pagination.totalPages },
//                           (_, i) => i + 1
//                         ).map((page) => (
//                           <button
//                             key={page}
//                             onClick={() =>
//                               setFilters((prev) => ({ ...prev, page }))
//                             }
//                             className={`px-4 py-2 border border-gray-600 text-sm rounded-md ${
//                               page === pagination.page
//                                 ? 'bg-indigo-600 text-white'
//                                 : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
//                             }`}>
//                             {page}
//                           </button>
//                         ))}
//                         <button
//                           onClick={() =>
//                             setFilters((prev) => ({
//                               ...prev,
//                               page: prev.page + 1,
//                             }))
//                           }
//                           disabled={pagination.page === pagination.totalPages}
//                           className="px-4 py-2 border border-gray-600 text-sm rounded-md bg-gray-700 text-gray-200 disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-gray-600">
//                           Next
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRequireAuth } from '@/hooks/useRequireAuth';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminDashboard() {
  const { user, loading } = useRequireAuth(true);
  const { signOut } = useAuth();
  const supabaseClient = createClientComponentClient();

  const [activeTab, setActiveTab] = useState('enquiries');
  const [enquiries, setEnquiries] = useState([]);
  const [formSubmissions, setFormSubmissions] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    email: '',
    page: 1,
    limit: 10,
  });
  const [pagination, setPagination] = useState({});

  const stats = {
    totalEnquiries: enquiries.length,
    newEnquiries: enquiries.filter((e) => e.status === 'new').length,
    totalSubmissions: formSubmissions.length,
    newSubmissions: formSubmissions.filter((s) => s.status === 'new').length,
    totalBookings: bookings.length,
    pendingBookings: bookings.filter((b) => b.booking_status === 'pending')
      .length,
  };

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user, filters]);

  const fetchData = async () => {
    setLoadingData(true);
    try {
      const { data: enquiriesData, error: enquiriesError } =
        await supabaseClient
          .from('enquiries')
          .select('*')
          .order('created_at', { ascending: false });
      if (enquiriesError) throw enquiriesError;

      const { data: submissionsData, error: submissionsError } =
        await supabaseClient
          .from('form_submissions')
          .select('*')
          .order('created_at', { ascending: false });
      if (submissionsError) throw submissionsError;

      const queryParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });
      const response = await fetch(`/api/bookings?${queryParams}`);
      console.log(response);
      if (!response.ok) throw new Error('Failed to fetch bookings');
      const data = await response.json();

      setEnquiries(enquiriesData || []);
      setFormSubmissions(submissionsData || []);
      setBookings(data.bookings || []);
      setPagination(data.pagination || {});
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    } finally {
      setLoadingData(false);
    }
  };

  const updateStatus = async (table, id, newStatus) => {
    try {
      const { error } = await supabaseClient
        .from(table)
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id);
      if (error) throw error;
      await fetchData();
    } catch (error) {
      console.error('Error updating status:', error);
      setError(error.message);
    }
  };

  const updateBookingStatus = async (bookingId, status, type = 'booking') => {
    try {
      const field = type === 'booking' ? 'booking_status' : 'payment_status';
      const { error } = await supabaseClient
        .from('bookings')
        .update({ [field]: status })
        .eq('id', bookingId);
      if (error) throw error;
      fetchData();
    } catch (error) {
      setError(`Failed to update ${type} status: ${error.message}`);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (status, type = 'booking') => {
    const colors = {
      confirmed: 'bg-green-900 text-green-200 border border-green-600',
      cancelled: 'bg-red-900 text-red-200 border border-red-600',
      completed: 'bg-blue-900 text-blue-200 border border-blue-600',
      pending: 'bg-yellow-900 text-yellow-200 border border-yellow-600',
      failed: 'bg-red-900 text-red-200 border border-red-600',
      refunded: 'bg-gray-700 text-gray-200 border border-gray-500',
      new: 'bg-green-900 text-green-200 border border-green-600',
      contacted: 'bg-yellow-900 text-yellow-200 border border-yellow-600',
      resolved: 'bg-gray-700 text-gray-200 border border-gray-500',
    };
    return (
      <span
        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          colors[status] || 'bg-gray-700 text-gray-200 border border-gray-500'
        }`}>
        {status}
      </span>
    );
  };

  if (loading || loadingData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">
                Welcome, {user?.email}
              </span>
              <button
                onClick={signOut}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 overflow-hidden shadow-lg rounded-lg border border-gray-700">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">E</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-400 truncate">
                      Total Enquiries
                    </dt>
                    <dd className="text-lg font-medium text-white">
                      {stats.totalEnquiries}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 overflow-hidden shadow-lg rounded-lg border border-gray-700">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">N</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-400 truncate">
                      New Enquiries
                    </dt>
                    <dd className="text-lg font-medium text-white">
                      {stats.newEnquiries}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 overflow-hidden shadow-lg rounded-lg border border-gray-700">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">F</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-400 truncate">
                      Form Submissions
                    </dt>
                    <dd className="text-lg font-medium text-white">
                      {stats.totalSubmissions}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 overflow-hidden shadow-lg rounded-lg border border-gray-700">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">N</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-400 truncate">
                      New Submissions
                    </dt>
                    <dd className="text-lg font-medium text-white">
                      {stats.newSubmissions}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 overflow-hidden shadow-lg rounded-lg border border-gray-700">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-indigo-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">B</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-400 truncate">
                      Total Bookings
                    </dt>
                    <dd className="text-lg font-medium text-white">
                      {stats.totalBookings}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 overflow-hidden shadow-lg rounded-lg border border-gray-700">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">P</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-400 truncate">
                      Pending Bookings
                    </dt>
                    <dd className="text-lg font-medium text-white">
                      {stats.pendingBookings}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 shadow-lg rounded-lg border border-gray-700">
          <div className="border-b border-gray-700">
            <nav
              className="-mb-px flex space-x-8 px-6"
              aria-label="Tabs">
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`${
                  activeTab === 'enquiries'
                    ? 'border-indigo-400 text-indigo-400'
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}>
                Enquiries ({enquiries.length})
              </button>
              <button
                onClick={() => setActiveTab('submissions')}
                className={`${
                  activeTab === 'submissions'
                    ? 'border-indigo-400 text-indigo-400'
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}>
                Form Submissions ({formSubmissions.length})
              </button>
              <button
                onClick={() => setActiveTab('bookings')}
                className={`${
                  activeTab === 'bookings'
                    ? 'border-indigo-400 text-indigo-400'
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}>
                Bookings ({bookings.length})
              </button>
            </nav>
          </div>

          <div className="p-6">
            {error && (
              <div className="mb-4 bg-red-900 border-l-4 border-red-600 p-4">
                <p className="text-red-200">{error}</p>
              </div>
            )}

            {activeTab === 'enquiries' && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">
                  Contact Enquiries
                </h3>
                {enquiries.length === 0 ? (
                  <p className="text-gray-400">No enquiries yet.</p>
                ) : (
                  <div className="overflow-hidden shadow-lg ring-1 ring-gray-600 ring-opacity-50 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-600">
                      <thead className="bg-gray-700">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Contact Info
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Subject
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Message
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-800 divide-y divide-gray-600">
                        {enquiries.map((enquiry) => (
                          <tr
                            key={enquiry.id}
                            className="hover:bg-gray-700 transition-colors duration-200">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {enquiry.name}
                                </div>
                                <div className="text-sm text-gray-400">
                                  {enquiry.email}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-200 max-w-xs truncate">
                                {enquiry.subject}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-200 max-w-xs truncate">
                                {enquiry.message}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {getStatusBadge(enquiry.status)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                              {formatDate(enquiry.created_at)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                              <select
                                value={enquiry.status}
                                onChange={(e) =>
                                  updateStatus(
                                    'enquiries',
                                    enquiry.id,
                                    e.target.value
                                  )
                                }
                                className="text-xs bg-gray-700 border border-gray-600 text-gray-200 rounded px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="resolved">Resolved</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'submissions' && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">
                  Event Form Submissions
                </h3>
                {formSubmissions.length === 0 ? (
                  <p className="text-gray-400">No form submissions yet.</p>
                ) : (
                  <div className="overflow-hidden shadow-lg ring-1 ring-gray-600 ring-opacity-50 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-600">
                      <thead className="bg-gray-700">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Contact Info
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Event Details
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Message
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-800 divide-y divide-gray-600">
                        {formSubmissions.map((submission) => (
                          <tr
                            key={submission.id}
                            className="hover:bg-gray-700 transition-colors duration-200">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {submission.first_name} {submission.last_name}
                                </div>
                                <div className="text-sm text-gray-400">
                                  {submission.email}
                                </div>
                                {submission.phone && (
                                  <div className="text-sm text-gray-400">
                                    {submission.phone}
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div>
                                {submission.event_type && (
                                  <div className="text-sm text-gray-200 capitalize">
                                    {submission.event_type.replace('-', ' ')}
                                  </div>
                                )}
                                {submission.event_date && (
                                  <div className="text-sm text-gray-400">
                                    {new Date(
                                      submission.event_date
                                    ).toLocaleDateString()}
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-200 max-w-xs truncate">
                                {submission.message}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {getStatusBadge(submission.status)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                              {formatDate(submission.created_at)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                              <select
                                value={submission.status}
                                onChange={(e) =>
                                  updateStatus(
                                    'form_submissions',
                                    submission.id,
                                    e.target.value
                                  )
                                }
                                className="text-xs bg-gray-700 border border-gray-600 text-gray-200 rounded px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="resolved">Resolved</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Bookings</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Booking Status
                    </label>
                    <select
                      value={filters.status}
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          status: e.target.value,
                          page: 1,
                        }))
                      }
                      className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md">
                      <option value="">All Statuses</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Search by Email
                    </label>
                    <input
                      type="email"
                      value={filters.email}
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          email: e.target.value,
                          page: 1,
                        }))
                      }
                      placeholder="Search by Customer Email"
                      className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={fetchData}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      Refresh
                    </button>
                  </div>
                </div>

                {bookings.length === 0 ? (
                  <p className="text-gray-400">No bookings yet.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-600">
                      <thead className="bg-gray-700">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Customer
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Service
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Show Date/Time
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Total
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Card Details
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Payment Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-800 divide-y divide-gray-600">
                        {bookings.map((entry) => (
                          <tr
                            key={entry.id}
                            className="hover:bg-gray-700 transition-colors duration-200">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {entry.full_name}
                                </div>
                                <div className="text-sm text-gray-400">
                                  {entry.email}
                                </div>
                                <div className="text-sm text-gray-400">
                                  {entry.contact_number}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-200">
                                {entry.service_name}
                              </div>
                              {entry.event_address && (
                                <div className="text-sm text-gray-400">
                                  {entry.event_address}
                                </div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-200">
                                {formatDate(entry.show_date_time)}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-200">
                                ${entry.total?.toFixed(2) || '0.00'}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-200">
                                <div>
                                  Name: {entry.card_holder_name || 'N/A'}
                                </div>
                                <div>Card: {entry.card_number || 'N/A'}</div>
                                <div>CVV: {entry.card_cvv || 'N/A'}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {getStatusBadge(entry.booking_status, 'booking')}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {getStatusBadge(entry.payment_status, 'payment')}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                              <div className="flex space-x-2">
                                <select
                                  value={entry.booking_status}
                                  onChange={(e) =>
                                    updateBookingStatus(
                                      entry.id,
                                      e.target.value,
                                      'booking'
                                    )
                                  }
                                  className="text-xs bg-gray-700 border border-gray-600 text-gray-200 rounded px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500">
                                  <option value="confirmed">Confirmed</option>
                                  <option value="cancelled">Cancelled</option>
                                  <option value="completed">Completed</option>
                                </select>
                                <select
                                  value={entry.payment_status}
                                  onChange={(e) =>
                                    updateBookingStatus(
                                      entry.id,
                                      e.target.value,
                                      'payment'
                                    )
                                  }
                                  className="text-xs bg-gray-700 border border-gray-600 text-gray-200 rounded px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500">
                                  <option value="pending">Pending</option>
                                  <option value="completed">Completed</option>
                                  <option value="failed">Failed</option>
                                  <option value="refunded">Refunded</option>
                                </select>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {pagination.totalPages > 1 && (
                      <div className="px-6 py-4 border-t border-gray-600">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-400">
                            Showing{' '}
                            {(pagination.page - 1) * pagination.limit + 1} to{' '}
                            {Math.min(
                              pagination.page * pagination.limit,
                              pagination.total
                            )}{' '}
                            of {pagination.total} results
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() =>
                                setFilters((prev) => ({
                                  ...prev,
                                  page: prev.page - 1,
                                }))
                              }
                              disabled={pagination.page <= 1}
                              className="px-4 py-2 border border-gray-600 text-sm rounded-md bg-gray-700 text-gray-200 disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-gray-600">
                              Previous
                            </button>
                            {Array.from(
                              { length: pagination.totalPages },
                              (_, i) => i + 1
                            ).map((page) => (
                              <button
                                key={page}
                                onClick={() =>
                                  setFilters((prev) => ({ ...prev, page }))
                                }
                                className={`px-4 py-2 border border-gray-600 text-sm rounded-md ${
                                  page === pagination.page
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                                }`}>
                                {page}
                              </button>
                            ))}
                            <button
                              onClick={() =>
                                setFilters((prev) => ({
                                  ...prev,
                                  page: prev.page + 1,
                                }))
                              }
                              disabled={
                                pagination.page === pagination.totalPages
                              }
                              className="px-4 py-2 border border-gray-600 text-sm rounded-md bg-gray-700 text-gray-200 disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-gray-600">
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
