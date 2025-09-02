// /src/app/api/submit-beta/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { appendToSheet } from '@/lib/googleSheets';
import { sendBetaSignupNotification } from '@/lib/emailService';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // 필수 필드 검증
    const requiredFields = ['spaceType', 'spaceName', 'ownerName', 'email', 'phone'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { success: false, error: `필수 항목이 누락되었습니다: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // 스프레드시트에 데이터 추가
    const sheetResult = await appendToSheet(data);
    if (!sheetResult.success) {
      return NextResponse.json(
        { success: false, error: sheetResult.error },
        { status: 500 }
      );
    }
    
    // 이메일 알림 전송
    const emailResult = await sendBetaSignupNotification(data);
    if (!emailResult.success) {
      console.warn('❌ 이메일 알림 전송 실패, 하지만 데이터는 저장됨:', emailResult.error);
      console.log('=== 📧 베타 파트너 신청 정보 (이메일 대신 콘솔 출력) ===');
      console.log('🎯 수신 예정: info@maskit.co.kr');
      console.log('👤 신청자:', data.ownerName);
      console.log('🏢 공간명:', data.spaceName);
      console.log('📧 이메일:', data.email);
      console.log('📱 연락처:', data.phone);
      console.log('📝 공간 유형:', data.spaceType);
      console.log('🔧 현재 관리 방식:', data.currentSystem);
      console.log('📊 월 평균 예약:', data.monthlyBookings);
      console.log('🎫 티켓 판매:', data.ticketSales);
      console.log('❗ 주요 문제점:', data.painPoints);
      console.log('⏰ 신청 시간:', new Date().toLocaleString('ko-KR'));
      console.log('=================================================');
    } else {
      console.log('✅ 이메일 알림 전송 성공!');
    }
    
    return NextResponse.json({ 
      success: true,
      message: '베타 파트너 신청이 성공적으로 접수되었습니다.'
    });
  } catch (error) {
    console.error('Error processing beta signup:', error);
    return NextResponse.json(
      { success: false, error: '신청 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}