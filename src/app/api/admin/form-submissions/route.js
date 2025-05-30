// app/api/admin/form-submissions/route.js
import { createServerClient } from '@/lib/supabase-server';

export async function GET(req) {
  const supabase = createServerClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { data: adminUser, error: adminError } = await supabase
    .from('admin_users')
    .select('id')
    .eq('email', user.email)
    .single();

  if (adminError || !adminUser) {
    return Response.json({ message: 'Access denied' }, { status: 403 });
  }

  const { data, error } = await supabase
    .from('form_submissions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return Response.json({ message: 'Fetch failed' }, { status: 500 });
  }

  return Response.json({ data }, { status: 200 });
}

export async function PATCH(req) {
  const supabase = createServerClient();
  const body = await req.json();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { data: adminUser, error: adminError } = await supabase
    .from('admin_users')
    .select('id')
    .eq('email', user.email)
    .single();

  if (adminError || !adminUser) {
    return Response.json({ message: 'Access denied' }, { status: 403 });
  }

  const { id, status } = body;

  const { data, error } = await supabase
    .from('form_submissions')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    return Response.json({ message: 'Update failed' }, { status: 500 });
  }

  return Response.json({ data }, { status: 200 });
}
