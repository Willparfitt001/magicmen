// // // contexts/AuthContext.js
// // 'use client';

// // import { createContext, useContext, useEffect, useState } from 'react';
// // import { supabase } from '@/lib/supabase';
// // import { useRouter } from 'next/navigation';

// // const AuthContext = createContext({});

// // export const useAuth = () => {
// //   const context = useContext(AuthContext);
// //   if (!context) {
// //     throw new Error('useAuth must be used within AuthProvider');
// //   }
// //   return context;
// // };

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [isAdmin, setIsAdmin] = useState(false);
// //   const router = useRouter();

// //   useEffect(() => {
// //     // Get initial session
// //     const getInitialSession = async () => {
// //       const {
// //         data: { session },
// //       } = await supabase.auth.getSession();
// //       setUser(session?.user || null);

// //       if (session?.user) {
// //         await checkAdminStatus(session.user.email);
// //       }

// //       setLoading(false);
// //     };

// //     getInitialSession();

// //     // Listen for auth changes
// //     const {
// //       data: { subscription },
// //     } = supabase.auth.onAuthStateChange(async (event, session) => {
// //       setUser(session?.user || null);

// //       if (session?.user) {
// //         await checkAdminStatus(session.user.email);
// //       } else {
// //         setIsAdmin(false);
// //       }

// //       setLoading(false);
// //     });

// //     return () => subscription.unsubscribe();
// //   }, []);

// //   const checkAdminStatus = async (email) => {
// //     try {
// //       const { data, error } = await supabase
// //         .from('admin_users')
// //         .select('id')
// //         .eq('email', email)
// //         .single();

// //       setIsAdmin(!error && data);
// //     } catch (error) {
// //       console.error('Error checking admin status:', error);
// //       setIsAdmin(false);
// //     }
// //   };

// //   const signIn = async (email, password) => {
// //     try {
// //       const { data, error } = await supabase.auth.signInWithPassword({
// //         email,
// //         password,
// //       });

// //       if (error) throw console.log(error, 'from error signin');
// //       return { data, error: error };
// //     } catch (error) {
// //       return { data: null, error };
// //     }
// //   };

// //   const signOut = async () => {
// //     try {
// //       const { error } = await supabase.auth.signOut();
// //       if (error) throw error;

// //       setUser(null);
// //       setIsAdmin(false);
// //       router.push('/admin/login');
// //     } catch (error) {
// //       console.error('Error signing out:', error);
// //     }
// //   };

// //   const value = {
// //     user,
// //     isAdmin,
// //     loading,
// //     signIn,
// //     signOut,
// //   };

// //   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// // };

// // contexts/AuthContext.js
// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';
// import { supabase } from '@/lib/supabase';
// import { useRouter } from 'next/navigation';

// const AuthContext = createContext({});

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within AuthProvider');
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     // Get initial session
//     const getInitialSession = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();
//       setUser(session?.user || null);

//       if (session?.user) {
//         await checkAdminStatus(session.user.email);
//       }

//       setLoading(false);
//     };

//     getInitialSession();

//     // Listen for auth changes
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange(async (event, session) => {
//       setUser(session?.user || null);

//       if (session?.user) {
//         await checkAdminStatus(session.user.email);
//       } else {
//         setIsAdmin(false);
//       }

//       setLoading(false);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   const checkAdminStatus = async (email) => {
//     try {
//       console.log('Checking admin status for:', email); // Debug log

//       const { data, error } = await supabase
//         .from('admin_users')
//         .select('id')
//         .eq('email', email)
//         .maybeSingle(); // Use maybeSingle() instead of single() to avoid errors when no match

//       console.log('Admin check result:', { data, error }); // Debug log

//       if (error) {
//         console.error('Error checking admin status:', error);
//         setIsAdmin(false);
//         return;
//       }

//       // Set admin status based on whether we found a record
//       setIsAdmin(!!data);
//     } catch (error) {
//       console.error('Error checking admin status:', error);
//       setIsAdmin(false);
//     }
//   };

//   const signIn = async (email, password) => {
//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

//       if (error) throw error;
//       return { data, error: null };
//     } catch (error) {
//       return { data: null, error };
//     }
//   };

//   const signOut = async () => {
//     try {
//       const { error } = await supabase.auth.signOut();
//       if (error) throw error;

//       setUser(null);
//       setIsAdmin(false);
//       router.push('/admin/login');
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };

//   const value = {
//     user,
//     isAdmin,
//     loading,
//     signIn,
//     signOut,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// contexts/AuthContext.js
'use client';

import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext({});

// Simple hardcoded admin credentials
const ADMIN_CREDENTIALS = {
  email: 'admin@dashboard.com',
  password: 'admin123',
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const signIn = async (email, password) => {
    try {
      setLoading(true);

      // Simple credential check
      if (
        email === ADMIN_CREDENTIALS.email &&
        password === ADMIN_CREDENTIALS.password
      ) {
        const userData = {
          id: 'admin-user',
          email: email,
          name: 'Admin User',
        };

        setUser(userData);
        setIsAdmin(true);

        return { data: { user: userData }, error: null };
      } else {
        return {
          data: null,
          error: { message: 'Invalid email or password' },
        };
      }
    } catch (error) {
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setUser(null);
      setIsAdmin(false);
      router.push('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const value = {
    user,
    isAdmin,
    loading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
