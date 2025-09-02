// A temporary script to check service account email
require('dotenv').config();

try {
  // Check if environment variables are set
  console.log('SPREADSHEET_ID set:', !!process.env.BETA_SIGNUP_SPREADSHEET_ID);
  console.log('SPREADSHEET_ID value:', process.env.BETA_SIGNUP_SPREADSHEET_ID);
  
  // Try to parse the service account key
  if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
    const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    console.log('Service Account Email:', serviceAccount.client_email);
    console.log('Service Account Project ID:', serviceAccount.project_id);
  } else {
    console.log('GOOGLE_SERVICE_ACCOUNT_KEY not found in environment variables');
    
    // Check if it's defined but empty
    if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY === '') {
      console.log('GOOGLE_SERVICE_ACCOUNT_KEY is defined but empty');
    }
  }
} catch (error) {
  console.error('Error parsing service account key:', error.message);
  // If it's a JSON parse error, print the first few characters to help debug
  if (error instanceof SyntaxError && process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
    console.log('Key starts with:', process.env.GOOGLE_SERVICE_ACCOUNT_KEY.substring(0, 20) + '...');
  }
}
