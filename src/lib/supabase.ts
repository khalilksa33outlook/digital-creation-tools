import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qr-styler-pro.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyLXN0eWxlci1wcm8iLCJyb2xlIjoiYW5vbiIsImlhdCI6MTcwOTg0NTY0MCwiZXhwIjoyMDI1NDIxNjQwfQ.zF9T5K5T5X5T5K5T5X5T5K5T5X5T5K5T5X5T';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);