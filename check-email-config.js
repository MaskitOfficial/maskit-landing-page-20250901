// 이메일 환경 변수 확인
require('dotenv').config({ path: '.env.local' });

console.log('=== 이메일 환경 변수 확인 ===');
console.log('GMAIL_USER 설정됨:', !!process.env.GMAIL_USER);
console.log('GMAIL_USER 값:', process.env.GMAIL_USER);
console.log('GMAIL_PASSWORD 설정됨:', !!process.env.GMAIL_PASSWORD);
console.log('GMAIL_PASSWORD 길이:', process.env.GMAIL_PASSWORD?.length || 0);
console.log('ADMIN_EMAIL 설정됨:', !!process.env.ADMIN_EMAIL);
console.log('ADMIN_EMAIL 값:', process.env.ADMIN_EMAIL);

// 기본적인 nodemailer 테스트
const nodemailer = require('nodemailer');

if (process.env.GMAIL_USER && process.env.GMAIL_PASSWORD) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // TLS 사용
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // 연결 테스트
  transporter.verify((error, success) => {
    if (error) {
      console.log('SMTP 연결 실패:', error.message);
      console.log('상세 오류:', error);
    } else {
      console.log('SMTP 연결 성공!');
      console.log('✅ Gmail SMTP 서버에 성공적으로 연결되었습니다.');
    }
    process.exit(0);
  });
} else {
  console.log('Gmail 환경변수가 설정되지 않았습니다.');
}
