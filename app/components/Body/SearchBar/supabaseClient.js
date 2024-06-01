import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lrqxpxfxenwzqcuxhgro.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxycXhweGZ4ZW53enFjdXhoZ3JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNjY5MTEsImV4cCI6MjAzMjg0MjkxMX0.NgqvJmgRsM3pCDFYfAZQotPUw_SNnotfaGJJXCuwELA";
export const supabase = createClient(supabaseUrl, supabaseKey);
