// /src/app/api/submit-apply/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { appendContactToSheet } from '@/lib/googleSheets';
import { ContactFormData } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // 필수 필드 검증
    const requiredFields = ['companyName', 'email', 'contactPerson', 'phone'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { success: false, error: `필수 항목이 누락되었습니다: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: '올바른 이메일 형식을 입력해주세요.' },
        { status: 400 }
      );
    }
    
    // 전화번호 형식 검증 (숫자, 하이픈, 공백만 허용)
    const phoneRegex = /^[0-9\-\s]+$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { success: false, error: '올바른 전화번호 형식을 입력해주세요.' },
        { status: 400 }
      );
    }
    
    // 스프레드시트에 저장할 데이터 구성
    const sheetData: ContactFormData = {
      timestamp: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
      companyName: data.companyName,
      email: data.email,
      contactPerson: data.contactPerson,
      phone: data.phone,
      inquiry: data.inquiry || '', // 문의내용은 선택사항
    };
    
    // 스프레드시트에 데이터 추가
    const sheetResult = await appendContactToSheet(sheetData);
    if (!sheetResult.success) {
      return NextResponse.json(
        { success: false, error: sheetResult.error },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ 
      success: true,
      message: '문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.'
    });
  } catch (error) {
    console.error('Error processing apply form:', error);
    return NextResponse.json(
      { success: false, error: '문의 접수 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
