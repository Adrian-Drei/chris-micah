import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase =
  supabaseUrl?.startsWith("https://") &&
  supabasePublishableKey &&
  supabasePublishableKey !== "not-set-yet"
    ? createClient(supabaseUrl, supabasePublishableKey)
    : null;
