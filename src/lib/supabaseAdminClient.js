import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAdminKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY

let supabaseAdminInstance = null;

export const supabaseAdmin = (() => {
  if (!supabaseAdminInstance) {
    supabaseAdminInstance = createClient(supabaseUrl, supabaseAdminKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });
  }
  return supabaseAdminInstance;
})();
