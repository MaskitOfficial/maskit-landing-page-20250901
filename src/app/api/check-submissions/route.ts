// /src/app/api/check-submissions/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSheetData } from '@/lib/googleSheets';
import { getEmailLogs } from '@/lib/emailService';

export async function GET(request: NextRequest) {
  try {
    // 기본 인증 체크 (실제 운영 시에는 더 강력한 인증이 필요)
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: '인증이 필요합니다' }, { status: 401 });
    }

    const token = authHeader.substring(7);
    if (token !== process.env.ADMIN_API_KEY) {
      return NextResponse.json({ error: '유효하지 않은 인증 토큰입니다' }, { status: 403 });
    }

    // 스프레드시트 데이터 가져오기
    const sheetData = await getSheetData();
    
    // 이메일 로그 가져오기
    const emailLogs = await getEmailLogs();

    return NextResponse.json({ 
      success: true,
      sheetData,
      emailLogs
    });
  } catch (error) {
    console.error('Error fetching submission data:', error);
    return NextResponse.json(
      { success: false, error: '데이터 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
