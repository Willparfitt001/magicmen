// app/api/form-submission/route.js
import { supabase } from '@/lib/supabase';

export async function POST(req) {
  const body = await req.json();
  const {
    firstName,
    lastName,
    email,
    phone,
    eventType,
    eventDate,
    message,
    agreeToTerms,
  } = body;

  if (!firstName || !lastName || !email || !message) {
    return Response.json(
      {
        message: 'Missing required fields',
        errors: {
          firstName: !firstName ? 'First name is required' : '',
          lastName: !lastName ? 'Last name is required' : '',
          email: !email ? 'Email is required' : '',
          message: !message ? 'Message is required' : '',
        },
      },
      { status: 400 }
    );
  }

  if (!agreeToTerms) {
    return Response.json(
      { message: 'You must agree to terms' },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json({ message: 'Invalid email' }, { status: 400 });
  }

  if (phone && !/^[\+]?[\d\s\-\(\)]{10,}$/.test(phone)) {
    return Response.json({ message: 'Invalid phone number' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('form_submissions')
    .insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phone || null,
        event_type: eventType || null,
        event_date: eventDate || null,
        message,
        agree_to_terms: agreeToTerms,
        status: 'new',
      },
    ])
    .select()
    .single();

  if (error) {
    console.error('Supabase Error:', error);
    return Response.json({ message: 'Failed to submit form' }, { status: 500 });
  }

  return Response.json(
    { message: 'Form submitted successfully', id: data.id },
    { status: 200 }
  );
}
