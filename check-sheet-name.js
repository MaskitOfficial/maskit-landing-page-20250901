// 시트 이름 확인하는 스크립트
require('dotenv').config({ path: '.env.local' });
const { google } = require('googleapis');

// 구글 API 인증 설정
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

async function checkSheetNames() {
  try {
    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.BETA_SIGNUP_SPREADSHEET_ID;
    
    // 스프레드시트 정보 가져오기
    const response = await sheets.spreadsheets.get({
      spreadsheetId: spreadsheetId,
    });
    
    // 시트 이름 리스트 출력
    console.log('Available sheets:');
    response.data.sheets.forEach((sheet) => {
      console.log(`- ${sheet.properties.title}`);
    });
    
  } catch (error) {
    console.error('Error checking sheet names:', error);
  }
}

// 함수 실행
checkSheetNames();
