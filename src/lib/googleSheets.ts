// /src/lib/googleSheets.ts
import { google } from 'googleapis';
import { BetaSignupData, ContactFormData, SheetResponse } from '../types';

// 구글 API 인증 설정
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.BETA_SIGNUP_SPREADSHEET_ID;

export async function getSheetData(): Promise<SheetResponse<Record<string, string>>> {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: '시트1!A:K',
    });

    const rows = response.data.values || [];
    
    if (rows.length === 0) {
      return { success: true, data: [] };
    }
    
    // 첫 번째 행을 헤더로 사용하여 데이터 형식화
    const headers = rows[0];
    const data = rows.slice(1).map(row => {
      const entry: Record<string, string> = {};
      headers.forEach((header, index) => {
        entry[header] = row[index] || '';
      });
      return entry;
    });

    return { 
      success: true, 
      data,
      rowCount: data.length
    };
  } catch (error) {
    console.error('Error reading from sheet:', error);
    return {
      success: false,
      error: 'Failed to read signup data',
    };
  }
}

export async function appendToSheet(data: BetaSignupData) {
  try {
    // 데이터 포맷팅
    const values = [
      [
        new Date().toISOString(), // 타임스탬프
        data.spaceType,
        data.spaceName,
        data.ownerName,
        data.email,
        data.phone,
        data.currentSystem,
        data.monthlyBookings,
        data.ticketSales,
        data.painPoints
      ]
    ];

    // 스프레드시트에 데이터 추가
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: '시트1!A:K', // 시트와 범위 지정
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });

    return {
      success: true,
      messageId: response.data.updates?.updatedRange,
    };
  } catch (error) {
    console.error('Error appending to sheet:', error);
    return {
      success: false,
      error: 'Failed to record signup data',
    };
  }
}

export async function appendContactToSheet(data: ContactFormData) {
  try {
    // 문의 데이터 포맷팅
    const values = [
      [
        data.timestamp,
        data.companyName,
        data.email,
        data.contactPerson,
        data.phone,
        data.inquiry
      ]
    ];

    // 스프레드시트에 데이터 추가 (다른 시트 또는 범위 사용)
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: '문의!A:F', // 문의용 시트
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });

    return {
      success: true,
      messageId: response.data.updates?.updatedRange,
    };
  } catch (error) {
    console.error('Error appending contact to sheet:', error);
    return {
      success: false,
      error: 'Failed to record contact data',
    };
  }
}

export async function getPartnerCount() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'BetaSignups!A:A', // A열만 가져와서 행 수 계산
    });

    // 헤더 제외하고 카운트
    const count = (response.data.values?.length || 1) - 1;
    return { count, total: 100 }; // 총 100개 중 현재 카운트
  } catch (error) {
    console.error('Error getting partner count:', error);
    return { count: 0, total: 100 };
  }
}