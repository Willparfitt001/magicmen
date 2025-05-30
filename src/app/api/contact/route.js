// // pages/api/contact.js (or app/api/contact/route.js for App Router)
// import { supabase } from '@/lib/supabase';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const { name, email, subject, message } = req.body;

//     // Validation
//     if (!name || !email || !subject || !message) {
//       return res.status(400).json({
//         message: 'All fields are required',
//         errors: {
//           name: !name ? 'Name is required' : '',
//           email: !email ? 'Email is required' : '',
//           subject: !subject ? 'Subject is required' : '',
//           message: !message ? 'Message is required' : '',
//         },
//       });
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({
//         message: 'Please enter a valid email address',
//       });
//     }

//     // Insert into Supabase
//     const { data, error } = await supabase
//       .from('enquiries')
//       .insert([
//         {
//           name: name.trim(),
//           email: email.trim().toLowerCase(),
//           subject: subject.trim(),
//           message: message.trim(),
//           status: 'new',
//         },
//       ])
//       .select()
//       .single();

//     if (error) {
//       console.error('Supabase error:', error);
//       return res.status(500).json({
//         message: 'Failed to submit enquiry. Please try again.',
//       });
//     }

//     // Optional: Send email notification here
//     // await sendNotificationEmail(data);

//     res.status(200).json({
//       message: 'Thank you! Your enquiry has been submitted successfully.',
//       id: data.id,
//     });
//   } catch (error) {
//     console.error('Contact form error:', error);
//     res.status(500).json({
//       message: 'Internal server error. Please try again.',
//     });
//   }
// }

// // pages/api/form-submission.js
// import { supabase } from '@/lib/supabase';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const {
//       firstName,
//       lastName,
//       email,
//       phone,
//       eventType,
//       eventDate,
//       message,
//       agreeToTerms,
//     } = req.body;

//     // Validation
//     if (!firstName || !lastName || !email || !message) {
//       return res.status(400).json({
//         message: 'Missing required fields',
//         errors: {
//           firstName: !firstName ? 'First name is required' : '',
//           lastName: !lastName ? 'Last name is required' : '',
//           email: !email ? 'Email is required' : '',
//           message: !message ? 'Message is required' : '',
//         },
//       });
//     }

//     if (!agreeToTerms) {
//       return res.status(400).json({
//         message: 'You must agree to the terms and conditions',
//       });
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({
//         message: 'Please enter a valid email address',
//       });
//     }

//     // Phone validation (if provided)
//     if (phone && !/^[\+]?[\d\s\-\(\)]{10,}$/.test(phone)) {
//       return res.status(400).json({
//         message: 'Please enter a valid phone number',
//       });
//     }

//     // Insert into Supabase
//     const { data, error } = await supabase
//       .from('form_submissions')
//       .insert([
//         {
//           first_name: firstName.trim(),
//           last_name: lastName.trim(),
//           email: email.trim().toLowerCase(),
//           phone: phone?.trim() || null,
//           event_type: eventType || null,
//           event_date: eventDate || null,
//           message: message.trim(),
//           agree_to_terms: Boolean(agreeToTerms),
//           status: 'new',
//         },
//       ])
//       .select()
//       .single();

//     if (error) {
//       console.error('Supabase error:', error);
//       return res.status(500).json({
//         message: 'Failed to submit form. Please try again.',
//       });
//     }

//     // Optional: Send email notification here
//     // await sendNotificationEmail(data);

//     res.status(200).json({
//       message: 'Thank you! Your form has been submitted successfully.',
//       id: data.id,
//     });
//   } catch (error) {
//     console.error('Form submission error:', error);
//     res.status(500).json({
//       message: 'Internal server error. Please try again.',
//     });
//   }
// }

// // pages/api/admin/enquiries.js
// import { createServerClient } from '@/lib/supabase';

// export default async function handler(req, res) {
//   const supabase = createServerClient(req, res);

//   // Check authentication
//   const { data: { user }, error: authError } = await supabase.auth.getUser();

//   if (authError || !user) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   // Check admin status
//   const { data: adminUser, error: adminError } = await supabase
//     .from('admin_users')
//     .select('id')
//     .eq('email', user.email)
//     .single();

//   if (adminError || !adminUser) {
//     return res.status(403).json({ message: 'Access denied' });
//   }

//   if (req.method === 'GET') {
//     try {
//       const { data, error } = await supabase
//         .from('enquiries')
//         .select('*')
//         .order('created_at', { ascending: false });

//       if (error) throw error;

//       res.status(200).json({ data });
//     } catch (error) {
//       console.error('Error fetching enquiries:', error);
//       res.status(500).json({ message: 'Failed to fetch enquiries' });
//     }
//   } else if (req.method === 'PATCH') {
//     try {
//       const { id, status } = req.body;

//       const { data, error } = await supabase
//         .from('enquiries')
//         .update({ status, updated_at: new Date().toISOString() })
//         .eq('id', id)
//         .select()
//         .single();

//       if (error) throw error;

//       res.status(200).json({ data });
//     } catch (error) {
//       console.error('Error updating enquiry:', error);
//       res.status(500).json({ message: 'Failed to update enquiry' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }

// // pages/api/admin/form-submissions.js
// import { createServerClient } from '@/lib/supabase';

// export default async function handler(req, res) {
//   const supabase = createServerClient(req, res);

//   // Check authentication and admin status (same as above)
//   const { data: { user }, error: authError } = await supabase.auth.getUser();

//   if (authError || !user) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   const { data: adminUser, error: adminError } = await supabase
//     .from('admin_users')
//     .select('id')
//     .eq('email', user.email)
//     .single();

//   if (adminError || !adminUser) {
//     return res.status(403).json({ message: 'Access denied' });
//   }

//   if (req.method === 'GET') {
//     try {
//       const { data, error } = await supabase
//         .from('form_submissions')
//         .select('*')
//         .order('created_at', { ascending: false });

//       if (error) throw error;

//       res.status(200).json({ data });
//     } catch (error) {
//       console.error('Error fetching form submissions:', error);
//       res.status(500).json({ message: 'Failed to fetch form submissions' });
//     }
//   } else if (req.method === 'PATCH') {
//     try {
//       const { id, status } = req.body;

//       const { data, error } = await supabase
//         .from('form_submissions')
//         .update({ status, updated_at: new Date().toISOString() })
//         .eq('id', id)
//         .select()
//         .single();

//       if (error) throw error;

//       res.status(200).json({ data });
//     } catch (error) {
//       console.error('Error updating form submission:', error);
//       res.status(500).json({ message: 'Failed to update form submission' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }

// app/api/contact/route.js
import { supabase } from '@/lib/supabase';

export async function POST(req) {
  const body = await req.json();
  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return Response.json(
      {
        message: 'All fields are required',
        errors: {
          name: !name ? 'Name is required' : '',
          email: !email ? 'Email is required' : '',
          subject: !subject ? 'Subject is required' : '',
          message: !message ? 'Message is required' : '',
        },
      },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json({ message: 'Invalid email address' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('enquiries')
    .insert([{ name, email, subject, message, status: 'new' }])
    .select()
    .single();

  if (error) {
    console.error('Supabase Error:', error);
    return Response.json({ message: 'Submission failed' }, { status: 500 });
  }

  return Response.json(
    { message: 'Submission successful', id: data.id },
    { status: 200 }
  );
}
