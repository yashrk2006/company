import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAdminKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY

/**
 * WARNING: SUPABASE ADMIN CLIENT
 * This client uses the Service Role Key which bypasses Row Level Security (RLS).
 * DO NOT USE THIS ON THE FRONTEND in a production environment.
 * The VITE_ prefix causes this key to be bundled into the client-side code.
 */

if (typeof window !== 'undefined' && supabaseAdminKey) {
  console.warn(
    "SECURITY WARNING: Supabase Service Role Key detected in browser environment. " +
    "This bypasses all database security policies. Please move admin operations to a secure backend or Supabase Edge Functions."
  );
}

let supabaseAdminInstance = null;

export const supabaseAdmin = (() => {
  if (!supabaseAdminKey) return null;
  
  if (!supabaseAdminInstance) {
    supabaseAdminInstance = createClient(supabaseUrl, supabaseAdminKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        // Disable GoTrue instance for admin to prevent multiple instance warnings
        detectSessionInUrl: false
      }
    });
  }
  return supabaseAdminInstance;
})();
