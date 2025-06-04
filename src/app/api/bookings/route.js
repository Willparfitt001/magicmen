import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Initialize Supabase client with service role key for direct DB access
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// POST - Create a new booking
export async function POST(request) {
  console.log('POST request received at /api/bookings');
  try {
    const bookingData = await request.json();

    // Validate required fields
    const requiredFields = [
      'email',
      'fullName',
      'contactNumber',
      'showDateTime',
      'serviceName',
      'servicePrice',
      'subtotal',
      'total',
    ];
    const missingFields = requiredFields.filter((field) => !bookingData[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Insert booking into Supabase
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          email: bookingData.email,
          full_name: bookingData.fullName,
          contact_number: bookingData.contactNumber,
          has_event_address: bookingData.hasEventAddress,
          event_address: bookingData.eventAddress || null,
          show_date_time: bookingData.showDateTime,
          is_date_time_confirmed: bookingData.isDateTimeConfirmed || false,
          additional_comments: bookingData.additionalComments || null,
          service_name: bookingData.serviceName,
          service_price: parseFloat(bookingData.servicePrice),
          subtotal: parseFloat(bookingData.subtotal),
          total: parseFloat(bookingData.total),
          coupon_code: bookingData.couponCode || null,
          card_holder_name: bookingData.cardHolderName || null,
          card_number: bookingData.cardNumber || null,
          card_cvv: bookingData.cardCode || null,
          payment_status: 'pending',
          booking_status: 'confirmed',
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Supabase POST error:', error);
      return NextResponse.json(
        { error: `Failed to create booking: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Booking created successfully',
        booking: data[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('API POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET - Retrieve bookings (for admin)
export async function GET(request) {
  console.log('GET request received at /api/bookings');
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const status = searchParams.get('status');
    const email = searchParams.get('email');

    // Validate pagination parameters
    if (page < 1 || limit < 1) {
      return NextResponse.json(
        { error: 'Invalid page or limit parameters' },
        { status: 400 }
      );
    }

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase
      .from('bookings')
      .select(
        'id, email, full_name, contact_number, has_event_address, event_address, show_date_time, is_date_time_confirmed, additional_comments, service_name, service_price, subtotal, total, coupon_code, card_holder_name, card_number, card_cvv, payment_status, booking_status, created_at',
        { count: 'exact' }
      )
      .order('created_at', { ascending: false })
      .range(from, to);

    // Apply filters
    if (status) {
      query = query.eq('booking_status', status);
    }
    if (email) {
      query = query.ilike('email', `%${email}%`);
    }

    const { data, error, count } = await query;

    if (error) {
      console.error('Supabase GET error:', error);
      return NextResponse.json(
        { error: `Failed to fetch bookings: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        bookings: data,
        pagination: {
          page,
          limit,
          total: count || 0,
          totalPages: Math.ceil((count || 0) / limit),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function methodNotAllowed(request) {
  console.log(`Unsupported method received: ${request.method}`);
  return new NextResponse(
    JSON.stringify({ error: `Method ${request.method} Not Allowed` }),
    {
      status: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json',
      },
    }
  );
}
