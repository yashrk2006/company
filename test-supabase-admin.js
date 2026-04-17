import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sdjkndfmqhyknjbtaobc.supabase.co';
const supabaseAdminKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkamtuZGZtcWh5a25qYnRhb2JjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NjE3OTU4MiwiZXhwIjoyMDkxNzU1NTgyfQ.njjpq0dqy2t99kl3g3MOTNyXaq9c2WHysJMA792gZ7I';
const supabase = createClient(supabaseUrl, supabaseAdminKey);

async function checkAdminRecords() {
  const tables = ['project_inquiries', 'job_applications', 'strategic_updates', 'team_members', 'portfolio_projects', 'support_tickets'];
  
  for (const table of tables) {
    console.log(`--- Checking table: ${table} ---`);
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .limit(1);

    if (error) {
      console.error(`Error fetching ${table}:`, error.message);
    } else {
      console.log(`Found ${data.length} records in ${table}.`);
      if (data.length > 0) {
        console.log(`Columns for ${table}:`, Object.keys(data[0]).join(', '));
      }
    }
    console.log('\n');
  }
}

checkAdminRecords();
