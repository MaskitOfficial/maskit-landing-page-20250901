// 임시 이메일 테스트 (실제 발송 없이 로그만)

export async function sendBetaSignupNotification(data: Record<string, unknown>) {
  try {
    console.log('=== 이메일 발송 시뮬레이션 ===');
    console.log('수신자: info@maskit.co.kr');
    console.log('신청자:', data.ownerName);
    console.log('공간명:', data.spaceName);
    console.log('이메일:', data.email);
    console.log('시간:', new Date().toLocaleString('ko-KR'));
    
    // 실제 서비스에서는 다른 이메일 서비스 (예: SendGrid, AWS SES) 사용 권장
    
    return { 
      success: true,
      adminMessageId: 'simulated-' + Date.now(),
      userMessageId: 'simulated-user-' + Date.now(),
      note: 'Gmail SMTP 인증 실패로 인한 시뮬레이션'
    };
  } catch (error) {
    console.error('Error in email simulation:', error);
    return { success: false, error: 'Email simulation failed' };
  }
}

export async function getEmailLogs() {
  return { 
    success: true, 
    logs: [] 
  };
}
