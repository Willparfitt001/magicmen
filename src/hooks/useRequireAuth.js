// hooks/useRequireAuth.js
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export const useRequireAuth = (requireAdmin = false) => {
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/admin/login');
      } else if (requireAdmin && !isAdmin) {
        router.push('/unauthorized');
      }
    }
  }, [user, isAdmin, loading, router, requireAdmin]);

  return { user, isAdmin, loading };
};
