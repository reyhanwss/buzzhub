// Isi dari Supabase > Project Settings > API Keys
const SUPABASE_URL = "PASTE_PROJECT_URL";
const SUPABASE_PUBLISHABLE_KEY = "PASTE_SB_PUBLISHABLE_KEY";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
