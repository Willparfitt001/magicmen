// // pages/admin/dashboard.js or app/admin/dashboard/page.js
// 'use client';

// import { useState, useEffect } from 'react';
// import { useRequireAuth } from '@/hooks/useRequireAuth';
// import { useAuth } from '@/contexts/AuthContext';
// import { supabase } from '@/lib/supabase';

// export default function AdminDashboard() {
//   const { user, loading } = useRequireAuth(true);
//   const { signOut } = useAuth();

//   const [activeTab, setActiveTab] = useState('enquiries');
//   const [enquiries, setEnquiries] = useState([]);
//   const [formSubmissions, setFormSubmissions] = useState([]);
//   const [loadingData, setLoadingData] = useState(true);
//   const [stats, setStats] = useState({
//     totalEnquiries: 0,
//     newEnquiries: 0,
//     totalSubmissions: 0,
//     newSubmissions: 0,
//   });

//   useEffect(() => {
//     if (user) {
//       fetchData();
//     }
//   }, [user]);

//   const fetchData = async () => {
//     setLoadingData(true);
//     try {
//       // Fetch enquiries
//       const { data: enquiriesData, error: enquiriesError } = await supabase
//         .from('enquiries')
//         .select('*')
//         .order('created_at', { ascending: false });

//       console.log('enwuiry data', enquiriesData);

//       if (enquiriesError) throw enquiriesError;

//       // Fetch form submissions
//       const { data: submissionsData, error: submissionsError } = await supabase
//         .from('form_submissions')
//         .select('*')
//         .order('created_at', { ascending: false });

//       if (submissionsError) throw submissionsError;

//       setEnquiries(enquiriesData || []);
//       setFormSubmissions(submissionsData || []);

//       // Calculate stats
//       setStats({
//         totalEnquiries: enquiriesData?.length || 0,
//         newEnquiries:
//           enquiriesData?.filter((e) => e.status === 'new').length || 0,
//         totalSubmissions: submissionsData?.length || 0,
//         newSubmissions:
//           submissionsData?.filter((s) => s.status === 'new').length || 0,
//       });
//     } catch (error) {
//       console.error('Error fetching data:', error);
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

//       // Refresh data
//       await fetchData();
//     } catch (error) {
//       console.error('Error updating status:', error);
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

//   if (loading || loadingData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-6">
//             <h1 className="text-3xl font-bold text-gray-900">
//               Admin Dashboard
//             </h1>
//             <div className="flex items-center space-x-4">
//               <span className="text-sm text-gray-700">
//                 Welcome, {user?.email}
//               </span>
//               <button
//                 onClick={signOut}
//                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium">
//                 Sign Out
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
//                     <span className="text-white text-sm font-semibold">E</span>
//                   </div>
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-500 truncate">
//                       Total Enquiries
//                     </dt>
//                     <dd className="text-lg font-medium text-gray-900">
//                       {stats.totalEnquiries}
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
//                     <span className="text-white text-sm font-semibold">N</span>
//                   </div>
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-500 truncate">
//                       New Enquiries
//                     </dt>
//                     <dd className="text-lg font-medium text-gray-900">
//                       {stats.newEnquiries}
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
//                     <span className="text-white text-sm font-semibold">F</span>
//                   </div>
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-500 truncate">
//                       Form Submissions
//                     </dt>
//                     <dd className="text-lg font-medium text-gray-900">
//                       {stats.totalSubmissions}
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
//                     <span className="text-white text-sm font-semibold">N</span>
//                   </div>
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-500 truncate">
//                       New Submissions
//                     </dt>
//                     <dd className="text-lg font-medium text-gray-900">
//                       {stats.newSubmissions}
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white shadow rounded-lg">
//           <div className="border-b border-gray-200">
//             <nav
//               className="-mb-px flex space-x-8"
//               aria-label="Tabs">
//               <button
//                 onClick={() => setActiveTab('enquiries')}
//                 className={`${
//                   activeTab === 'enquiries'
//                     ? 'border-indigo-500 text-indigo-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm`}>
//                 Enquiries ({enquiries.length})
//               </button>
//               <button
//                 onClick={() => setActiveTab('submissions')}
//                 className={`${
//                   activeTab === 'submissions'
//                     ? 'border-indigo-500 text-indigo-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm`}>
//                 Form Submissions ({formSubmissions.length})
//               </button>
//             </nav>
//           </div>

//           <div className="p-6">
//             {activeTab === 'enquiries' && (
//               <div className="space-y-4">
//                 <h3 className="text-lg font-medium text-gray-900">
//                   Contact Enquiries
//                 </h3>
//                 {enquiries.length === 0 ? (
//                   <p className="text-gray-500">No enquiries yet.</p>
//                 ) : (
//                   <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
//                     <table className="min-w-full divide-y divide-gray-300">
//                       <thead className="bg-gray-50">
//                         <tr>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Contact Info
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Subject
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Message
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Status
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Date
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Actions
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-white divide-y divide-gray-200">
//                         {enquiries.map((enquiry) => (
//                           <tr key={enquiry.id}>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div>
//                                 <div className="text-sm font-medium text-gray-900">
//                                   {enquiry.name}
//                                 </div>
//                                 <div className="text-sm text-gray-500">
//                                   {enquiry.email}
//                                 </div>
//                               </div>
//                             </td>
//                             <td className="px-6 py-4">
//                               <div className="text-sm text-gray-900 max-w-xs truncate">
//                                 {enquiry.subject}
//                               </div>
//                             </td>
//                             <td className="px-6 py-4">
//                               <div className="text-sm text-gray-900 max-w-xs truncate">
//                                 {enquiry.message}
//                               </div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <span
//                                 className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
//                                   enquiry.status === 'new'
//                                     ? 'bg-green-100 text-green-800'
//                                     : enquiry.status === 'contacted'
//                                     ? 'bg-yellow-100 text-yellow-800'
//                                     : 'bg-gray-100 text-gray-800'
//                                 }`}>
//                                 {enquiry.status}
//                               </span>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
//                                 className="text-xs border border-gray-300 rounded px-2 py-1">
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
//                 <h3 className="text-lg font-medium text-gray-900">
//                   Event Form Submissions
//                 </h3>
//                 {formSubmissions.length === 0 ? (
//                   <p className="text-gray-500">No form submissions yet.</p>
//                 ) : (
//                   <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
//                     <table className="min-w-full divide-y divide-gray-300">
//                       <thead className="bg-gray-50">
//                         <tr>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Contact Info
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Event Details
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Message
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Status
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Date
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Actions
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-white divide-y divide-gray-200">
//                         {formSubmissions.map((submission) => (
//                           <tr key={submission.id}>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div>
//                                 <div className="text-sm font-medium text-gray-900">
//                                   {submission.first_name} {submission.last_name}
//                                 </div>
//                                 <div className="text-sm text-gray-500">
//                                   {submission.email}
//                                 </div>
//                                 {submission.phone && (
//                                   <div className="text-sm text-gray-500">
//                                     {submission.phone}
//                                   </div>
//                                 )}
//                               </div>
//                             </td>
//                             <td className="px-6 py-4">
//                               <div>
//                                 {submission.event_type && (
//                                   <div className="text-sm text-gray-900 capitalize">
//                                     {submission.event_type.replace('-', ' ')}
//                                   </div>
//                                 )}
//                                 {submission.event_date && (
//                                   <div className="text-sm text-gray-500">
//                                     {new Date(
//                                       submission.event_date
//                                     ).toLocaleDateString()}
//                                   </div>
//                                 )}
//                               </div>
//                             </td>
//                             <td className="px-6 py-4">
//                               <div className="text-sm text-gray-900 max-w-xs truncate">
//                                 {submission.message}
//                               </div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <span
//                                 className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
//                                   submission.status === 'new'
//                                     ? 'bg-green-100 text-green-800'
//                                     : submission.status === 'contacted'
//                                     ? 'bg-yellow-100 text-yellow-800'
//                                     : 'bg-gray-100 text-gray-800'
//                                 }`}>
//                                 {submission.status}
//                               </span>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
//                                 className="text-xs border border-gray-300 rounded px-2 py-1">
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
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// pages/admin/dashboard.js or app/admin/dashboard/page.js
'use client';

import { useState, useEffect } from 'react';
import { useRequireAuth } from '@/hooks/useRequireAuth';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

export default function AdminDashboard() {
  const { user, loading } = useRequireAuth(true);
  const { signOut } = useAuth();

  const [activeTab, setActiveTab] = useState('enquiries');
  const [enquiries, setEnquiries] = useState([]);
  const [formSubmissions, setFormSubmissions] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [stats, setStats] = useState({
    totalEnquiries: 0,
    newEnquiries: 0,
    totalSubmissions: 0,
    newSubmissions: 0,
  });

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    setLoadingData(true);
    try {
      // Fetch enquiries
      const { data: enquiriesData, error: enquiriesError } = await supabase
        .from('enquiries')
        .select('*')
        .order('created_at', { ascending: false });

      console.log('enquiry data', enquiriesData);

      if (enquiriesError) throw enquiriesError;

      // Fetch form submissions
      const { data: submissionsData, error: submissionsError } = await supabase
        .from('form_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (submissionsError) throw submissionsError;

      setEnquiries(enquiriesData || []);
      setFormSubmissions(submissionsData || []);

      // Calculate stats
      setStats({
        totalEnquiries: enquiriesData?.length || 0,
        newEnquiries:
          enquiriesData?.filter((e) => e.status === 'new').length || 0,
        totalSubmissions: submissionsData?.length || 0,
        newSubmissions:
          submissionsData?.filter((s) => s.status === 'new').length || 0,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoadingData(false);
    }
  };

  const updateStatus = async (table, id, newStatus) => {
    try {
      const { error } = await supabase
        .from(table)
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      // Refresh data
      await fetchData();
    } catch (error) {
      console.error('Error updating status:', error);
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

  if (loading || loadingData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
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
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
        </div>

        {/* Tabs */}
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
            </nav>
          </div>

          <div className="p-6">
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
                              <span
                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                  enquiry.status === 'new'
                                    ? 'bg-green-900 text-green-200 border border-green-600'
                                    : enquiry.status === 'contacted'
                                    ? 'bg-yellow-900 text-yellow-200 border border-yellow-600'
                                    : 'bg-gray-700 text-gray-200 border border-gray-500'
                                }`}>
                                {enquiry.status}
                              </span>
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
                              <span
                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                  submission.status === 'new'
                                    ? 'bg-green-900 text-green-200 border border-green-600'
                                    : submission.status === 'contacted'
                                    ? 'bg-yellow-900 text-yellow-200 border border-yellow-600'
                                    : 'bg-gray-700 text-gray-200 border border-gray-500'
                                }`}>
                                {submission.status}
                              </span>
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
          </div>
        </div>
      </main>
    </div>
  );
}
